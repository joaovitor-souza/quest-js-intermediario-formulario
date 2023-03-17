const allFilds = document.querySelectorAll(".inputs");
const alertMessage = document.querySelectorAll(".span-alert");
const btnSend = document.querySelector(".btn-submit");

btnSend.addEventListener("click", function () {
  allFilds.forEach((input) => {
      if (input.value !== '') {
        input.classList.remove("invalid-field");
        input.classList.add("valid-field");
        input.nextElementSibling.classList.add("span-occult");

      } else {
        input.classList.add("invalid-field");
        input.classList.remove("valid-field");
        input.nextElementSibling.classList.remove("span-occult");          
        }
    });
});