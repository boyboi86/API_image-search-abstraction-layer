var express = require('express'),
    mongoose = require('mongoose'),
    details = require('./details.js'),
    searchCtrl = require('./search.ctrl.js'),
    imgCtrl = require('./img.ctrl.js')
    fs = require('fs'),
    path = require('path');
    
var app = express();
var port = process.env.PORT || 8080;
var dbUri = details.DB_URI ||  process.env.DB_URI || 'mongodb://localhost:27017/db_test';
var dbOption = {
    db: { safe: true }
}

// Set connection to DB
mongoose.connect(dbUri, dbOption);

//Server listener
app.listen(port, function(){
    console.log('App initialized on port: ' + port)
});

function FileErr(err){
    return new Promise(function(resolve, reject){
        if(err) {
            reject(res.sendStatus(404));
        } else {
            resolve(console.log('file rendered'))
        }
})};

//default route
app.get('/', function(req, res){
    var file = path.join(__dirname, 'index.html');
    fs.createReadStream(file, 'utf8', FileErr())
        .pipe(res)
});

//image search route
app.get('/api/imagesearch/:search', imgCtrl)

// timestamp route
app.get('/api/latest/imagesearch', searchCtrl )