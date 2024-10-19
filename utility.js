function AddElementById(hiddenClassaddkorbo){
    const element = document.getElementById(hiddenClassaddkorbo);
    element.classList.add('hidden');
}
function removeElementById(removeClassaddkorbo){
    const element = document.getElementById(removeClassaddkorbo);
    element.classList.remove('hidden');
}
// function AddElementById(homeScreenaddkorbo){
//     const element = document.getElementById(homeScreenaddkorbo);
//     element.classList.add('hidden');
// }
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValuetext = element.innerText;
    const value = parseInt(elementValuetext);
    return value;
}
function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText= value;
}