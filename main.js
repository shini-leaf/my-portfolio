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
  leafContent.textContent += "π±";
};

leaves.onclick = function () {
  leafContent.textContent += "πΏ";
};

clover.onclick = function () {
  leafContent.textContent += "π";
};

flowing.onclick = function () {
  leafContent.textContent += "π";
};

flower.onclick = function () {
  leafContent.textContent += "β";
};

mash.onclick = function () {
  leafContent.textContent += "β";
};

sunFlower.onclick = function () {
  leafContent.textContent += "β";
};

but.onclick = function () {
  butContent.textContent = "δΈ­ζ­’γ«γͺγγγπ¦";
};
