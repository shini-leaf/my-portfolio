const leaf = document.getElementById("leaf");
const leaves = document.getElementById("leaves");
const clover = document.getElementById("clover");
const flowing = document.getElementById("flowing");
const flower = document.getElementById("flower");
const mash = document.getElementById("mash");
const sunFlower = document.getElementById("sunFlower");
const leafContent = document.getElementById("leaf_content");
const but = document.getElementById("but");
const butContent = document.getElementById("but_content");

leaf.onclick = function () {
  leafContent.textContent += "🌱";
};

leaves.onclick = function () {
  leafContent.textContent += "🌿";
};

clover.onclick = function () {
  leafContent.textContent += "🍀";
};

flowing.onclick = function () {
  leafContent.textContent += "🍃";
};

flower.onclick = function () {
  leafContent.textContent += "❎";
};

mash.onclick = function () {
  leafContent.textContent += "❎";
};

sunFlower.onclick = function () {
  leafContent.textContent += "❎";
};

but.onclick = function () {
  butContent.textContent = "中止になるかも💦";
};
