import { Container, ContainerLinks } from "./styles"

export function Header() {
  return (
    <>
      <Container>
        <h2>I'm Riobis</h2>
        <ContainerLinks>
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Sobre mim</a>
            </li>
          </ul>
        </ContainerLinks>
      </Container>
    </>
  )
}
