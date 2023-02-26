const campos = document.querySelectorAll(".inputs");
const spans  = document.querySelectorAll(".span-occult");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {

campos.forEach(input =>{
    if (input.value === "") {
        input.classList.add("invalid")
        input.classList.remove("valid")
    } else {
        input.classList.add("valid")
    }

  })

//   spans.forEach(span =>{
//   if (campos === false){
//     span.classList.add("span-alert")
//   }
  
// })
});

