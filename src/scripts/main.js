document.querySelector("#messages")

let section1 = document.createElement("section")
section1.textContent = " Hello Bob"
section1.classList.add("messages")

let section2 = document.createElement("section")
section2.textContent = " Hello Jon"
section2.classList.add("messages")

let section3 = document.createElement("section")
section3.textContent = " Hello Rose"
section3.classList.add("messages")

let section4 = document.createElement("section")
section4.textContent = " Hello Clif"
section4.classList.add("messages")

let section5 = document.createElement("section")
section5.textContent = " Hello Josh"
section5.classList.name("messages")


let append = document.querySelector("#messages")

append.appendChild(section1)
append.appendChild(section2)
append.appendChild(section3)
append.appendChild(section4)
append.appendChild(section5)