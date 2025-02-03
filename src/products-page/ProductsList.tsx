
import React, { useEffect, useState } from "react"
import { StyledProductsListContainer, StyledTitle, StyledProductsList, StyledItem, StyledImage, StyledText } from "./style"
import { PrimaryButton } from "./PrimaryButton"
import { SecondaryButton } from "./SecondaryButton"
import { Product } from "./types/types"


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

  const handleAddItem = (productName: string) => {
    const updatedProductsList = productsList.map(item => {
      if (item.name === productName){
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
      <StyledTitle>
        Desserts
      </StyledTitle>

      <StyledProductsList>
      {productsList.map((product: Product, index: number) => {
        return (
        <StyledItem key={index}>
          <StyledImage>
            <img src={product.image.desktop} alt="" />
          </StyledImage>

          {!product.count ?
            <PrimaryButton handleAddItem={handleAddItem} item={product.name}/>
            :
            <SecondaryButton handleRemoveItems={handleRemoveItems} handleAddItem={handleAddItem} item={product} />             
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