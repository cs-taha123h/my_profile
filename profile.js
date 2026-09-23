function bioChange(){
    var bio = document.querySelector(".bio-text")
    bio.innerText = "what have you done to my BIO?!?!?!"

    var bioBox = document.querySelector(".bio")

    setInterval(() => {
        bio.style.color = bio.style.color === "red" ? "blue" : 
        bio.style.color === "blue" ? "yellow" : "red";
    }, 20)

    setInterval(() => {
        bioBox.style.backgroundColor = bioBox.style.backgroundColor === "red" ? "blue" : "red";
    }, 20)

}


function addGoal() {
            const input = document.getElementById("new-goal");
            const goalText = input.value.trim();

            if (!goalText) return; // Don't add empty items

            const li = document.createElement("li");
            li.innerText = goalText;

            const removeBtn = document.createElement("button");
            removeBtn.innerText = "x";
            removeBtn.className = "button";
            removeBtn.onclick = function() {
                li.remove();
            };

            li.appendChild(removeBtn);
            document.getElementById("goal-list").appendChild(li);

            input.value = "";
        }