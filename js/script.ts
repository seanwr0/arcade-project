let enemyNode = document.getElementById('enemy-node');
let enemyNodeTwo = document.getElementById('enemy-node2');
let enemyNodethree = document.getElementById('enemy-node3');
let enemyNodefour = document.getElementById('enemy-node4');
let enemyNodefive = document.getElementById('enemy-node5');
let enemyNodes = [enemyNode, enemyNodeTwo, enemyNodethree,enemyNodefour, enemyNodefive];
let enemies = [];



enemyNode.addEventListener("click", () => {
    const css = window.document.styleSheets[0];
    for (let i = 0; i <= 5; i++) {
        let enemy = document.createElement("div");
        enemies[i] = enemy;
        enemies[i].classList.add("enemy");
        enemyNodes[i].appendChild(enemies[i]);
        enemies[i].style.animation = "myAnimation " + (5 + i) + "s ease infinite";
       
        css.insertRule(`
@keyframes myAnimation {
  0%   { top: 0;     }
  100% { top: 2000%; }
}`, css.cssRules.length);
    }
});







