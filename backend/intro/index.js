import express from "express"
// require('dotenv').config();

const app = express();
const port = "4000"

app.get('/', (request, response) => {
    response.send('sample response');
})

app.get('/this', (req, res) => {
    res.send('<h1>hello</h1>')
})

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
});

//nodemon -> node monitoring, refreshes automatically when we make changes
//by default chooses file named index.js, else u need to specify -> nodemon <filename.js>