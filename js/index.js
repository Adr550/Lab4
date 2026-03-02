let score = 0;

let tareaone = document.getElementById('tarea1');
tareaone.addEventListener('change', function() {
    if (tareaone.checked === true) {
        score = score + 10;
        console.log("Score: " + score);
    }
});
let tareatwo = document.getElementById('tarea2');
tareatwo.addEventListener('change', function() {
    if (tareatwo.checked === true) {
        score = score + 10;
        console.log("Score: " + score);
    }
});


let tareathree = document.getElementById('tarea3');
tareathree.addEventListener('change', function() {
    if (tareathree.checked === true) {
        score = score + 10;
        console.log("Score: " + score);
    }
});

