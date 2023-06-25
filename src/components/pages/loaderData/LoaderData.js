const toyLoader = () =>
  fetch("https://toy-mart-server.vercel.app/toys").then((response) =>
    response.json()
  );

const galleryLoader = () =>
  fetch("https://toy-mart-server.vercel.app/gallery-images").then((response) =>
    response.json()
  );

export { toyLoader, galleryLoader };
