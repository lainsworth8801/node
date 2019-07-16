const express = require('express')
const app = express()

// app get handler:
app.get('/:name', (req, res) => {
    res.send(`Hello ${req.params.name} from NREL!`)

    res.end
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The app is listening at port ${port}`)
})