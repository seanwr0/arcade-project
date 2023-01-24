var enemyNode = document.getElementById('enemy-node');
var enemyNodeTwo = document.getElementById('enemy-node2');
var enemyNodethree = document.getElementById('enemy-node3');
var enemyNodefour = document.getElementById('enemy-node4');
var enemyNodefive = document.getElementById('enemy-node5');
var enemyNodes = [enemyNode, enemyNodeTwo, enemyNodethree, enemyNodefour, enemyNodefive];
var enemies = [];
enemyNode.addEventListener("click", function () {
    var css = window.document.styleSheets[0];
    for (var i = 1; i <= 6; i++) {
        var enemy = document.createElement("div");
        enemies[i] = enemy;
        enemies[i].classList.add("enemy");
        enemyNodes[i].appendChild(enemies[i]);
        enemies[i].style.animation = "myAnimation " + (i * 3) + "s ease infinite";
        css.insertRule("\n@keyframes myAnimation {\n  0%   { top: 0;     }\n  100% { top: 2000%; }\n}", css.cssRules.length);
    }
});
// enemies[].addEventListener("animationend", () => {
//     enemies[i].parentNode.removeChild(enemies[i]);
// });
// enemy.addEventListener("click", () => {
//     enemy.parentNode.removeChild(enemy);
// });
