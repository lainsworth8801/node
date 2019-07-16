/*
* port hook for listening to event in case it is emitted.
*/

const server = require('./http')

server.listen(3000, () => {
    console.log('The app is listening on port 3000')
})