const getQuestionsBtn = document.querySelector("button");

getQuestionsBtn.addEventListener("click", getQuestions);


function getQuestions()
{

    let getQuestionsData = (questions, callback) => {
      
        const data = new XMLHttpRequest();
        
        data.addEventListener('readystatechange', function () {
            
            if (this.status === 200 && this.readyState === 4) {                
                const questionsRetrieved = JSON.parse(this.responseText);
                callback(undefined, questionsRetrieved);
            } else if (this.readyState === 4) {
                callback("Error Fetching Data", undefined);
            }
        });

        data.open("GET", questions, true);
        data.send();

    };


    getQuestionsData("questions/question1_2.json", (error, questionsData) => {
        console.log(questionsData);

        getQuestionsData("questions/questions3_4.json", (error, questionsData) => {
            console.log(questionsData);

            getQuestionsData("questions/question5_6.json", (error, questionsData) => {
                console.log(questionsData);

                getQuestionsData("questions/questions7_8.json", (error, questionsData) => {
                    console.log(questionsData);
                });
            });
        });
    });


}