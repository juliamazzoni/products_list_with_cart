
import styled from "styled-components"

interface variantProps {
  variant: 'primary' | 'secondary';
}

export const StyledProductsPage = styled.div`
  margin: 25px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 1200px){
    grid-template-columns: 2fr 1fr;
    max-width: 1440px;
    margin: 50px 100px;
  }
`

export const  StyledProductsListContainer = styled.div`
  display: grid;
  gap: 20px;

  
`

export const StyledTitle = styled.h1`
  font-size: 30px;
  margin: 30px 0;

 @media (min-width: 1200px){
  font-size: 40px;
 }
`

export const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  
  @media (min-width: 1200px){
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`

export const StyledItem = styled.div`
  display: grid;
  gap: 1px;
  

  @media (min-width: 1200px){
    gap: 10px;
  }
`

export const StyledImage = styled.div<variantProps>`
  img {
    border-radius: 20px;
    width: 100%;
    border: ${({ variant }) => {
      if (variant === 'primary') return '2px solid #fff';
      if (variant === 'secondary') return '2px solid hsl(14, 86%, 42%)';
      return 'none'
    }
  };
}
`

export const StyledText = styled.div`
  h3 {
    color: darkgray;
    margin: 8px 0;
    font-size: 12px;
    
  }

  h2 {
    font-size: 14px;
    margin: 8px 0;
    
  }

  h2:nth-of-type(2) {
    color: hsl(14, 86%, 42%);
  }

  @media (min-width: 1200px){
    h3 {
      font-size: 14px;
    }
  
    h2 {
      font-size: 16px;
    }
  }
`

export const StyledButton = styled.button<variantProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ variant }) => {
    if (variant === 'primary') return 'center';
    if (variant === 'secondary') return 'space-between'
  }
  };
  gap: 10px;
  margin: -18px auto 10px;
  
  color: ${({ variant }) => {
    if (variant === 'primary') return '#000';
    if (variant === 'secondary') return '#fff'
  }
  };
  font-size: 14px;
  width: 150px;
  padding: 6px;
  border-radius: 25px;
  border: 1px solid hsl(14, 25%, 72%);
  background-color: ${({ variant }) => {
    if (variant === 'primary') return '#fff';
    if (variant === 'secondary') return 'hsl(14, 86%, 42%)'
  }
  };

    svg {
      border-radius: 50%;
      height: 10px;
      width: 10px;
      border: 1px solid #fff;
      padding: 2px;    
    }

    svg:active {
      background-color: #fff;
      path {
        fill: hsl(14, 86%, 42%);
      }
      cursor: pointer;
    }    

    svg:hover {
      cursor: pointer;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      cursor: pointer;
      color: hsl(14, 86%, 42%);
      border-color: hsl(14, 86%, 42%);
    }

    @media (min-width: 360px){
      width: 60%;
      padding: 10px 8px;
      margin: -30px auto 10px;
    }

    @media (min-width: 1200px){
      font-size: 16px;
      width: 80%;
      padding: 12px;
      margin: -35px auto 10px;
    }

`

export const StyledRedText = styled.h1`
    color: hsl(14, 86%, 42%);
    font-size: 20px;
    margin: 0;

    @media (min-width: 1200px){
      font-size: 30px;
    }
`

export const StyledCartContainer = styled.div`
    background-color: #fff;
    align-self: flex-start;
    padding: 20px;
    border-radius: 30px;

    @media (min-width: 1200px){
      padding: 40px;
      min-width: 200px;
    }
`

export const StyledEmptyCart = styled.div`
    text-align: center; 

    img {
      width: 45%;
      padding: 10px;
    }

    h4 {
      color: hsl(12, 20%, 44%);
      font-size: 8px;
      margin: 0;
    }

    @media (min-width: 1200px){
      h4 {
        font-size: 12px;
      }

      img {
        padding: 30px;
      }
    }
`

export const StyledCartItem = styled.div`
    display: flex;    
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid hsl(13, 31%, 94%);
    padding: 10px 0;

    img {
      border: 2px solid hsl(14, 25%, 72%);
      border-radius: 50%;
      padding: 1px;
      width: 12px;
      height: 12px;
    }

    h3 {
      font-size: 14px;
    }

    @media (min-width: 1200px){

      img {
        padding: 2px;
        width: 10px;
        height: 10px;
      }

      h3 {
        font-size: 16px;
      }
    }
`

export const StyledPriceInfo = styled.div`
    display: flex;
    gap: 10px;
    
    h3 {
      color: hsl(14, 25%, 72%);
      margin: 0;
    }

    h3:nth-of-type(1) {
      color: hsl(14, 86%, 42%);
    }

    h3:nth-of-type(2) {
      font-weight: normal;
    }

    @media (min-width: 1200px){
      gap: 15px;

      h3 {
        margin: 2px;
      }
    }
`

export const StyledOrderTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;

    h3 {
      font-size: 14px;
      font-weight: normal;
    }

    h1 {
      font-size: 20px;
    }

    @media (min-width: 1200px){
      
      h3 {
        font-size: 16px;
      }

      h1 {
        font-size: 25px;
      }
      
    }
    `

export const StyledCarbonNeutralMessage = styled.div`
    background-color: hsl(13, 31%, 94%);
    border-radius: 15px;
    text-align: center;
    display: flex;
    gap: 6px;
    padding: 8px 10px;
    
    justify-content: center;
    
    h3 {
      font-weight: normal;
      font-size: 10px;
    }

    span {
      font-weight: bold;
    }

    img {
      width: 18px;
    }

    @media (min-width: 1200px){
      padding: 6px 12px;

      img {
        width: 22px;
      }

      h3 {
        font-size: 12px;
      }
    }

`

export const StyledRedButton = styled.button`
    margin-top: 15px;
    width: 100%;
    border-radius: 50px;
    border: 1px solid hsl(14, 25%, 72%);
    background-color: hsl(14, 86%, 42%);
    color: #fff;

    h3 {
      font-size: 14px;
      margin: 10px;
    }

    &:hover {
      cursor: pointer;
    }

    &:active {
      cursor: pointer;
      background-color: rgb(158 49 16);
    }

    @media (min-width: 1200px){
      padding: 8px;
      h3 {
        font-size: 20px;
      }
      
    }

`