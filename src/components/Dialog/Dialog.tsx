import "./Dialog.scss";
import { createPortal } from "react-dom";

interface DialogProps {
  show: boolean;
  onOverlayClick?: () => void;
  contentClassName?: string;
  image: string;
}

export const Dialog = ({ show, onOverlayClick, image }: DialogProps) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <>
      <div className={"dialog--overlay"} onClick={onOverlayClick}>
        <img className={"dialog--image margin-lat-auto"} src={image} alt={""} />
      </div>
    </>,
    document.body,
  );
};
