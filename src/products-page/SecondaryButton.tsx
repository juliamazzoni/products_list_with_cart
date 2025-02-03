import { StyledButton } from "./style";
import { ReactSVG } from "react-svg"
import { SecondaryButtonProps } from "./types/types";

export const SecondaryButton = ({ handleRemoveItems, handleAddItem,  item }: SecondaryButtonProps) => {
  return (
    <StyledButton variant="secondary">
      <ReactSVG onClick={() => handleRemoveItems(item)} src="assets/images/icon-decrement-quantity.svg" />
      {item.count}
      <ReactSVG onClick={() => handleAddItem(item.name)} src="assets/images/icon-increment-quantity.svg" />
    </StyledButton>
  )
}