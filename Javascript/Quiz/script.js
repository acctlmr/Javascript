let quizData = [
  
    {
        question: 'Which framework is related to Javascript',
        a: '.Net',
        b: 'Flask',
        c: 'React',
        d: 'Ruby',
        correct:'c'
    },

    {
        question: 'Which is not a programming language',
        a: 'HTML',
        b: 'Python',
        c: 'Java',
        d: 'Javascript',
        correct:'a'
    },

    {
        question: 'Which is not a framework',
        a: 'React',
        b: 'Javascript',
        c: 'Angular',
        d: 'Django',
        correct:'b'
    },

    {
        question: 'CSS Stands For',
        a: 'Cascading Style State',
        b: 'Cascading Style Sheet',
        c: 'Cascading Style Short',
        d: 'None of these',
        correct: 'b'
    },
    
    {
        question: 'Which one is a Javascript engine',
        a: 'JSKit',
        b: 'JSEngine',
        c: 'Chakra',
        d: 'ChromeKit',
        correct:'c'
    }

];

let answer = document.querySelectorAll('.answer');

let question = document.getElementById('question');

let option_a = document.getElementById('a_value');

let option_b = document.getElementById('b_value');

let option_c = document.getElementById('c_value');

let option_d = document.getElementById('d_value');

let submitBtn = document.getElementById('submit');

let currentQuestion = 0;

let quizScore = 0;

loadQuiz();

function loadQuiz() {

    deselect();

    question.innerHTML = quizData[currentQuestion].question;
    option_a.innerText = quizData[currentQuestion].a;
    option_b.innerText = quizData[currentQuestion].b;
    option_c.innerText = quizData[currentQuestion].c;
    option_d.innerText = quizData[currentQuestion].d;
}

function deselect() {
    
    answer.forEach(answer=>answer.checked = false);
}

submitBtn.addEventListener('click', () => {
   
    let selectedoption;

    answer.forEach(answer => {
        
        if (answer.checked) {
            
            selectedoption=answer.id;
        }
    });

    if (selectedoption === quizData[currentQuestion].correct)
    {
        quizScore = quizScore + 1;
    }

    currentQuestion = currentQuestion + 1;

    if (currentQuestion === quizData.length) {
        
        let finalScore = quizScore;
        currentQuestion = 0;
        quizScore = 0;
        document.getElementById('quizdiv').innerHTML = `
        <h1>You have answered ${finalScore} correctly out of ${quizData.length}</h1></br>
     
        <a class="ac" href="index.html">Restart Again</a>
        `;
    } else {
        loadQuiz();
    }


});