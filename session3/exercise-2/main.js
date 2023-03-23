document.getElementById('myButton').addEventListener("click", changeParagraph)

function changeParagraph() {
    //changes the text within the p element on click
    document.getElementById('myParagraph').innerText = "New text!"
}

/* another way of coding this is:

const myButton = document.getElementById('myButton)

myButton.addEventListener("click", function() {
    const paragraph = document.getElementById('myParagraph')
    paragraph.innerHTML = "New text!"
})

*/
