window
  .fetch("http://127.0.0.1:5500/api/servicos.json")
  .then((resposta) => resposta.json())
  .then((servicos) => {
    servicos.forEach((servico)=>{
      document.getElementById('lista-servicos').innerHTML +=`
          <div class="mb-5 mb-lg-0">
            <div
              class="capa"
              style="
                background-image: url('./img/${servico.imagem}');
              "
            ></div>
            <h3 class="fs-3 text-warning fw-normal mt-3">${servico.nome}</h3>
            <p class="mt-1 lh-25 mb-2">
            ${servico.descricao};
            </p>
            <a href="${servico.url}">
              <span>
                <i class="fa-solid fa-plus"></i>
              </span>
              <span> Saiba Mais </span>
            </a>
          </div>
      `;
    });
  });