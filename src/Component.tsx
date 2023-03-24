import styled from "@emotion/styled";

const OneComponent = (props: any) => {
  return (
      <div>
        just a div
      </div>
  )
}

export const Child = styled(OneComponent)`
  background: #535bf2;
  color: red;
`

export const Parent = styled.div`
  right: 34px;
  ${Child} ~ & {
    left: 36px;
  }
  div {
    top : 42px;
  }
`
