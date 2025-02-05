import { StyledProductsPage } from "./style"
import { ProductsList } from "./ProductsList"
import { EmptyCart } from "./EmptyCart"
import { CartContainer } from "./CartContainer"
import { useState, useEffect } from 'react'
import { Product } from "./types/types"

export const ProductsPage = () => {

  const [productsList, setProductsList] = useState<Product[]>([])

  const totalCount: number = productsList.reduce((sum, item: Product) => sum + (item.count ?? 0), 0)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json')
      const data: Product[] = await res.json()
      const updatedData: Product[] = data.map(item => (
        {...item, count: 0}
      ))
      setProductsList(updatedData)
    }
    fetchData()
  },[])

  return (
    <StyledProductsPage>
      <ProductsList setProductsList={setProductsList} productsList={productsList}/>
      <CartContainer totalCount={totalCount} >
        {totalCount === 0 ?
        <EmptyCart />
        :
        <h1>Full cart</h1>
        }
      </CartContainer>
    </StyledProductsPage>
 
  )
}