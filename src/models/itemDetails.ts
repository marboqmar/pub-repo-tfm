export interface ItemDetailsModel {
  key: number;
  name: string;
  nameEn: string;
  img: string;
  img2: string;
  price: number;
  description1: string;
  description2: string;
  descriptionEn1: string;
  descriptionEn2: string;
  origin: string;
}

export interface ItemsFromAPIModel extends ItemDetailsModel {}
