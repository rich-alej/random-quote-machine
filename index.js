const quotes = [
  {
    quote: "Haya o no esperanza, eso no significa que no exista oportunidad.",
    autor: "César Hernández",
    imageUrl: "Imágenes de personajes/cesar-hernandez-ha-triunfado-entre-esquizofrenia-natural-y-la-cordura-artificial-01-202006301110201020.jpeg"
  },
  {
    quote: "No hay nadie menos afortunado que el hombre a quien la adversidad olvida, pues no tiene oportunidad de ponerse a prueba.",
    autor: "Séneca",
    imageUrl: "Imágenes de personajes/220px-0_Portrait_de_Sénèque_d'après_l'antique_-_Lucas_Vorsterman.jpeg"
  },
  {
    quote: "Gran parte de las dificultades por las que atraviesa el mundo, se deben a que los ignorantes están completamente seguros y los inteligentes llenos de dudas.",
    autor: "Bertrand Russell",
    imageUrl: "Imágenes de personajes/Bertrand_Russell_cropped.jpg"
  },
  {
    quote: "Yo no tengo enemigos.",
    autor: "Thorfinn Karlsefni",
    imageUrl: "Imágenes de personajes/8d1df0edb265ea2f233d6bc7d2071317.jpg"
  },
  {
    quote: "Un verdadero guerrero no necesita espada.",
    autor: "Thors Snorresson",
    imageUrl: "Imágenes de personajes/4d617476e2a149311b43b819e3c8ae26.jpg"
   },
  {
    quote: "Toma todo tu miedo y tristeza... y conviértelo en fuego.",
    autor: "Griffith",
    imageUrl: "Imágenes de personajes/612bdd1217c94b8ad15cd0db99398bb0.jpg"
   },
  {
    quote: "Nosotros los humanos somos frágiles y mortales. Pero, aunque seamos heridos o torturados... Nosotros deseamos seguir viviendo. Tu deberías sentir el mismo dolor que sentimos... y verás lo que quiero decir.",
    autor: "Guts",
    imageUrl: "Imágenes de personajes/E6LilUnX0Assyw_.jpg"
   },
  {
    quote: "Podrías actuar bien hoy, pero eliges mañana.",
    autor: "Marco Aurelio",
    imageUrl: "Imágenes de personajes/marco_aurelio.jpg"
  },
  {
    quote: "Sin entrenamiento, no existe el conocimiento. Sin conocimiento, no existe la confianza. Sin confianza, la victoria no existe.",
    autor: "Julio César",
    imageUrl: "Imágenes de personajes/Bust_of_Gaius_Iulius_Caesar_in_Naples.jpg"
   },
  {
    quote: "No tengas miedo de la perfección, nunca la alcanzarás.",
    autor: "Miyamoto Musashi",
    imageUrl: "Imágenes de personajes/Miyamoto_Musashi-Portrait-Edo-period.png"
  },
  {
    quote: "¿Dejas de amar a alguien porque te traiciona? No lo creo. Eso es lo que hace que la traición duela tanto: el dolor, la frustración, la furia... y yo seguía amándola, y la amo todavía.",
    autor: "El Superviviente de Hathsin",
    imageUrl: "Imágenes de personajes/Kelsier.Mistborn-The-Final-Empire.jpg"
  }
];

const colors = [
  {
    body: "bg-primary",
    btn: "btn-primary",
    text: "text-primary"
  },
  {
    body: "bg-secondary",
    btn: "btn-secondary",
    text: "text-secondary"
  },
  {
    body: "bg-success",
    btn: "btn-success",
    text: "text-success"
  },
  {
    body: "bg-danger",
    btn: "btn-danger",
    text: "text-danger"
  },
  {
    body: "bg-warning",
    btn: "btn-warning",
    text: "text-warning"
  },
  {
    body: "bg-info",
    btn: "btn-info",
    text: "text-info"
  },
  {
    body: "bg-dark",
    btn: "btn-dark",
    text: "text-dark"
  },
];

let currentQuote = "";
let currentAutor = "";
let image = ""; 
let i = 0;
let color = 0;
let currentColor = 0;
let currentI = 0;
const randomNum = (array) => Math.floor(Math.random() * array.length);

$(document).ready(function() {
  
  i = randomNum(quotes);
  color = randomNum(colors);
  currentQuote = quotes[i].quote;
  currentAutor = quotes[i].autor;
  image = quotes[i].imageUrl;
  currentI = i;
  currentColor = color;

  $("#quote-text").html('<i class="fa fa-quote-left"></i>   ' + currentQuote)
  $("#quote-autor").html("- " + currentAutor)
  $("#img-autor").attr('src', image)
  $("body").addClass(colors[color].body);
  $(".btn").addClass(colors[color].btn);
  $(".quote").addClass(colors[color].text);
});

$("#myButton").on("click", function() {

  i = randomNum(quotes);
    
  while (i === currentI) {
    i = randomNum(quotes);
  }

  color = randomNum(colors);

  while (color === currentColor) {
    color = randomNum(colors);
  }

  currentQuote = quotes[i].quote;
  currentAutor = quotes[i].autor;
  image = quotes[i].imageUrl;
  currentI = i;

  $("#quote-text").html('<i class="fa fa-quote-left"></i>   ' + currentQuote)
  $("#quote-autor").html("- " + currentAutor)
  $("#img-autor").attr('src', image)
  $("body").removeClass(colors[currentColor].body);
  $(".btn").removeClass(colors[currentColor].btn);
  $(".quote").removeClass(colors[currentColor].text);
  $("body").addClass(colors[color].body);
  $(".btn").addClass(colors[color].btn);
  $(".quote").addClass(colors[color].text);
  currentColor = color;
});

const btnTwitter = document.getElementById("btn-twitter");

btnTwitter.addEventListener("click", () => {
  const paragraphText = '"' + document.getElementById("quote-text").textContent.trim() + '" \n' + document.getElementById("quote-autor").textContent.trim();
  window.open("https://twitter.com/intent/tweet?text=" + paragraphText);
});

