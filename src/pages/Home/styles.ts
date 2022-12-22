import styled from "styled-components";

interface SelectButtonProps {
  isActive: boolean
}

export const HomeContainer = styled.main``

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 30rem;
  margin: auto;
  padding: 0.5rem;
img{
  width: 10rem;
  margin: 2rem auto;
  
}

label{
  margin-top: 1rem;
}
input{
  margin-top: 0.5rem;
  height: 3rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.pink};
  font-size: 1.5rem;
  padding: 0.75rem;
  color: ${props => props.theme.green};
}
`

export const SelectButton = styled.button<SelectButtonProps>`
width: 100%;
height: 3rem;
border-radius: 5px;
border: 1px solid ${props => props.theme.green};
background: ${props => props.isActive === true ? props.theme.green : props.theme.background};
color: ${props => props.isActive === true ? props.theme.background : props.theme.green};
font-size: 1.25rem;
font-weight: 600;
`
export const SelectContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`
export const CalculateButton = styled.button`
  margin-top: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.pink};
  background: ${props => props.theme.pink};
  color: ${props => props.theme.background};
  font-size: 1.25rem;
  font-weight: 600;
`
export const ResultContainer = styled.div`
  margin: 1rem auto;
  width: 100%;
  max-width: 30rem;
  padding: 0.5rem;
  span{
    background: rgba(129, 206, 203, 0.3);
    display: block;
    padding: 0.5rem;
    color: ${props => props.theme.text};
    
  }
 `