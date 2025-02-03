
import styled from "styled-components"

interface StyledButtonProps {
  variant: 'primary' | 'secondary';
}

export const StyledProductsPage = styled.div`
  max-width: 1440px;
  margin: 50px 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  border: 1px solid red;  
`

export const  StyledProductsListContainer = styled.div`
  border: 1px solid red;  
  gap: 20px
`

export const StyledTitle = styled.h1`
 font-size: 40px;
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
    color: red;
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