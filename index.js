const quotes = [
  {
    quote: "Haya o no esperanza, eso no signica que no exista oportunidad.",
    autor: "César Hernández",
    imageUrl: "https://laneta.com/wp-content/uploads/2023/03/cesar-hernandez-ha-triunfado-entre-esquizofrenia-natural-y-la-cordura-artificial-01-202006301110201020.jpeg"
  },
  {
    quote: "No hay nadie menos afortunado que el hombre a quien la adversidad olvida, pues no tiene oportunidad de ponerse a prueba.",
    autor: "Séneca",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/0_Portrait_de_S%C3%A9n%C3%A8que_d%27apr%C3%A8s_l%27antique_-_Lucas_Vorsterman.JPG/220px-0_Portrait_de_S%C3%A9n%C3%A8que_d%27apr%C3%A8s_l%27antique_-_Lucas_Vorsterman.JPG"
  },
  {
    quote: "Gran parte de las dificultades por las que atraviesa el mundo, se deben a que los ignorantes están completamente seguros y los inteligentes llenos de dudas.",
    autor: "Bertrand Russell"
  },
  {
    quote: "Yo no tengo enemigos.",
    autor: "Thorfinn Karlsefni"
  },
  {
    quote: "Un verdadero guerrero no necesita espada.",
    autor: "Thors Snorresson"
  },
  {
    quote: "Toma todo tu miedo y tristeza... y conviértelo en fuego.",
    autor: "Griffith"
  },
  {
    quote: "Nosotros los humanos somos frágiles y mortales. Pero, aunque seamos heridos o torturados... Nosotros deseamos seguir viviendo. Tu deberías sentir el mismo dolor que sentimos... y verás lo que quiero decir.",
    autor: "Guts"
  },
  {
    quote: "Podrías actuar bien hoy, pero eliges mañana.",
    autor: "Marco Aurelio"
  },
  {
    quote: "Sin entrenamiento, no existe el conocimiento. Sin conocimiento, no existe la confianza. Sin confianza, la victoria no existe.",
    autor: "Julio César"
  },
  {
    quote: "No tengas miedo de la perfección, nunca la alcanzarás.",
    autor: "Miyamoto Musashi"
  },
  {
    quote: "¿Dejas de amar a alguien porque te traiciona? No lo creo. Eso es lo que hace que la traición duela tanto: el dolor, la frustración, la furia... y yo seguía amándola, y la amo todavía.",
    autor: "El Superviviente de Hathsin"
  }
];

  let currentQuote = "";
  let currentAutor = "";
  let image = ""; 
  let i = 0;
  let currentI = 0;
  const randomNum = () => Math.floor(Math.random() * quotes.length);

  $(document).ready(function() {
    
    i = randomNum();
    currentQuote = quotes[i].quote;
    currentAutor = quotes[i].autor;
    image = quotes[i].imageUrl;
    currentI = i;

    $("#quote-text").html("<em>" + currentQuote + "</em>")
    $("#quote-autor").html("<em> - " + currentAutor + "</em>")
    $("#img-autor").attr('src', image)
  });

  const httpRequest = new XMLHttpRequest();

  $("#myButton").on("click", function() {

    i = randomNum();
      
    while (i === currentI) {
      i = randomNum();
    }

    currentQuote = quotes[i].quote;
    currentAutor = quotes[i].autor;
    image = quotes[i].imageUrl;
    currentI = i;

    $("#quote-text").html("<em>" + currentQuote + "</em>")
    $("#quote-autor").html("<em> - " + currentAutor + "</em>")
    $("#img-autor").attr('src', image)
  });

  