const leaf = document.getElementById("leaf");
const leaves = document.getElementById("leaves");
const clover = document.getElementById("clover");
const flowing = document.getElementById("flowing");
const leafContent = document.getElementById("leaf_content");

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
