
import { ConfirmationModalProps, Product } from "../products-page/types/types"
import { StyledConfirmationModalOverlay, StyledModal, StyledConfirmText, StyledCart, StyledItemDescription, StyledConfirmedItem } from "./style"
import { StyledPriceInfo, StyledOrderTotal, StyledRedButton } from "../products-page/style"

export const ConfirmationModal = ({ cart, setCart, setProductsList, productsList, setIsModalOpen }: ConfirmationModalProps) => {
  const totalCost: number = cart.reduce((sum, item: Product) => sum + ((item.count ?? 0) * item.price), 0)

  const handleNewOrder = () => {
    setIsModalOpen(false)
    setCart([])

    const updatedList = productsList.map(item => ({...item, count: 0}))
    setProductsList(updatedList)
  }

  return (
    <StyledConfirmationModalOverlay>
      <StyledModal>
        <img src="assets/images/green-tick.svg" alt="" height='40px'/>
        <StyledConfirmText>
          <h1>Order Confirmed</h1>
          <h4>We hope you enjoy your food!</h4>
        </StyledConfirmText>
        <StyledCart>
          {cart.map((cartItem, index) => {
            const name = cartItem.name
            const count = cartItem.count 
            const price = (cartItem.price).toFixed(2)
            const total = ((cartItem.count ?? 0) * cartItem.price).toFixed(2)
            return(
              <StyledItemDescription>
                <img src={cartItem.image.thumbnail} alt="" width='80px' height='80px'/>
                <StyledConfirmedItem>
                  <div>
                    <h3>{name}</h3>
                    <StyledPriceInfo>
                      <h3>{`${count}x`}</h3>
                      <h3>{`@$${price}`}</h3>
                    </StyledPriceInfo>
                  </div>
                  <h3>{`$${total}`}</h3>
                </StyledConfirmedItem>
              </StyledItemDescription>
            )
          })}
          <StyledOrderTotal>
            <h3>Order Total</h3>
            <h1>${totalCost.toFixed(2)}</h1>
          </StyledOrderTotal>
        </StyledCart>
        <StyledRedButton onClick={handleNewOrder}>
          <h3>Start New Order</h3>
        </StyledRedButton>
      </StyledModal>
    </StyledConfirmationModalOverlay>
  )
}