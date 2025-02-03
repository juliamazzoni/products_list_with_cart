import { StyledButton } from "./style"
import { PrimaryButtonProps } from "./types/types"


export const PrimaryButton = ({ handleAddItem, item }: PrimaryButtonProps) => {
  return (

    <StyledButton variant="primary" onClick={() => handleAddItem(item)}>
      <img  src="assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart"/>
      Add to Cart
    </StyledButton>

  )
}