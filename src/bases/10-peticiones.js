const apiKey = "fZZKOXhppZYXQJq3bXtMAwuVPfjcw83N";

// Fetch devuelve una promesa
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

// Se recibe la promesa y se encadena.
// Promesa inicial encadenada a la promesa del json()
peticion
  .then((respuesta) => respuesta.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
