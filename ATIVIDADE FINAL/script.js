function listaDeClientes(num, callback) {
  let url = "https://randomuser.me/api/?results=5";
    fetch(url)
      .then((resposta) => {
          if (resposta.ok) {
              return resposta.json();
          } 
      }).then((resultado) => {
          callback(resultado);
      }).catch((erro) => {
          let recipiente = document.querySelector("#lista-clientes");
          imprimirErro(
              recipiente,
              "Lista de clientes não disponível. Tente mais tarde."
          );
      });
}
function mostrarClientes(resultado) {
  let container = document.querySelector("#lista-clientes");
  let impressao = "";

  resultado.results.forEach((cliente) => {
      impressao += `
      <div class="d-flex justify-content-center id="cartao">
        <div class="card" style="width: 18rem;" id="lista-clientes">
          <img src="${cliente.picture.large}" class="card-img-top" alt="...">
           <div class="card-body">
            <h5 class="card-title" id="nome">${cliente.name.first} ${cliente.name.last} </h5>
              <p class="card-text" id="descricao">${cliente.location.timezone.description}</p>
                <a href="clientes.html" class="btn btn-primary" style="color: #fff; 
                background-color: #40026C;">Cliente</a></p>
           </div>
        </div>
      </div>
      </div>
      `;
  });
  container.innerHTML = impressao;
}
function imprimirErro(recipiente, mensagem) {
  recipiente.innerHTML = `
  <div class="alert alert-danger" role="alert">${mensagem}</div>
  `;
}
listaDeClientes(1,mostrarClientes);
 
