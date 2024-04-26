let x;

function Home(){
  document.getElementById('home').src="imgs/navbar/home1.png";
  document.getElementById('lettere').src="imgs/navbar/lettere0.png";
  document.getElementById('main-home').style.display="flex";
  document.getElementById('main-lettere').style.display="none";
  document.getElementById('random-letter').style.display="none";
  document.getElementById('letter-img').style.display="block";
}

function Lettere(){
  document.getElementById('home').src="imgs/navbar/home0.png";
  document.getElementById('lettere').src="imgs/navbar/lettere1.png";
  document.getElementById('main-home').style.display="none";
  document.getElementById('main-lettere').style.display="flex";
}



function RandomLetter(){
  document.getElementById('letter-img').style.display="none";
  document.getElementById('random-letter').style.display="block";
  x = Math.floor(Math.random() * 26) + 1;
  if(x == 1){
    document.getElementById('random-letter').innerHTML = "A";
  } else if(x == 2){
    document.getElementById('random-letter').innerHTML = "B";
  } else if(x == 3){
    document.getElementById('random-letter').innerHTML = "C";
  } else if(x == 4){
    document.getElementById('random-letter').innerHTML = "D";
  } else if(x == 5){
    document.getElementById('random-letter').innerHTML = "E";
  } else if(x == 6){
    document.getElementById('random-letter').innerHTML = "F";
  } else if(x == 7){
    document.getElementById('random-letter').innerHTML = "G";
  } else if(x == 8){
    document.getElementById('random-letter').innerHTML = "H";
  } else if(x == 9){
    document.getElementById('random-letter').innerHTML = "I";
  } else if(x == 10){
    document.getElementById('random-letter').innerHTML = "J";
  } else if(x == 11){
    document.getElementById('random-letter').innerHTML = "K";
  } else if(x == 12){
    document.getElementById('random-letter').innerHTML = "L";
  } else if(x == 13){
    document.getElementById('random-letter').innerHTML = "M";
  } else if(x == 14){
    document.getElementById('random-letter').innerHTML = "N";
  } else if(x == 15){
    document.getElementById('random-letter').innerHTML = "O";
  } else if(x == 16){
    document.getElementById('random-letter').innerHTML = "P";
  } else if(x == 17){
    document.getElementById('random-letter').innerHTML = "Q";
  } else if(x == 18){
    document.getElementById('random-letter').innerHTML = "R";
  } else if(x == 19){
    document.getElementById('random-letter').innerHTML = "S";
  } else if(x == 20){
    document.getElementById('random-letter').innerHTML = "T";
  } else if(x == 21){
    document.getElementById('random-letter').innerHTML = "U";
  } else if(x == 22){
    document.getElementById('random-letter').innerHTML = "V";
  } else if(x == 23){
    document.getElementById('random-letter').innerHTML = "W";
  } else if(x == 24){
    document.getElementById('random-letter').innerHTML = "X";
  } else if(x == 25){
    document.getElementById('random-letter').innerHTML = "Y";
  } else if(x == 26){
    document.getElementById('random-letter').innerHTML = "Z";
  }
}