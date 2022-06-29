var numbers = [];
var queue = [];

function reshuffle() {
    alert("reshuffled");
    min = 1;
    max = 16;
    r = 16; // how many numbers you want to extract

    for (let i = 0; i < r; i++) {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if (!p) {
                numbers.push(n);
            }
        } while (p);
    }
}

function change(nu) {
    queue = [...queue];
    var img = document.getElementsByClassName("card")[nu];
    img.style.backgroundImage = "url(images/" + numbers[nu] + ".png)";
    queue.push(numbers[nu]);
    img.style.backgroundSize = "cover";
    if (queue.length > 2) {
        queue.length = 0;
    } else if ((queue[0] >=1 &&queue[0]<5) && (queue[1] >= 1&&queue[1] < 5)) {
        alert("equal K pair")
    } else if ((queue[0] >=5 &&queue[0]<9) && (queue[1] >= 5&&queue[1] < 9)) {
        alert("equal A pair")
    } else if ((queue[0] >=9 &&queue[0]<13) && (queue[1] >= 9&&queue[1] < 13)) {
        alert("equal Q pair")
    } else if ((queue[0] > 12&&queue[0]<=16) && (queue[1] > 12&&queue[1] <= 16)) {
        alert("equal J pair")
    } else {
        setTimeout(() => {
            img.style.background = "red";
        }, 1000)
        //img.style.background="green";

    }
    console.log(queue)
}