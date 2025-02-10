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
  padding: 30px;
  border-radius: 15px;
  display: grid; 
  gap: 30px;
`

export const StyledConfirmText = styled.div`
  display: grid; 
  gap: 12px;
  h1, h4 {
    margin: 0;
  }

  h1 {
    font-size: 40px;
  }

  h4 {
    color: hsl(7, 20%, 60%);
    font-weight: normal;
  }
`

export const StyledCart = styled.div`
  background-color: hsl(13, 31%, 94%);
  border-radius: 10px;
  padding: 20px;
  width: 600px;
  max-height: 500px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledItemDescription = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid hsl(14, 25%, 72%);
  padding: 20px;
`

export const StyledConfirmedItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h3 {
    margin: 5px;
  }
`