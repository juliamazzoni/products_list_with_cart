
import styled from "styled-components"

export const StyledProductsPage = styled.div`
  margin: 50px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
`

export const  StyledProductsListContainer = styled.div`
  border: 1px solid red;  
  gap: 20px
`

export const StyledProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`

export const StyledItem = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledImage = styled.div`

img {
  border-radius: 20px;
}
`

export const StyledText = styled.div`

  h3 {
    color: darkgray;
    margin: 8px 0;
  }

  h2 {
    margin: 8px 0;
  }

  h2:nth-of-type(2) {
    color: red;
  }
`

export const StyledButton = styled.button`
`