let allmenuDiv = document.querySelectorAll(".menu div")
let allcontentDiv = document.querySelectorAll(".content div")


for (const menu of allmenuDiv) {
  menu.addEventListener("click", () => {
    let active = document.querySelector(".active")
    active.classList.remove("active")
    menu.classList.add("active")
    let index = menu.getAttribute("data-index")

    allcontentDiv.forEach(content => {
      if (content.getAttribute("data-index") == index) {
        content.classList.remove("d-none")
      }
      else {
        content.classList.add("d-none")
      }
    });
  }
  )
}


