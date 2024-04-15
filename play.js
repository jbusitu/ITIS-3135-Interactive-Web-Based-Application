//constant for quizData
const quizData = [
    {
        question: "Which HTML element typically contains the main content of a web page?",
        a: "div",
        b: "section",
        c: "span",
        d: "main",
        correct: "d",
    },
    {
        question: "Which attribute uniquely indentifies an HTML element?",
        a: "class",
        b: "id",
        c: "name",
        d: "for",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "You can use a link element in an HTML document to provide",
        a: "A and d only",
        b: "an external style sheet",
        c: "embedded style sheet",
        d: "none of the above",
        correct: "b",
    },

];

//calling the constant variable
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

//function to loadQuiz()
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

//function to deselectAnswers()
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

//function to getSelected()
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

//Event headling for submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>  `
        }
    }
})