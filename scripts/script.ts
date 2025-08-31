const botao = document.getElementById("botao-tema") as HTMLButtonElement;
const body = document.body as HTMLBodyElement;

// Persistência do tema
const temasalvo: string | null = localStorage.getItem("tema");
temaEscuro(temasalvo === "escuro");

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo: boolean): void {
  if (tipo) {
    body.classList.add("escuro");
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("escuro");
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener("click", () => {
  const isescuro: boolean = body.classList.toggle("escuro");
  temaEscuro(isescuro);
  localStorage.setItem("tema", isescuro ? "escuro" : "claro");
});

// Scroll suave para links de navegação
const navLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll("#menu ul a.link");

navLinks.forEach((link: HTMLAnchorElement) => {
  link.addEventListener("click", function (e: MouseEvent) {
    e.preventDefault();

    const href = (link as HTMLAnchorElement).getAttribute("href");
    if (!href) return;

    const target: HTMLElement | null = document.querySelector(href);
    if (target) {
      const header = document.querySelector("header") as HTMLElement;
      const headerHeight: number = header.offsetHeight;
      const targetPosition: number = target.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
