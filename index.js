const express = require("express");
const joke = require("give-me-a-joke");
const colors = require("colors");
const { response } = require("express");
const app = express();
//console.dir(app);

/*app.use((request, response) => {
    console.log("New request approached.");
    //console.dir(request);
    const jokeString = joke.getRandomJokeOfTheDay();
    response.send(jokeString.rainbow);
})*/

app.get('*', (request, response) => 
{
    response.send("<h1>Hello World<h1>")
})

app.get('/r/:subreddit', (request, response) => {
    const { subreddit } = request.params;
    response.send('<h1>Browsing the ' + {subreddit}.subreddit);
})

app.get('/search', (request, response) => 
{
    response.send("Searching forrrr :" + request.query.photo)
})

app.get('/cats', (request, response) => 
{
    response.send("MEOW!")
})
app.get('/dogs', (request, response) => 
{
    response.send("WOOF!")
})
app.get('/', (request, response) => 
{
    response.send("Hoempage!")
})

app.listen(8080, () => {
    console.log("Listening on 8080 port.");
})