import { StyledButton } from "./style"
import { PrimaryButtonProps } from "./types/types"


export const PrimaryButton = ({ handleAddItem, productName }: PrimaryButtonProps) => {
  return (

    <StyledButton variant="primary" onClick={() => handleAddItem(productName)}>
      <img  src="assets/images/icon-add-to-cart.svg" alt="icon-add-to-cart"/>
      Add to Cart
    </StyledButton>

  )
}