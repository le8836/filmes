// fantasia, aventura, drama

// Coraline e o Mundo Secreto, LIVRE, fantasia, aventura
// bela e a fera, LIVRE, fantasia, aventura
// branca de neve, 10, drama, fantasia, aventura
// frozen, 10, drama
// moana- Um Mar de Aventuras, 12, fantasia, aventura
// bela adormecida, 12, drama
// malévola, 14, drama

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("pink");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(50, 100, 120));
  textAlign(CENTER, CENTER);
  textSize(28);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (gostaDeFantasia && !gostaDeAventura ){
    
  if (idade < 13) {
        return "Recomendamos assistir 'frozen'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'Coraline e o Mundo Secreto'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'a bela e a fera'.";
    } else {
        return "Recomendamos assistir ''.";
    } }
    
     else if (gostaDeAventura && !gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Moana - Um Mar de Aventuras'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'branca de neve'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'malévola'.";
    } else {
        return "Recomendamos assistir 'bela adormecida'.";
    } }
  
  else if (gostaDeAventura && gostaDeFantasia) {
       
       if (idade < 13) {
        return "Recomendamos assistir 'Coraline e o Mundo Secreto'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'malévola'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'a bela e a fera'.";
    } else {
        return "Recomendamos assistir 'frozen'.";
    } }
  
  else  {
       
       if (idade < 13) {
        return "Recomendamos assistir 'moana- Um Mar de Aventuras'.";
    } else if (idade >= 13 && idade < 18) {
        return "Recomendamos assistir 'branca de neve'.";
    } else if (idade >= 18 && idade < 25) {
        return "Recomendamos assistir 'bela adormecida'.";
    } else {
        return "Recomendamos assistir 'malévola'.";
    } }
   
    }