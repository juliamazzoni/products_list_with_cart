
import styled from "styled-components"

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
}

export const StyledProductsPage = styled.div`
  max-width: 1440px;
  margin: 50px 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
`

export const  StyledProductsListContainer = styled.div`
  gap: 20px
`

export const StyledTitle = styled.h1`
 font-size: 40px;
 margin: 30px 0;
`
export const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

export const StyledItem = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledImage = styled.div`

img {
  border-radius: 20px;
  width: 100%;
}
`

export const StyledText = styled.div`

  h3 {
    color: darkgray;
    margin: 8px 0;
    font-size: 14px;
  }

  h2 {
    margin: 8px 0;
    font-size: 16px;
  }

  h2:nth-of-type(2) {
    color: hsl(14, 86%, 42%);
  }
`

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ variant }) => {
    if (variant === 'primary') return 'center';
    if (variant === 'secondary') return 'space-between'
  }
  };
  gap: 10px;
  margin: -35px auto 10px;
  color: ${({ variant }) => {
    if (variant === 'primary') return '#000';
    if (variant === 'secondary') return '#fff'
  }
  };
  font-size: 16px;
  width: 200px;
  padding: 12px;
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
    }
`

export const StyledRedText = styled.h1`
    color: hsl(14, 86%, 42%);
    font-size: 30px;
    margin: 0;
`

export const StyledCartContainer = styled.div`
    background-color: #fff;
    align-self: flex-start;
    padding: 40px;
    border-radius: 30px;
`

export const StyledEmptyCart = styled.div`
    text-align: center; 

    img {
      width: 45%;
      padding: 30px;
    }

    h4 {
      color: hsl(12, 20%, 44%);
      margin: 0;
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
      padding: 2px;
    }
`

export const StyledPriceInfo = styled.div`
    display: flex;
    gap: 15px;

    h3 {
      color: hsl(14, 25%, 72%);
    }

    h3:nth-of-type(1) {
      color: hsl(14, 86%, 42%);
    }

    h3:nth-of-type(2) {
      font-weight: normal;
    }
`

export const StyledOrderTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: normal;
    }
    `

export const StyledCarbonNeutralMessage = styled.div`
    background-color: hsl(13, 31%, 94%);
    border-radius: 15px;
    text-align: center;
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    
    h3 {
      font-weight: normal;
    }

    span {
      font-weight: bold;
    }
`

export const StyledRedButton = styled.button`
    margin-top: 35px;
    width: 100%;
    border-radius: 50px;
    border: 1px solid hsl(14, 25%, 72%);
    background-color: hsl(14, 86%, 42%);
    color: #fff;

    h3 {
      font-size: 20px;
    }

`