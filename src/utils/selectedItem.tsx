import ITEM_LIST from "../lists/ITEM_LIST.tsx";
import { ItemDetailsModel } from "../models";

const selectedItem = () => {
  const item: ItemDetailsModel[] = ITEM_LIST.filter(
    (item: ItemDetailsModel) => {
      return item.key === Number(localStorage.getItem("Item"));
    },
  );

  return item[0];
};

export default selectedItem;
