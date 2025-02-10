import { StyledButton } from "./style"
import { PrimaryButtonProps } from "./types/types"


export const PrimaryButton = ({ handleAddItem, productName, variant }: PrimaryButtonProps) => {
  return (

    <StyledButton variant={variant} onClick={() => handleAddItem(productName)}>
      <img  src="assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart"/>
      Add to Cart
    </StyledButton>

  )
}