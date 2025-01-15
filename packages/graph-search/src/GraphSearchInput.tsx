import { debounce } from '@react-sigma/core';
import React, { CSSProperties, FC, ReactNode, useCallback, useEffect, useMemo } from 'react';
import { NoticeProps, OptionProps, SingleValueProps } from 'react-select';
import AsyncSelect from 'react-select/async';

import { EdgeById } from './Edge';
import { NodeById } from './Node';
import { ReactComponent as SearchIcon } from './assets/icons/magnifying-glass.svg';
import { GraphSearchOption, ItemType, Labels } from './types';
import { useGraphSearch } from './useGraphSearch';

export interface GraphSearchInputProps {
  className?: string;
  /**
   * The value of the input
   */
  value?: GraphSearchOption | null;
  /**
   * If not specified, we search on nodes & edges
   */
  type?: ItemType;
  /**
   * What we do when user select an item
   */
  onChange: (e: GraphSearchOption | null) => void;
  /**
   * What we do when user focus an item on the dropdown.
   * This can be useful to highlight the focus element in the graph
   */
  onFocus?: (e: GraphSearchOption | null) => void;
  /**
   * With this function, you can filter/enhance the result displayed to the user.
   * This can be useful to add action / messages, limit the number of result
   * or highlight the search result in the graph
   */
  postSearchResult?: (options: GraphSearchOption[]) => GraphSearchOption[];

  /**
   * It's possible to customize the drop down indicator, by passing a JSX Element.
   * First one is for the "zoom in", second for "zoom out" and third for "view whole graph".
   */
  children?: [React.JSX.Element];

  /**
   * Map of the labels we use in the component.
   * This is usefull for I18N
   */
  labels?: Labels;
}

function getSingleValueComponent(labels: Labels) {
  return function SingleValue(props: SingleValueProps<GraphSearchOption>) {
    const { getStyles, innerProps } = props;
    return (
      <div {...innerProps} style={getStyles('singleValue', props) as CSSProperties}>
        {props.data.type === 'nodes' && <NodeById id={props.data.id} labels={labels} />}
        {props.data.type === 'edges' && <EdgeById id={props.data.id} labels={labels} />}
      </div>
    );
  };
}

function getNoOptionsMessageComponent(labels: Labels = {}) {
  return function NoOptionsMessage(props: NoticeProps<GraphSearchOption>) {
    return (
      <div className="message text-center">
        {props.selectProps.inputValue.length > 0 ? (
          <span>{labels['no_result_found'] || 'No result found'}</span>
        ) : (
          <span className="text-muted">{labels['type_something_to_search'] || 'Type something to search'}</span>
        )}
      </div>
    );
  };
}

function getDropdownIndicatorComponent(Icon: ReactNode): FC {
  return function DropdownIndicatorComponent() {
    return <div className="dropdown-indicator">{Icon}</div>;
  };
}

/**
 *
 * @param onFocus
 * @returns
 */
function getOptionComponent(onFocus: GraphSearchInputProps['onFocus']): FC<OptionProps<GraphSearchOption, false>> {
  return function OptionComponent(props: OptionProps<GraphSearchOption, false>) {
    const { data, innerProps, className, isFocused, innerRef, getStyles } = props;

    useEffect(() => {
      if (onFocus && isFocused) onFocus(data);
    }, [isFocused, data]);

    return (
      <div
        {...innerProps}
        style={getStyles('option', props) as CSSProperties}
        className={`${className || ''} ${isFocused ? 'selected' : ''} option hoverable text-ellipsis`}
        ref={innerRef}
      >
        {data.type === 'nodes' && <NodeById id={data.id} />}
        {data.type === 'edges' && <EdgeById id={data.id} />}
        {data.type === 'message' && <div className="message">{data.message}</div>}
      </div>
    );
  };
}

/**
 * Component thats display the search input.
 *
 * @category Component
 */
export const GraphSearchInput: FC<GraphSearchInputProps> = ({
  className,
  onChange,
  onFocus,
  postSearchResult,
  type,
  value,
  children,
  labels = {},
}) => {
  const { search } = useGraphSearch();

  /**
   * Loading the options while the user is typing.
   */
  const loadOptions = useCallback(
    async (query: string) => {
      if (onFocus) onFocus(null);
      const result = await search(query, type);
      return postSearchResult ? postSearchResult(result) : result;
    },
    [type, postSearchResult, search, onFocus],
  );

  /**
   * Memoized components for react-select.
   */
  const DropdownIndicator = useMemo(
    () => getDropdownIndicatorComponent(children ? children[0] : <SearchIcon />),
    [children],
  );
  const OptionComponent = useMemo(() => getOptionComponent(onFocus), [onFocus]);
  const SingleValue = useMemo(() => getSingleValueComponent(labels), [labels]);
  const NoOptionsMessage = useMemo(() => getNoOptionsMessageComponent(labels), [labels]);

  return (
    <AsyncSelect
      classNamePrefix="react-select"
      className={`${className || ''} graph-search`}
      isClearable
      placeholder={labels['placeholder'] || 'Search...'}
      value={value || null}
      loadOptions={debounce(loadOptions, 150)}
      onChange={onChange}
      onMenuClose={() => onFocus && onFocus(null)}
      components={{
        SingleValue,
        Option: OptionComponent,
        NoOptionsMessage,
        DropdownIndicator,
      }}
      styles={{
        menu: (styles) => ({ ...styles, borderRadius: 0 }),
        control: (styles) => ({ ...styles, borderRadius: 0 }),
        valueContainer: (provided) => ({
          ...provided,
          flexWrap: 'nowrap',
        }),
      }}
    />
  );
};
