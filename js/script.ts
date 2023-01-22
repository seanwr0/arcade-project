let enemyNode = document.getElementById('enemy-node');
let enemy = document.createElement("div");


enemyNode.addEventListener("click", () => {
    enemy.classList.add("enemy");
    enemyNode.appendChild(enemy);
});


enemy.addEventListener("animationend", () => {
    enemy.parentNode.removeChild(enemy);
});
enemy.addEventListener("click", () => {
    enemy.parentNode.removeChild(enemy);
});





