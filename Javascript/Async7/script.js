const getQuestionsBtn = document.querySelector("button");

getQuestionsBtn.addEventListener("click", getData);


function getData() {
   
    let getQuestions = (questions) => {
        return new Promise((resolve, reject) => {
            
            const data = new XMLHttpRequest();
            
            data.addEventListener("readystatechange", function () {
               
                if (this.status === 200 && this.readyState === 4) {
                
                    const questionsRetrieved = JSON.parse(this.responseText);
                    //console.log(questionsRetrieved);
                    resolve(questionsRetrieved);
                } else if (this.readyState === 4) {
                    reject("Error fetching Data");
                }

            });

            data.open("GET", questions, true);

            data.send();



        });
    };


    getQuestions("questions/question1_2.json")
        .then((quesData) => {
            console.log("Question 1-2",quesData);
            return getQuestions("questions/questions3_4.json");
        })
        .then((quesData) => {
            console.log("Question 3-4",quesData);
            return getQuestions("questions/question5_6.json");
        })
        .then((quesData) => {
            console.log("Question 5-6",quesData);
            return getQuestions("questions/questions7_8.json");
        })
        .then((quesData) => {
            console.log("Question 7-8",quesData);
        })
        .catch((error) => {
            console.log(`Error: ${error}`);
        });
   
}