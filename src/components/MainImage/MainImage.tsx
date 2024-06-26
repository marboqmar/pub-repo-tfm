import { Button } from "../Button/Button.tsx";
import { Dialog, CloseDialogButton } from "../Dialog/";
import { useEffect, useState } from "react";

interface MainImageProps {
  currentImage: string;
  allImages: string[];
}

export const MainImage = ({ currentImage, allImages }: MainImageProps) => {
  const currentUrl = window.location.href;
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(
    allImages.indexOf(currentImage),
  );

  const canClickOnPrev = currentIndex > 0;
  const canClickOnNext = currentIndex < allImages.length - 1;
  const visibleImage = allImages[currentIndex];

  useEffect(() => {
    setCurrentIndex(allImages.indexOf(currentImage));
  }, [currentImage, allImages]);

  const handlePrevClick = () => {
    if (canClickOnPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (canClickOnNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleMainImageClick = () => {
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
          onClick={handleMainImageClick}
        >
          <img className={"itemDetails--img"} src={visibleImage} alt={""} />
        </Button>
        <Dialog show={isDialogOpen} onOverlayClick={handleOverlayClick}>
          <CloseDialogButton onClick={handleOverlayClick}></CloseDialogButton>
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={handlePrevClick}
            disabled={!canClickOnPrev}
          >
            <i className="fa-solid fa-chevron-left itemDetails--mainImage-arrows"></i>
          </Button>
          <img
            className={"itemDetails--mainImage margin-lat-auto"}
            src={visibleImage}
            alt={""}
          />
          <Button
            color={"none"}
            withoutHover
            paddingSize={"none"}
            borderType={"none"}
            withoutBorderRadius
            onClick={handleNextClick}
            disabled={!canClickOnNext}
          >
            <i className="fa-solid fa-chevron-right itemDetails--mainImage-arrows"></i>
          </Button>
        </Dialog>
      </>
    );
  }

  return <img className={"itemDetails--img"} src={currentImage} alt={""} />;
};
