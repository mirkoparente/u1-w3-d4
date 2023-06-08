//tombola
// collego il tasto gioca al click per iniziare a giocare
const game = document.getElementById("btn");
const game2 = document.getElementById("btn2");
//creo la tabella
const tabella = [];

const rand = function () {
    const random = Math.floor(Math.random(tabella.length) * 76);
    console.log(random);
    const extract = document.createElement("div");
    extract.classList.add("numb");
    extract.classList.add("select");
    if (random !== 0) {
      extract.innerText = random;
      document.getElementById("numEstratto").appendChild(extract);
    }
    return random
  };

const createTable = function (random) {
  for (let i = 0; i < 76; i++) {
    //faccio apparire la tabella
    const startDiv = document.createElement("div");
    startDiv.classList.add("numb");
    startDiv.innerText = i + 1;
    console.log(startDiv);
    document.getElementById("nTombola").appendChild(startDiv);
    game.classList.add("none");
    game2.classList.remove("none");

    if(i===random){
        startDiv.classList.remove("select")
        console.log(startDiv);
    }
  }
  
};



//random
//



game.addEventListener("click", createTable);

game2.addEventListener("click", rand);
