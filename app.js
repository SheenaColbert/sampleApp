const { urlencoded } = require('body-parser')
const express  = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/test', (req, res) => {
   console.log(req.body)
   if (!req.body.string_to_cut) {
       res.send('invalid argument');
   }
    let thirds =  everyThird(req.body.string_to_cut)
    let obj = {
        return_string: thirds
    }
    res.send(obj)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

const everyThird = (word) => {
    let thirds = ''
    for (let i = 2; i < word.length; i+=3) {
        thirds += word[i];
    }
    return thirds;
}


