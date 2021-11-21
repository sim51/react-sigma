import React, { ChangeEvent, useEffect, useState, CSSProperties } from "react";
import { Attributes } from "graphology-types";
import { useSigma } from "../hooks/useSigma";

/**
 * Properties for `SearchControl` component
 */
export interface SearchControlProps {
  /**
   * HTML id
   */
  id?: string;

  /**
   * HTML class
   */
  className?: string;

  /**
   * HTML CSS style
   */
  style?: CSSProperties;
}

/**
 * The `SearchControl` create an input text where user can search a node in the graph by its label.
 * There is an autocomplete based on includes & lower case.
 * When a node is found, the graph will focus on the highlighted node
 *
 * ```typescript
 * <SigmaContainer>
 *   <ControlsContainer>
 *     <SearchControl />
 *   </ControlsContainer>
 * </SigmaContainer>
 * ```
 *
 * @category Component
 */
export const SearchControl: React.FC<SearchControlProps> = ({ id, className, style }) => {
  // Get sigma
  const sigma = useSigma();
  // Search value
  const [search, setSearch] = useState<string>("");
  // Datalist values
  const [values, setValues] = useState<Array<{ id: string; label: string }>>([]);
  // Selected
  const [selected, setSelected] = useState<string | null>(null);

  /**
   * When the search input changes, recompute the autocomplete values.
   */
  useEffect(() => {
    const newValues: Array<{ id: string; label: string }> = [];
    if (!selected && search.length > 1) {
      sigma.getGraph().forEachNode((key: string, attributes: Attributes): void => {
        if (attributes.label && attributes.label.toLowerCase().includes(search.toLowerCase()))
          newValues.push({ id: key, label: attributes.label });
      });
    }
    setValues(newValues);
  }, [search]);

  /**
   * When the selected item changes, highlighted the node and center the camera on it.
   */
  useEffect(() => {
    if (!selected) {
      return;
    }

    sigma.getGraph().setNodeAttribute(selected, "highlighted", true);
    const nodeDisplayData = sigma.getNodeDisplayData(selected);

    if (nodeDisplayData) {
      sigma.getCamera().animate(nodeDisplayData, {
        easing: "linear",
        duration: 500,
      });
    }

    return () => {
      sigma.getGraph().setNodeAttribute(selected, "highlighted", false);
    };
  }, [selected]);

  /**
   * On change event handler for the search input, to set the state.
   */
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchString = e.target.value;
    const valueItem = values.find(value => value.label === searchString);
    if (valueItem) {
      setSearch(valueItem.label);
      setValues([]);
      setSelected(valueItem.id);
    } else {
      setSelected(null);
      setSearch(searchString);
    }
  };

  // Common html props for the div
  const props = {
    className: `react-sigma-search ${className ? className : ""}`,
    id,
    style,
  };

  return (
    <div {...props}>
      <input type="text" placeholder="Search..." list="nodes" value={search} onChange={onInputChange} />
      <datalist id="nodes">
        {values.map((value: { id: string; label: string }) => (
          <option key={value.id} value={value.label}>
            {value.label}
          </option>
        ))}
      </datalist>
    </div>
  );
};
