import { ReactNode } from 'react'

type Image = {
  desktop: string,
  mobile: string,
  tablet: string,
  thumbnail: string
}

export interface Product {
  category: string, 
  image: Image,
  name: string, 
  price: number,
  count?: number
}

export interface PrimaryButtonProps {
  handleAddItem: (productName: string) => void;
  productName: string;
}

export interface SecondaryButtonProps {
  handleRemoveItems: (product: Product) => void;
  handleAddItem: (item: string) => void;
  product: Product;
}

export interface ProductsListProps {
  setProductsList: (ProductsList: Product[]) => void,
  productsList: Product[]
}

export interface CartContainerProps {
  children: ReactNode,
  totalCount: number
}

export interface FullCartProps {
  productsList: Product[];
}