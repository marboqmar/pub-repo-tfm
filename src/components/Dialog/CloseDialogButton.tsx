import "./Dialog.scss";
import classNames from "classnames";
import { Button } from "../Button/Button.tsx";

interface CloseDialogButtonProps {
  className?: string;
  onClick: () => void;
}

export const CloseDialogButton = ({
  className = "",
  onClick,
}: CloseDialogButtonProps) => {
  return (
    <Button
      className={classNames({ "dialog--close": true, [className]: className })}
      color={"none"}
      withoutHover
      paddingSize={"none"}
      borderType={"none"}
      withoutBorderRadius
      onClick={onClick}
    >
      <i className="fa fa-x" />
    </Button>
  );
};
