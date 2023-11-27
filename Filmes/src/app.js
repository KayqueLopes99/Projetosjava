/*adição de imagem dos filmes */
/*prompt = pegar alert = jogar*/
/*lista para guardar vários elementos*/

/* começa com 0 */

listaFilmes = [
    "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2023/06/My-Hero-Academia-7-teaser-visual-1.jpg?resize=696%2C984&ssl=1", 'https://i.ebayimg.com/images/g/dKUAAOSwSktk3Fg4/s-l1200.webp', 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/06/spy_x_family_filme_poster__427eo3-760x1075.jpg', 'https://m.media-amazon.com/images/I/712qgGfT3PS.jpg', 'https://i.pinimg.com/originals/ee/e7/4d/eee74d7eaa1cb288c295fe79fda2a4db.jpg', 'https://m.media-amazon.com/images/I/71ie87aqvLL._AC_UF894,1000_QL80_.jpg', 'https://m.media-amazon.com/images/I/51sdy2UtO7L.jpg', 'https://m.media-amazon.com/images/M/MV5BYTgxZjNlZWQtYjg1OS00NzY2LTkyZTctZDBkY2Y2ZWEyMjNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg', 'https://m.media-amazon.com/images/I/71Kelxa3EVL.jpg', 'https://preview.redd.it/pok%C3%A9mon-horizons-the-bright-of-terapagos-official-poster-v0-ru4140pffcvb1.jpg?auto=webp&s=bcb74fc753b9b3a91be730d66e4df9390dca726f', 'https://m.media-amazon.com/images/I/91-SPqia6ML._AC_UF894,1000_QL80_.jpg', 'https://i0.wp.com/anmtv.com.br/wp-content/uploads/2022/05/urusei-yatsura-poster-1.jpg?resize=353%2C500&ssl=1',  'https://m.media-amazon.com/images/I/71CirqcvjKL.jpg','https://pbs.twimg.com/media/FsDlrqbXsAAGZct.jpg:large', 'https://img.elo7.com.br/product/original/26BC338/big-poster-anime-the-promised-neverland-lo12-90x60-cm-anime.jpg'
  ];
  /*quer colocar filmes coloca-se uma nova lista para o novo filme adicionado ANTES:listaFilmes[0] = "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2023/06/My-Hero-Academia-7-teaser-visual-1.jpg?resize=696%2C984&ssl=1";
    listaFilmes[1] = 'https://i.ebayimg.com/images/g/dKUAAOSwSktk3Fg4/s-l1200.webp';
    listaFilmes[2] = 'https://uploads.jovemnerd.com.br/wp-content/uploads/2023/06/spy_x_family_filme_poster__427eo3-760x1075.jpg';
    listaFilmes[3] = 'https://m.media-amazon.com/images/I/712qgGfT3PS.jpg';
    listaFilmes[4] = 'https://i.pinimg.com/originals/ee/e7/4d/eee74d7eaa1cb288c295fe79fda2a4db.jpg';
    listaFilmes[5] = 'https://m.media-amazon.com/images/I/71ie87aqvLL._AC_UF894,1000_QL80_.jpg';
    listaFilmes[6] = 'https://m.media-amazon.com/images/I/51sdy2UtO7L.jpg';
    listaFilmes[7] = 'https://m.media-amazon.com/images/M/MV5BYTgxZjNlZWQtYjg1OS00NzY2LTkyZTctZDBkY2Y2ZWEyMjNlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg';
    listaFilmes[8] = 'https://m.media-amazon.com/images/I/71Kelxa3EVL.jpg';
    listaFilmes[9] = 'https://preview.redd.it/pok%C3%A9mon-horizons-the-bright-of-terapagos-official-poster-v0-ru4140pffcvb1.jpg?auto=webp&s=bcb74fc753b9b3a91be730d66e4df9390dca726f';
    listaFilmes[10] = 'https://m.media-amazon.com/images/I/91-SPqia6ML._AC_UF894,1000_QL80_.jpg';
    listaFilmes[11] = 'https://i0.wp.com/anmtv.com.br/wp-content/uploads/2022/05/urusei-yatsura-poster-1.jpg?resize=353%2C500&ssl=1';
    listaFilmes[12] =  'https://m.media-amazon.com/images/I/71CirqcvjKL.jpg'; */
  /*Interagir com a página*/
  /* for até a condição ser satisfeita */
  /* ANTES document.write('<img src=' + listaFilmes[0] + '>');
  document.write('<img src=' + listaFilmes[1]  + '>');
  document.write('<img src=' + listaFilmes[2] + '>');
  document.write('<img src=' + listaFilmes[3] + '>');
  document.write('<img src=' + listaFilmes[4] + '>');
  document.write('<img src=' + listaFilmes[5] + '>');
  document.write('<img src=' + listaFilmes[6] + '>');
  document.write('<img src=' + listaFilmes[7] + '>');
  document.write('<img src=' + listaFilmes[8] + '>');
  document.write('<img src=' + listaFilmes[9] + '>');
  document.write('<img src=' + listaFilmes[10] + '>');
  document.write('<img src=' + listaFilmes[11] + '>');
  tag img */
  for (var i = 0; i < listaFilmes.length; i= i + 1){
   document.write('<img src=' + listaFilmes[i] + '>'); 
  }
  /*tag img listaFilmes.lengt = tamanho para não ficar mudando sempre.*/
  
  