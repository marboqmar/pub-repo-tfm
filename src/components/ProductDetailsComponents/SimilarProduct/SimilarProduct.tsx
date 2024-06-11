import "./SimilarProduct.scss";
import { Button } from "../../Button/Button.tsx";
import { Link } from "react-router-dom";
import { ItemDetailsModel } from "../../../models";

export const SimilarProduct = ({ product }: { product: ItemDetailsModel }) => {
  return (
    <Button
      component={Link}
      isLink
      className={"similarProduct--item"}
      color={"none"}
      paddingSize={"none"}
      withoutHover
      borderType={"none"}
      to={"/detalles-producto"}
    >
      <img
        className={"similarProduct--img"}
        src={product.img}
        alt={"cart item image"}
      />
      <span className={"bold"}>{product.name}</span>
      <span>{product.price}€</span>
    </Button>
  );
};
