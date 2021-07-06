import React, { useEffect, useState } from "react";
import { useSigma } from "../hooks";

/**
 * The `SearchControl` create an input text where user can search a node in the graph by its label.
 * There is an autocomplete based on the include & lower case.
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
export const SearchControl: React.FC = () => {
  // Get sigma
  const sigma = useSigma();
  // Search value
  const [search, setSearch] = useState<string>("");
  // Datalist values
  const [values, setValues] = useState<Array<{ id: string; label: string }>>([]);
  // Selected
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const newValues: Array<{ id: string; label: string }> = [];
    if (!selected && search.length > 1) {
      sigma.getGraph().forEachNode((key: string, attributes: any): void => {
        if (attributes.label && attributes.label.toLowerCase().includes(search.toLowerCase()))
          newValues.push({ id: key, label: attributes.label });
      });
    }
    setValues(newValues);
  }, [search]);

  useEffect(() => {
    if (selected) {
      sigma.getGraph().setNodeAttribute(selected, "highlighted", true);
      sigma.getCamera().animate(sigma.getNodeDisplayData(selected), {
        easing: "linear",
        duration: 500,
      });
      return () => {
        sigma.getGraph().setNodeAttribute(selected, "highlighted", false);
      };
    }
  }, [selected]);

  const onInputChange = e => {
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

  return (
    <div>
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
