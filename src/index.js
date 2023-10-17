// your code here
const commentListElement = document.getElementById('comment-list')
commentListElement.innerHTML = ""
const airlineListElement = document.getElementById('airline-list')
airlineListElement.innerHTML = ""

fetch('http://localhost:3000/airlines')
.then(response => response.json())
.then(airlines => {
    displayAirlineDetails(airlines[0])

    airlines.forEach(airline => {
        addAirlineNameToAirlineList(airline)
    })
})

function displayAirlineDetails(airline){
    const airlineNameElement = document.getElementById('airline-name')
    airlineNameElement.textContent = airline.name
    const airlineImageElement = document.getElementById('airline-image')
    airlineImageElement.src = airline.image_url
    const airlineDescriptionElement = document.getElementById('airline-description')
    airlineDescriptionElement.textContent = airline.description

    airline.comments.forEach(comment => {
        addComment(comment)
    })
}

function addComment(comment){
    const liElement = document.createElement('li')
    liElement.textContent = comment
    commentListElement.appendChild(liElement)
}

function addAirlineNameToAirlineList(airline){
    const liElement = document.createElement('li')
    liElement.textContent = airline.name
    airlineListElement.appendChild(liElement)
}

const commentForm = document.getElementById('comment-form')
commentForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const commentTextAreaElement = document.getElementById('comment')
    addComment(commentTextAreaElement.value)
})