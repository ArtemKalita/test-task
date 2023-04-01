const card = document.querySelector(".modal");
let lenth = 0;
fetch("https://rickandmortyapi.com/api/character?page=", {
  method: "get",
}).then((response) => {
  response.json().then((data) => {
    lenth = data.info.pages;
  });
});

function test(id) {
  const ajaxHandlerScript =
    "https://rickandmortyapi.com/api/character?page=" + id;

  fetch(ajaxHandlerScript, { method: "get" }).then((response) => {
    response.json().then((data) => {
      data.results.forEach((element) => {
        const img = element.image;
        const dive = document.createElement("div");
        const a = document.createElement("a");
        const image = document.createElement("img");
        const name = document.createElement("div");
        dive.appendChild(a);
        image.src = img;
        name.textContent = element.name;
        name.classList = "name";
        dive.classList = "card";
        a.appendChild(image);
        a.appendChild(name);

        dive.addEventListener("click", (ev) => {
          card.style.display = "block";
          document.querySelector(".modal-title").textContent = element.name;
          document.querySelector(".img_1").src = element.image;
          document.querySelector(".span_1").textContent = element.name;
          document.querySelector(".span_2").textContent = element.status;
          document.querySelector(".span_3").textContent = element.species;
          document.querySelector(".span_4").textContent = element.origin.name;
          document.querySelector(".span_5").textContent = element.location.name;
          document.querySelector(".span_6").textContent = element.gender;
        });
        document.body.appendChild(dive);
      });
    });
  });
}
const del = () => {
  card.style.display = "none";
};
let e = 1;
test(e);
window.onscroll = function (ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    if (e < lenth) {
      e++;
      test(e);
    }
  }
};
