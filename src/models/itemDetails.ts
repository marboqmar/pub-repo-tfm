export interface ItemDetailsModel {
  key: number;
  name: string;
  nameEn: string;
  img: string;
  img2: string;
  price: number;
  description: string;
  descriptionEn: string;
  origin: string;
}

export interface ItemsFromAPIModel extends ItemDetailsModel {}
