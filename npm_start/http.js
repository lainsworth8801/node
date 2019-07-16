/*
* event handling script:
* event handler, to handle emitted event,
* won't do anything if event is not emitted.
*/
const http = require('http')

// client will receive reponses by going to the url. No event needs to be raised or handled:
const server = http.createServer((req, res) => {
    console.log('req: ', req)
    if(req.url === '/jobs') {
        res.write('Commercial Building Software Engineer III.')
    } else {
        res.write('You are under consideration!')
    }

    res.end()
})

module.exports = server