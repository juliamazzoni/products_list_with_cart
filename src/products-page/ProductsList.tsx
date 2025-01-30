
import { useEffect, useState } from "react"
import { StyledProductsListContainer, StyledProductsList, StyledItem, StyledImage, StyledText, StyledButton } from "./style"

type Image = {
  desktop: string,
  mobile: string,
  tablet: string,
  thumbnail: string
}

interface Product {
  category: string, 
  image: Image,
  name: string, 
  price: number,
  count?: number
}

export const ProductsList = () => {
  const [productsList, setProductsList] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      setProductsList(data)
    }
    fetchData()
  },[])

  const handleAddItem = (product: Product) => {
    const updatedProductsList = productsList.map(item => {
      if (item.name === product.name){
        if(!item.count){
          return {...item, count: 1}
        }else{
          return {...item, count: item.count + 1}
        }
      }
      return item
    })
    setProductsList(updatedProductsList)
  }

  const handleRemoveItems = ((product: Product) => {
    const updatedProductsList = productsList.map(item => {
      if (item.name === product.name){
        if(item.count){
          return {...item, count: item.count - 1}
        }
      }
      return item
    })
    setProductsList(updatedProductsList)
  })

  return (
    <StyledProductsListContainer>
      <h1>Desserts</h1>
      <StyledProductsList>
      {productsList.map((product: Product, index: number) => {

        return (
        <StyledItem key={index}>
          <StyledImage>
            <img src={product.image.desktop} alt="" />
          </StyledImage>

          {!product.count ?
          
            <StyledButton variant="primary" onClick={() => handleAddItem(product)}>
              <img src="assets/images/icon-add-to-cart.svg" alt="" width='25px'/>
              Add to Cart
            </StyledButton>
          
            :

            <StyledButton variant="secondary">
              <img onClick={() => handleRemoveItems(product)} src="assets/images/icon-decrement-quantity.svg" alt="" width='15px' height='15px'/>
              {product.count}
              <img onClick={() => handleAddItem(product)} src="assets/images/icon-increment-quantity.svg" alt="" width='15px' height='15px'/>

            </StyledButton>

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