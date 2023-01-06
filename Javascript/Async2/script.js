const getDataBtn = document.querySelector("button");

const questionsContainer=document.querySelector(".questions-container");

getDataBtn.addEventListener("click", getQuestions);

function getQuestions() {

    const data = new XMLHttpRequest();

    data.open("GET", "questions.json", true);

    data.onload = function () {
        
        if (this.status === 200 && this.readyState === 4)
        {
            let questions = JSON.parse(this.responseText);
            
            let questionsResult = "";
            
            console.log(questions);

            questions.forEach((question) => {
                
                questionsResult += `                
                <ul>
                <li class="p1">${question.question}</li>
                <li>${question.a}</li>
                <li>${question.b}</li>
                <li>${question.c}</li>
                <li>${question.d}</li>
                </ul>`;
            });

            questionsContainer.innerHTML = questionsResult;

            
        }
    }



    data.send();
}