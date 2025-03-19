
const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll(".js-open-modal");
const closeModal = document.querySelector(".close-btn");

openButtons.forEach(button => {
    button.addEventListener("pointerdown", () => {
        modal.showModal();
    });
});

closeModal.addEventListener("pointerdown", () => {
    modal.close();
});