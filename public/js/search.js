console.log('search script')
const searchform = document.querySelector('#searchform')
const title = document.querySelector('#searchtitle')
const body = document.querySelector('#body')
searchform.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/search?name=' + encodeURIComponent(title.value)).then((response) => {
        response.json().then((data) => {
            console.log(data)
            if (data.error)
                body.textContent = data.error
            else {
                body.textContent = data.body
            }
        })
    })
})