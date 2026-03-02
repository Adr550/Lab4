let score = 0;
let user = "Aprendiz";



console.log("nombre: limpiar platos");
console.log("descripción: limpiar platos");
console.log("dificultad: fácil");
console.log("xp: 10");
console.log("estado: pendiente");

console.log("nombre: ir al gimnasio");
console.log("descripción: ir al gimnasio");
console.log("dificultad: difícil");
console.log("xp: 50");
console.log("Estado: pendiente");

console.log("mision creada");
console.log("nombre: leer 30 minutos");
console.log("descripción: leer 30 minutos");
console.log("dificultad: normal");
console.log("xp: 25");
console.log("estado: pendiente");

console.log("mision creada");
console.log("nombre: estudiar para el examen");
console.log("descripción: estudiar matematicas");
console.log("dificultad: difícil");
console.log("xp: 50");
console.log("estado: pendiente");

document.getElementById('xp').textContent = score;
document.getElementById('nivelUsuario').textContent = user;


let tareaone = document.getElementById('tarea1');
tareaone.addEventListener('change', function() {
    if (tareaone.checked === true) {
        score = score + 10;
        console.log("Puntos: " + score);
        console.log("Estado: successful");
        Nivel();
        document.getElementById('xp').textContent = score;
        tareaone.disabled = true;
    }
});

let tareatwo = document.getElementById('tarea2');
tareatwo.addEventListener('change', function() {
    if (tareatwo.checked === true) {
        score = score + 50;
        console.log("Puntos: " + score);
        console.log("Estado: successful");
        Nivel();
        document.getElementById('xp').textContent = score;
        tareatwo.disabled = true;
    }
});

let tareathree = document.getElementById('tarea3');
tareathree.addEventListener('change', function() {
    if (tareathree.checked === true) {
        score = score + 25;
        console.log("Puntos: " + score);
        console.log("Estado: successful");
        Nivel();
        document.getElementById('xp').textContent = score;
        tareathree.disabled = true;
    }
});

let tareafour = document.getElementById('tarea4');
tareafour.addEventListener('change', function() {
    if (tareafour.checked === true) {
        score = score + 50;
        console.log("Puntos: " + score);
        console.log("Estado: successful");
        Nivel();
        document.getElementById('xp').textContent = score;
        tareafour.disabled = true;
    }
});

function Nivel() {
    if (score >= 100) {
        user = "mago maestro";
        console.log("eres un mago maestro");
    } else if (score >= 50) {
        user = "Mago";
        console.log("Eres un mago");
    } else if (score >= 25) {
        user = "aprendiz";
        console.log(" ahora eres un aprendiz");
    } else {
        user = "principiante";
        console.log(" ahora eres principiante");
    }

    console.log("Nivel actual: " + user);
    document.getElementById('nivelUsuario').textContent = user;
}