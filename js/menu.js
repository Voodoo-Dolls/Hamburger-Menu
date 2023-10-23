let dropdownList = document.querySelectorAll(".dropdown-link");

dropdownList.forEach((element)=>{
    element.addEventListener("click", (event)=>{
        event.stopPropagation()
        element.classList.toggle("active")
    })
})