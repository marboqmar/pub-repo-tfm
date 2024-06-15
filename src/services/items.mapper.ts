import { ItemDetailsModel, ItemsFromAPIModel } from "../models";

export const mapItemsFromAPIToItemDetails = (
  items: ItemsFromAPIModel[],
): ItemDetailsModel[] => {
  return items.map((individualItem: ItemDetailsModel) => {
    return {
      key: individualItem.key,
      name: individualItem.name,
      img: individualItem.img,
      img2: individualItem.img2,
      price: individualItem.price,
      description: individualItem.description,
      origin: individualItem.origin,
    };
  });
};
