const container = document.querySelector("#container");

repeat(16 * 16, () => {
  const square = document.createElement("div");
  square.classList.add("square");

  container.appendChild(square);
});

function repeat(times, callback) {
  for (let index = 0; index < Number(times); index++) {
    callback(index);
  }
}
