let express = require('express');
let path = require('path');

let app = express();

app.set("views", path.resolve(__dirname,'views'));
app.use(express.static("public"));

app.set("view engine","ejs");

let {details} = require('./data/details.json');

app.get("/", function(request, response){
    response.render("pages/home");
    });

app.get("/contact", function(request, response){
    response.render("pages/contact");
    });


app.get("/gallery", function(request, response) {
    response.render("pages/gallery", {
        details,
    });
});


app.get("/artwork/:titel", function(request, response) {
    response.render("pages/artwork1", {
        post: details.find(({titel}) => titel === request.params.titel)
    });
});


app.use(function(request, response){
    response.statusCode=404;
    response.end("Oops! I did it again");
});

app.set('port', (process.env.PORT || 5000)); 
app.listen(app.get('port'));

