        //window.alert("hello from JavaScript")
        //document.write("written to the page")
        //console.log("logged to console")
        
        function updateSubtitle(){
            document.getElementById("my-subtitle").innerText = "Updated text lol lol";
        }

        const headings = document.getElementsByClassName("heading")
        var x = 10;
        console.log(x)

        const skills = []
        skills.push("HTML")
        skills.push("CSS")

        const firstHeading = document.querySelector(".heading");
        console.log(firstHeading);

        const firstHeadings = document.querySelectorAll(".heading");
        console.log(firstHeadings)

        for(let i = 0; i < skills.length; i++){
            console.log(skills[i])
        }

        const profile = {
            name: "Nish",
            job: "Trainer",

            getIntro(){
                return 'Hi I, ${this.name}';
            }
        }

        function addSkill() {
            const input = document.getElementById("new-skill");
            const skillText = input.value.trim();

            if (!skillText) return; // Don't add empty items

            const li = document.createElement("li");
            li.innerText = skillText;

            const removeBtn = document.createElement("button");
            removeBtn.innerText = "x";
            removeBtn.onclick = function() {
                li.remove();
            };

            li.appendChild(removeBtn);
            document.getElementById("skills-list").appendChild(li);

            input.value = "";
        }
