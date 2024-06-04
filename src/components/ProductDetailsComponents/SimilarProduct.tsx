import { Button } from "../Button/Button.tsx";
import { Link } from "react-router-dom";

export const SimilarProduct = () => {
  return (
    <Button
      component={Link}
      className={"similarProduct--item flex-column"}
      color={"none"}
      paddingSize={"none"}
      withoutHover
      borderType={"none"}
      to={"/detalles-producto"}
    >
      <img
        className={"similarProduct--img"}
        src={"/cart-image.png"}
        alt={"cart item image"}
      />
      <span className={"bold"}>Knight’s greatsword</span>
      <span>160€</span>
    </Button>
  );
};