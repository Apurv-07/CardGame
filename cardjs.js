var cards=document.getElementsByClassName("card");
var lastbtn=undefined;
var lastbtnnum=undefined;
var wait=false;
var numbers=[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]
shuffle(numbers);
distribute();

for (var i=0; i<card.length; i++){
    cards[i].addEventListener('click', (e)=>{
        var turnable=e.target.dataset.turnable;

        if (wait==false && lastbtn==undefined && lastbtnnum==undefined && turnable=true){
            e.target.textContent=e.target.dataset.number;
            e.target.style.background="orange";

        }
    })
}

function distribute(){
    for (var i=0;i<numbers.length;i++){
        card[i].dataset.number=numbers[i];
    }
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}
  