const fs = require('fs')
const chalk = require('chalk')

//function to save data to server
const save_file = (title, body, callback) => {

    const diary_details = {
        title,
        body
    }
    data = load_file()
    const duplicate = data.filter((data) => {
        return data.title === title
    })
    if (duplicate.length === 0) {
        data.push(diary_details)

        jsondata = JSON.stringify(data)

        fs.writeFileSync('alldiary.json', jsondata)
        const result = {
            title,
            status: "diary saved to server"
        }
        callback(result)
    } else {
        const result = {
            error: 'title already exist',
            title,
            status: "diary  couldn't saved to server"
        }
        callback(result)


    }
}

//function to search data from  server
const search = (title, callback) => {
    const data = load_file()
    const required_diary = data.filter((data) => {
            return data.title === title
        })
        //console.log(required_diary[0].body)
    if (required_diary.length === 0) {
        const result = {
            title: title,
            status: 'diary not found'
        }
        callback(result)
    } else {

        const result = {
            title,
            status: "diary found",
            body: required_diary[0].body
        }
        callback(result)
    }
}

//functin to load and change it into js object
const load_file = () => {
    try {
        const databuffer = fs.readFileSync('alldiary.json')
        const stringdata = databuffer.toString()
        const parseddata = JSON.parse(stringdata)
        return parseddata
    } catch { return [] }
}


module.exports = {
    save_file,
    search
}