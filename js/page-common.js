// this function goes links the onclick attribute of butto
//      to the page number provided
//      page number must be in format
//      regex to validate page name: "page\d+.xhtml"
function goToPage(num){
    window.location.href = "page" + num + ".xhtml";
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
    alert("Correct Answer !!");
    goToPage(parseInt(getPageNumber(getPageName()) + 1));
}

// function to check if input is correct
function incorrect() {
    alert("Wrong Answer !!")
    goToPage(parseInt(getPageNumber(getPageName()) + 1));
}

// function to skip page
function skipPage() {
    goToPage(parseInt(getPageNumber(getPageName()) + 1));
}