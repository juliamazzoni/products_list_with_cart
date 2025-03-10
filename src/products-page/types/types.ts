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
  variant: 'primary' | 'secondary'
}

export interface SecondaryButtonProps {
  handleRemoveItems: (product: Product) => void;
  handleAddItem: (item: string) => void;
  product: Product;
  variant: 'primary' | 'secondary'
}

export interface ProductsListProps {
  setProductsList: (ProductsList: Product[]) => void,
  setCart: (ProductsList: Product[]) => void,
  cart: Product[],
  productsList: Product[]
}

export interface CartContainerProps {
  children: ReactNode,
  totalCount: number
}

export interface FullCartProps {
  cart: Product[],
  setCart: (cart: Product[]) => void,
  setProductsList: (ProductsList: Product[]) => void,
  productsList: Product[]
}

export interface ConfirmationModalProps {
  cart: Product[],
  setProductsList: (ProductsList: Product[]) => void,
  setCart: (ProductsList: Product[]) => void,
  setIsModalOpen: (isOpen: boolean) => void;
  productsList: Product[]
}