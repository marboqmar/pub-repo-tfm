import "./Dialog.scss";
import { createPortal } from "react-dom";
import { ReactNode } from "react";

interface DialogProps {
  show: boolean;
  onOverlayClick: () => void;
  children: ReactNode;
}

export const Dialog = ({ show, onOverlayClick, children }: DialogProps) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div className={"dialog"}>
      <div className={"dialog--overlay"} onClick={onOverlayClick}>
        <div className={"dialog--content"}>{children}</div>
      </div>
    </div>,
    document.body,
  );
};
