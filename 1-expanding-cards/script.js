const cards = document.querySelectorAll(".card");
// console.log(cards);

cards.forEach(element => {
    element.addEventListener("click", () => {
        removeActive();
        element.classList.add("active")
    })
});

function removeActive() {
    cards.forEach(element => {
        element.classList.remove("active")
    });

}