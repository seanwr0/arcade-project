var enemyNode = document.getElementById('enemy-node');
var enemy = document.createElement("div");
enemyNode.addEventListener("click", function () {
    enemy.classList.add("enemy");
    enemyNode.appendChild(enemy);
});
enemy.addEventListener("animationend", function () {
    enemy.parentNode.removeChild(enemy);
});
enemy.addEventListener("click", function () {
    enemy.parentNode.removeChild(enemy);
});
