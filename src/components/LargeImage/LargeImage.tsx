import { Button } from "../Button/Button.tsx";
import { Dialog } from "../Dialog/Dialog.tsx";
import { useContext, useState } from "react";
import { MainImageContext } from "../../contexts/MainImageContextProvider.tsx";

export const LargeImage = () => {
  const currentUrl = window.location.href;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { mainImage } = useContext(MainImageContext);

  const handleOnClick = () => {
    setIsDialogOpen(true);
  };

  const handleOverlayClick = () => {
    setIsDialogOpen(false);
  };

  if (currentUrl.includes("detalles-producto")) {
    return (
      <>
        <Button
          className={"itemDetails--img-btn"}
          color={"none"}
          withoutHover
          paddingSize={"none"}
          borderType={"none"}
          withoutBorderRadius
          onClick={handleOnClick}
        >
          <img className={"itemDetails--img"} src={mainImage} alt={""} />
        </Button>
        <Dialog show={isDialogOpen} onOverlayClick={handleOverlayClick}>
          <i className="fa-solid fa-chevron-left itemDetails--mainImage-arrows"></i>
          <img
            className={"itemDetails--mainImage margin-lat-auto"}
            src={mainImage}
            alt={""}
          />
          <i className="fa-solid fa-chevron-right itemDetails--mainImage-arrows"></i>
        </Dialog>
      </>
    );
  }

  return <img className={"itemDetails--img"} src={mainImage} alt={""} />;
};
