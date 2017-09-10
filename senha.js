var fazTabela = function() {
  var aSecreto = "<tr class = 'codigo'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td></tr>";
  $(".tabela").append(aSecreto);
  for (var i = 1; i <= 10; i++) {
      var aLivre = "<tr id='" + i +"' class = 'tentativa'><td><div></div></td><td><div></div></td><td><div></div></td><td><div></div></td><div></div></td><td class = 'dica'><div></div><div></div><div></div><div></div></tr>";
      $(".tabela").append(aLivre);
  }
}

var geraCodigo = function(cores) {
  var codigo = [];
  for (var i = 0; i <= 3; i++) {
    codigo[i] = cores[Math.floor((Math.random() * 8))];
  }
  return codigo;
}

var marcarCores = function(codigo) {
    codigo.forEach(function(cor, indice){
      $(".codigo td").eq(indice).children().css("background", cor);
    })
}

function compara(codigo, tentativa) {
  var dicas = [];
  for (var i in tentativa) {
    if (codigo.indexOf(tentativa[i]) == -1) continue;
    if (tentativa[i] == codigo[i]) dicas.push('black');
    else dicas.push('white');
  }
  return dicas;
}

$(document).ready(function() {
  var cores = ["red", "blue", "yellow", "purple", "green", "orange", "pink", "grey"];
  fazTabela();
  var codigo = geraCodigo(cores);
  marcarCores(codigo);
})
