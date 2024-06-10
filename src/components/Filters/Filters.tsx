import FILTER_OPTIONS_LIST from "../../lists/FILTER_OPTIONS_LIST.ts";
import { FilterModel } from "../../models";
import { Button } from "../Button/Button.tsx";
import { ActiveFilterContext } from "../../contexts/ActiveFilterContextProvider.tsx";
import { useContext } from "react";

export const Filters = () => {
  const { activeFilter, setNewActiveFilter } = useContext(ActiveFilterContext);

  const handleFilterChange = (option: string) => {
    setNewActiveFilter(option === activeFilter ? "" : option);
  };

  return (
    <>
      {FILTER_OPTIONS_LIST().map((option: FilterModel) => (
        <Button
          key={option.key}
          onClick={() => {
            handleFilterChange(option.key);
          }}
          color={"none"}
          paddingSize={"small"}
          withoutHover
          borderType={"none"}
          className={
            activeFilter === option.key
              ? "filterItem filterItem--clicked"
              : "filterItem"
          }
        >
          {option.name}
        </Button>
      ))}
    </>
  );
};
