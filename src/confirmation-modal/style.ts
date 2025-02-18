import styled from 'styled-components'

export const StyledConfirmationModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  display: grid; 
  gap: 10px;
  max-height: 70%;
  min-width: 200px;

  @media (min-width: 1100px){
    gap: 15px;
    padding: 40px;
    max-width: 400px;
   }
`

export const StyledConfirmText = styled.div`
  display: grid; 
  gap: 8px;
  
  h1, h4 {
    margin: 0;
  }

  h1 {
    font-size: 20px;
    width: 100px;
  }

  h4 {
    color: hsl(7, 20%, 60%);
    font-weight: normal;
    font-size: 10px;
  }

  @media (min-width: 1100px){
    gap: 12px;

    h1 {
      font-size: 25px;
    }
  
    h4 {
      font-size: 15px;
    }
   }
`

export const StyledCart = styled.div`
  background-color: hsl(13, 31%, 94%);
  border-radius: 10px;
  padding: 10px;
  max-width: 180px;
  max-height: 150px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1100px){
    max-width: 350px;
    padding: 20px;
    max-height: auto;
  }
`

export const StyledItemDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px;
  border-bottom: 1px solid hsl(14, 25%, 72%);
  
  img {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 1100px){
    gap: 20px;
    padding: 20px;

    img {
      width: 60px;
      height: 60px;
    }
   
   }
`

export const StyledConfirmedItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 5px;

  h3 {
    margin: 5px;
    font-size: 8px;
  }

  @media (min-width: 1100px){
    
    gap: 10px;

    h3 {
      font-size: 16px;
    }
   }
`