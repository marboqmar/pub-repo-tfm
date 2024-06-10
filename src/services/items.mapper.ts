import { ItemDetailsModel, ItemsFromAPIModel } from "../models";

export const mapItemsFromAPIToItemDetails = (
  items: ItemsFromAPIModel[],
): ItemDetailsModel[] => {
  return items.map((individualItem: ItemDetailsModel) => {
    return {
      key: individualItem.key,
      name: individualItem.name,
      img: individualItem.img,
      price: individualItem.price,
      description: individualItem.description,
      origin: individualItem.origin,
    };
  });
};
