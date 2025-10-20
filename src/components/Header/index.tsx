export function Header() {
  return (
    <>
      <div className=" h-20 bg-azul5 flex items-center justify-around text-white border-solid border-b-azul1 border-b-2">
        <h2>I'm Riobis</h2>
        <div>
          <ul className="flex gap-2 *:text-[14px] *:hover:text-azul1">
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
        </div>
      </div>
    </>
  )
}
