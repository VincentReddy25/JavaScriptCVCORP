

// let colorCode = "#"

// const changeColor = () => {
//     let box = document.getElementsByClassName("box")[0]

//     createColor()
//     box.style.backgroundColor = colorCode  
// }

// const createColor = () => {

//     let hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

//     colorCode = "#"
//     for (let i = 0; i < 6; i++) {
//         let randNo = Math.floor(Math.random() * 16)
//         colorCode += hexCode[randNo]
//     }
// }

// changeColor()





const validateForm = (e) => {
    event.preventDefault()

    let display = document.getElementById("display")
    let name = e.target.username.value

    display.innerHTML = name
    
}