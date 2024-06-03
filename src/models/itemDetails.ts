export interface ItemDetailsModel {
  key: number;
  name: string;
  img: string;
  price: number;
  description: string;
  origin: string;
}

export interface ItemsFromAPIModel extends ItemDetailsModel {}
