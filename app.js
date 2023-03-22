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
          const f = `<div id="openModal" class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title"> ${element.name}</h3>
                  <button onclick="del()" class="close">x</button>
                </div>
                <div class="modal-body">
                    <img src=${JSON.stringify(img)} class="img_1" alt="${
            element.name
          }">
                    <div class="info">
                        <div class="left">
                            <div class="card_info modal-title">Name:<br> <span>${
                              element.name
                            }</span></div>
                            <div class="card_info modal-title">Status: <br> <span>${
                              element.status
                            }</span></div>
                            <div class="card_info modal-title">Species: <br> <span>${
                              element.species
                            }</span></div>
                        </div>
                        <div class="right">
                            <div class="card_info modal-title">Origin:<br> <span>${
                              element.origin.name
                            }</span></div>
                            <div class="card_info modal-title">Location:<br> <span>${
                              element.location.name
                            }</span></div>
                            <div class="card_info modal-title">Gender:<br> <span>${
                              element.gender
                            }</span></div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>`;
          document.querySelector(".ccc").innerHTML = f;
        });
        document.body.appendChild(dive);
      });
    });
  });
}
const del = () => {
  document.querySelector(".modal").remove();
};

let e = 1;
test(e);

window.onscroll = function (ev) {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    e++;
    test(e);
  }
};
