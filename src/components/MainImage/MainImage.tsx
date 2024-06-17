import { Button } from "../Button/Button.tsx";
import { Dialog } from "../Dialog/Dialog.tsx";
import { useState } from "react";

export const MainImage = ({ image }: { image: string }) => {
  const currentUrl = window.location.href;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

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
          <img className={"itemDetails--img"} src={image} alt={""} />
        </Button>
        <Dialog show={isDialogOpen} onOverlayClick={handleOverlayClick}>
          <img
            className={"itemDetails--mainImage margin-lat-auto"}
            src={image}
            alt={""}
          />
        </Dialog>
      </>
    );
  }

  return <img className={"itemDetails--img"} src={image} alt={""} />;
};
