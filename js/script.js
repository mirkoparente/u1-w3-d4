//tombola
// collego il tasto gioca al click per iniziare a giocare
const game = document.getElementById("btn");
const game2 = document.getElementById("btn2");
//creo la tabella
const tabella = [];
const rand = function () {
  const random = Math.floor(Math.random(tabella.length) * 76);
  //   console.log(random);
  const extract = document.createElement("div");
  extract.classList.add("numb");
  extract.classList.add("select");
  if (random !== 0) {
    extract.innerText = random;
    document.getElementById("numberExtract").appendChild(extract);
  }
  
  document.querySelectorAll(".tombola .numb").forEach((d) => {
    let di = d.innerText;

    console.log(di);
    if (extract.innerText === di) {
      d.classList.add("select");
    }
    
  });
};
const createTable = function () {
  for (let i = 0; i < 76; i++) {
    //faccio apparire la tabella
    const startDiv = document.createElement("div");
    startDiv.classList.add("numb");
    startDiv.innerText = i + 1;
    console.log(startDiv);
    document.getElementById("nTombola").appendChild(startDiv);
    game.classList.add("none");
    game2.classList.remove("none");
    const dispCard=document.getElementsByClassName("tombola")
    for(let i=0;i<dispCard.length;i++){
        dispCard[i].classList.remove("none")
    }
    console.log();
  }
};
const rndGame = [];
const cardGame = function () {
  for (let i = 0; i < 24; i++) {
    rndGame.push(Math.floor(Math.random(i) * 76));
    //faccio apparire la tabella giocatore
    const startDiv = document.createElement("div");
    startDiv.classList.add("numb");
    startDiv.innerText = rndGame[i] + 1;
    console.log(startDiv);
    document.getElementById("card").appendChild(startDiv);
  }
};

//random
//

game.addEventListener("click", createTable);
game.addEventListener("click", cardGame);

game2.addEventListener("click", rand);
