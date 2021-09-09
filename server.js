const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response)=>{
    response.sendFile(__dirname +"/index.html");
});

app.post('/', function(request, response) {
    console.log(request.body);
    let kaal = Number(request.body.kaal);
    let pikkus = Number(request.body.pikkus)/100;
    let result = kaal/(pikkus*pikkus);
    if (result<19)
    {
        response.send("Oled alakaalus. Sinu kehamassiindeks on " + result);
    }
    if (result >= 19 && result <= 24,9)
    {
        response.send("Oled normaalkaalus. Sinu kehamassiindeks on " + result);
    }
    if (result >= 25 && result <= 29,9)
    {
        response.send("Oled ülekaalus. Sinu kehamassiindeks on " + result);
    }
    if(result > 30)
    {
        response.send("Oled rasvunud. Sinu kehamassiindeks on " + result);
    }
});

app.listen(3000, function(){
    console.log("Server is running on 3000");
});