let dropdownList = document.querySelectorAll(".dropdown-link")
let nav = document.querySelector("nav")
let exitIcon = document.querySelector("#exit-icon")
let hamburger = document.querySelector("#hamburger-menu")


// Toggle Nav
hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})
exitIcon.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})


dropdownList.forEach((element)=>{
    element.addEventListener("click", (event)=>{
        event.stopPropagation()
        element.classList.toggle("active")
    })
})