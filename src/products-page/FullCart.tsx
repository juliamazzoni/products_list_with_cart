import { FullCartProps } from "./types/types"
import { StyledCartItem, StyledPriceInfo } from "./style"


export const FullCart = ({ productsList }: FullCartProps) => {

  // const totalCost: number = productsList.reduce((sum, item: Product) => sum + ((item.count ?? 0) * item.price), 0)

  return (
    <div>
       {productsList.filter(item => item.count ?? 0 > 0)
       .map((item, index) => {
        const name = item.name
        const count = item.count ?? 0
        const price = (item.price).toFixed(2)
        const total = (count * item.price).toFixed(2)

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
            <img src="assets/images/icon-remove-item.svg" alt="" width='20px' height='20px'/>
          </StyledCartItem>
        )
       })}
    </div>
  )
}