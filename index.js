document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  
  const moveList = document.querySelector("#moves-container")
  const moveButton = document.querySelector("#move-button")



  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      const moveLi = document.createElement("li")
      moveLi.textContent = "left"
      moveList.append(moveLi)
    }
    else if (event.key === "ArrowRight") {
      const moveLi = document.createElement("li")
      moveLi.textContent = "right"
      moveList.append(moveLi)
    }
    else if (event.key === "ArrowDown") {
      const moveLi = document.createElement("li")
      moveLi.textContent = "down"
      moveList.append(moveLi)
    }
    else if (event.key === "ArrowUp") {
      const moveLi = document.createElement("li")
      moveLi.textContent = "up"
      moveList.append(moveLi)
    }
  })
  
  moveButton.addEventListener("click", function(event) {
    const nextMove = moveList.querySelectorAll("li")
    nextMove.forEach((differentMove, index) => { 
      setTimeout(() => { 
        move(differentMove.textContent)
        differentMove.remove()
        }, 500*(index +1))
    })
  })

  moveList.addEventListener("click", function(event){
    if (event.target.matches("li")){
      event.target.remove()
    }
  })
});