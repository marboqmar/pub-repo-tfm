export interface ItemDetailsModel {
  key: number;
  name: string;
  img: string;
  img2: string;
  price: number;
  description: string;
  origin: string;
}

export interface ItemsFromAPIModel extends ItemDetailsModel {}
