import { FullCartProps, Product } from "./types/types"
import { StyledCartItem, StyledPriceInfo, StyledOrderTotal, StyledCarbonNeutralMessage, StyledRedButton } from "./style"
import { ConfirmationModal } from "../confirmation-modal/ConfirmationModal"
import { useState } from "react"


export const FullCart = ({ cart, setCart, setProductsList, productsList }: FullCartProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalCost: number = cart.reduce((sum, item: Product) => sum + ((item.count ?? 0) * item.price), 0)

  const handleCloseItem = (itemName: string) => {
    const updatedCart: Product[] = cart.map(cartItem => {
      if(cartItem.name === itemName){
        return {...cartItem, count: 0}
      }
      return cartItem
    })

    const updatedProductsList: Product[] = productsList.map(item => {
      if(item.name === itemName){
        return {...item, count: 0}
      }
      return item
    })

    setProductsList(updatedProductsList)
    setCart(updatedCart)
  }

  const handleConfirmOrder = () => {
    setIsModalOpen(true)
  }

  return (
    <div>
       {cart
        .filter(cartItem => (cartItem.count ?? 0) > 0)
        .map((cartItem, index) => {
        const name = cartItem.name
        const count = cartItem.count ?? 0
        const price = (cartItem.price).toFixed(2)
        const total = (count * cartItem.price).toFixed(2)

        return (
          <StyledCartItem key={index}>
            <div>
              <h3>{name}</h3>
              <StyledPriceInfo>
                <h3>{`${count}x`}</h3>
                <h3>{`@$${price} `}</h3>
                <h3>{`$${total}`}</h3>
              </StyledPriceInfo>
            </div>
            <img onClick={() => handleCloseItem(name)} src="assets/images/icon-remove-item.svg" alt="" width='20px' height='20px'/>
          </StyledCartItem>
        )
       })}
       <StyledOrderTotal>
          <h3>Order Total</h3>
          <h1>${totalCost.toFixed(2)}</h1>
       </StyledOrderTotal>
       <StyledCarbonNeutralMessage>
          <img src="assets/images/icon-carbon-neutral.svg" alt="" width='30px' />
          <h3>This is a <span>carbon-neutral</span> delivery</h3>
       </StyledCarbonNeutralMessage>
       <StyledRedButton onClick={handleConfirmOrder}>
        <h3>Confirm Order</h3>
       </StyledRedButton>

       {isModalOpen && <ConfirmationModal setIsModalOpen={setIsModalOpen} setCart={setCart} setProductsList={setProductsList} productsList={productsList} cart={cart} />}
    </div>
  )
}