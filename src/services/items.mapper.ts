import { ItemDetailsModel, ItemsFromAPIModel } from "../models";

export const mapItemsFromAPIToItemDetails = (
  items: ItemsFromAPIModel[],
): ItemDetailsModel[] => {
  return items.map((individualItem: ItemDetailsModel) => {
    return {
      key: individualItem.key,
      name: individualItem.name,
      nameEn: individualItem.nameEn,
      img: individualItem.img,
      img2: individualItem.img2,
      price: individualItem.price,
      description1: individualItem.description1,
      description2: individualItem.description2,
      descriptionEn1: individualItem.descriptionEn1,
      descriptionEn2: individualItem.descriptionEn2,
      origin: individualItem.origin,
    };
  });
};
