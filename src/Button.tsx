import styled from "@emotion/styled";



export const Child = styled.div`
  color: red;
`

export const Parent = styled.div`
  ${Child} {
    color: green;
  }
`

export const Button = styled.button`
  font-weight: bold;
  padding: 9px 11px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
`
