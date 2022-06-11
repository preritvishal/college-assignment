// this function goes links the onclick attribute of butto
//      to the page number provided
//      page number must be in format
//      regex to validate page name: "page\d+.xhtml"
var correctAnswer = parseInt(sessionStorage.getItem("correctAnswer")) || 0;
var incorrectAnswer = parseInt(sessionStorage.getItem("incorrectAnswer")) || 0;
var unanswered = parseInt(sessionStorage.getItem("unanswered")) || 0;

// method to save the score to the session storage
function saveScore() {
    sessionStorage.setItem("correctAnswer",  correctAnswer);
    sessionStorage.setItem("incorrectAnswer", incorrectAnswer);
    sessionStorage.setItem("unanswered", unanswered);
}

function goToPage(num) {
    window.location.href = "page" + num + ".html";
}

// function to get read this page name
function getPageName() {
    var pageName = window.location.pathname;
    return pageName;
}

// function to get the number from string
//      string must be in format
//      regex to validate page name: "page\d+.xhtml"
function getPageNumber(pageName) {
    var pageNumber = pageName.match(/\d+/);
    return parseInt(pageNumber);
}

// functnion to run when input is correct
function correct() {
    // increment correct answer
    correctAnswer += 1;
    saveScore();
    nextPage(parseInt(getPageNumber(getPageName()) + 1));
}

// function to check if input is correct
function incorrect() {
    // alert("Wrong Answer !!")
    incorrectAnswer += 1;
    saveScore();
    nextPage(parseInt(getPageNumber(getPageName()) + 1));
}

// function to skip page
function skipPage() {
    unanswered += 1;
    saveScore();
    nextPage(parseInt(getPageNumber(getPageName()) + 1));
}

function nextPage(num) {
    if (num > 10) {
        getScore();
        location.href = "./score.html";
    }
    else {
        goToPage(num);
    }
}

// function to rickroll anyone
function rickroll() {
    let body = document.getElementById("body");
    body.innerHTML = "<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// function to go back to first page
function goBack() {
    window.location.href = "../index.html";
}

// inject the score to the score page
function getScore() {
    let para = document.getElementById('question-element-display');
    getLocalScore();
    para.innerHTML = "Correct Answer: " + correctAnswer + "&ThickSpace; Incorrect Answer: " + incorrectAnswer + "&ThickSpace; Unanswered: " + unanswered;
}

function textMe() {
    window.location.href="https://wa.me/+918407836969?text=Hi%20There";
}

function firstPage() {
    window.location.href = "./src/page1.html";
}