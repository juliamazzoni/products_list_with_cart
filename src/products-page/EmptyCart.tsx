import { StyledEmptyCart, StyledRedText } from "./style"



export const EmptyCart = () => {
  return (
    <StyledEmptyCart>
      <StyledRedText>
        Your Cart (0) 
      </ StyledRedText>
      <div>
        <img src="assets/images/illustration-empty-cart.svg" alt="" />
        <h4>Your added items will appear here</h4>
      </div>
    </StyledEmptyCart>
    
  )
}