
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
  price: number
}

export const ProductsList = () => {
  const [productsList, setProductsList] = useState([])
  console.log(productsList)

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data = await res.json()
      
      setProductsList(data)
    }
    fetchData()
  },[])

  return (
    <StyledProductsListContainer>
      <h1>Desserts</h1>
      <StyledProductsList>
      {productsList.map((product: Product, index: number) => {

        return (
        <StyledItem key={index}>
          <StyledImage>
            <img src={product.image.desktop} alt="" width='400px'/>
          </StyledImage>

          <StyledButton>Add to Cart</StyledButton>

          <StyledText>
            <h3>{product.category}</h3>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
          </StyledText>

        </StyledItem>

        )
      })}
      </StyledProductsList>
    </StyledProductsListContainer>
  )
}