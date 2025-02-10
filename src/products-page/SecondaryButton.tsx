import { StyledButton } from "./style";
import { ReactSVG } from "react-svg"
import { SecondaryButtonProps } from "./types/types";

export const SecondaryButton = ({ handleRemoveItems, handleAddItem,  product, variant }: SecondaryButtonProps) => {

  return (
    <StyledButton variant={variant}>
      <ReactSVG onClick={() => handleRemoveItems(product)} src="assets/images/icon-decrement-quantity.svg" />
      {product.count}
      <ReactSVG onClick={() => handleAddItem(product.name)} src="assets/images/icon-increment-quantity.svg" />
    </StyledButton>
  )
}