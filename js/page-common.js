// this function goes links the onclick attribute of button
//      to the page number provided
//      page number must be in format
//      regex to validate page name: "page\d+.xhtml"

function goToPage(num){
    window.location.href = "page" + num + ".html";
}