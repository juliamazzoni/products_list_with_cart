import { StyledCartContainer, StyledRedText } from "./style"
import { CartContainerProps } from "./types/types"

export const CartContainer = ({ children, totalCount }: CartContainerProps) => {
  return (
    <StyledCartContainer>
      <StyledRedText>
        Your Cart ({totalCount}) 
      </ StyledRedText>
      {children}
    </StyledCartContainer>
  )
}