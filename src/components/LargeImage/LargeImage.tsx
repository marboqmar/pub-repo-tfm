import { Button } from "../Button/Button.tsx";
import { Dialog, CloseDialogButton } from "../Dialog";
import { useContext, useState } from "react";
import { MainImageContext } from "../../contexts/MainImageContextProvider.tsx";

interface LargeImageProps {
  img: string;
  img2: string;
}

export const LargeImage = ({ img, img2 }: LargeImageProps) => {
  const currentUrl = window.location.href;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const { mainImage, setNewMainImage } = useContext(MainImageContext);

  const handleOnClick = () => {
    setIsDialogOpen(true);
  };

  const handleOverlayClick = () => {
    setIsDialogOpen(false);
  };

  const handleChangeImage = () => {
    if (mainImage.includes("2")) {
      setNewMainImage(img);
    } else {
      setNewMainImage(img2);
    }
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
          <CloseDialogButton onClick={handleOverlayClick}></CloseDialogButton>
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={handleChangeImage}
          >
            <i className="fa-solid fa-chevron-left itemDetails--mainImage-arrows"></i>
          </Button>
          <img
            className={"itemDetails--mainImage margin-lat-auto"}
            src={mainImage}
            alt={""}
          />
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={handleChangeImage}
          >
            <i
              onClick={handleChangeImage}
              className="fa-solid fa-chevron-right itemDetails--mainImage-arrows"
            ></i>
          </Button>
        </Dialog>
      </>
    );
  }

  return <img className={"itemDetails--img"} src={mainImage} alt={""} />;
};
