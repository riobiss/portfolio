import styled from "styled-components"

export const Container = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #061426;
  
  h2 {
    color: white;
  }
`

export const ContainerLinks = styled.nav`
  display: flex;
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    padding: 10px;
    border-radius: 10px;
  }
`
