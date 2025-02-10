
import { StyledProductsListContainer, StyledTitle, StyledProductsList, StyledItem, StyledImage, StyledText } from "./style"
import { PrimaryButton } from "./PrimaryButton"
import { SecondaryButton } from "./SecondaryButton"
import { Product, ProductsListProps } from "./types/types"

export const ProductsList = ( {setProductsList, setCart, cart, productsList}: ProductsListProps ) => {

  const handleAddItem = (productName: string) => {
    const updatedProductsList = productsList.map(item => {
      if (item.name === productName){
        const itemInCart = cart.some(cartItem => cartItem.name === productName)
        if(itemInCart){
          const updatedCart = cart.map(cartItem => {
            if(cartItem.name === productName){
              return {...item, count: (item.count ?? 0) + 1 }
            }
            return cartItem
          })
          setCart(updatedCart)
        }else{
          setCart([...cart, {...item, count: (item.count ?? 0) + 1}])
        }
        return {...item, count: (item.count ?? 0) + 1}
      }
      return item
    })
    setProductsList(updatedProductsList)
  }

  const handleRemoveItems = ((product: Product) => {
    const updatedProductsList = productsList.map(item => {
      if (item.name === product.name){
        if(item.count){
          const updatedCart = cart.map(cartItem => {
            if(cartItem.name === product.name){
              return {...cartItem, count: (cartItem.count ?? 0) - 1}
            }
            return cartItem
          })
          setCart(updatedCart)
          return {...item, count: item.count - 1}
        }
      }
      return item
    })
    setProductsList(updatedProductsList)
  })

  return (
    <StyledProductsListContainer>
      <StyledTitle>
        Desserts
      </StyledTitle>
      <StyledProductsList>
        {productsList.map((product: Product, index: number) => {
          const variant = product.count ? 'secondary' : 'primary'
          
          return (
          <StyledItem key={index}>
            <StyledImage variant={variant}>
              <img src={product.image.desktop} alt="" />
            </StyledImage>
            {product.count === 0 ?
              <PrimaryButton variant={variant} handleAddItem={handleAddItem} productName={product.name}/>
              :
              <SecondaryButton variant={variant} handleRemoveItems={handleRemoveItems} handleAddItem={handleAddItem} product={product} />             
            }
            <StyledText>
              <h3>{product.category}</h3>
              <h2>{product.name}</h2>
              <h2>{`$${(product.price).toFixed(2)}`}</h2>
            </StyledText>
          </StyledItem>
          )
        })}
      </StyledProductsList>
    </StyledProductsListContainer>
  )
}