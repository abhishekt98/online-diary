console.log("client side javascript running")
const saveform = document.querySelector('#saveform')
const title = document.querySelector('#title')
const body = document.querySelector('#body')
const msg = document.querySelector('#msg')

saveform.addEventListener('submit', (e) => {
    e.preventDefault()
    msg.textContent = 'loading....'
    fetch('http://localhost:3000/save?name=' + encodeURIComponent(title.value) + '&body=' + encodeURIComponent(body.value)).then((response) => {
        response.json().then((data) => {
            if (data.error)
                msg.textContent = data.error
            else {
                msg.textContent = data.status
            }
        })
    })
})