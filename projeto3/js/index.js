window
  .fetch("http://127.0.0.1:5500/api/produtos.json")
  .then((resposta) => resposta.json())
  .then((produtos) => {
    produtos.forEach((produto)=>{
      document.getElementById('lista-produtos').innerHTML +=`
          <div class="border p-2">
            <div class="text-center">
              <img
                src="./img/${produto.imagem}"
                alt="${produto.nome}"
                class="img-fluid"
              />
            </div>
            <h3 class="mt-1 text-uppercase">${produto.nome}</h3>
            <p class="mt-1 mb-1">
            ${produto.descricao}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <span>
                R$
                <span class="text-success">${produto.preco.toFixed(2).replace('.',',')}</span>
              </span>
              <a class="btn btn-success" href=""
                ><i class="fa-solid fa-plus"></i
              ></a>
            </div>
          </div>
      `;
    });
  });
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
            <a href="">
              <span>
                <i class="fa-solid fa-plus"></i>
              </span>
              <span> Saiba Mais </span>
            </a>
          </div>
      `;
    });
  });
