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
  handleAddItem: (item: string) => void;
  item: string;
}

export interface SecondaryButtonProps {
  handleRemoveItems: (item: Product) => void;
  handleAddItem: (item: string) => void;
  item: Product;
}