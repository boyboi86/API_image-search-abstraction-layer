var Search = require('./img.model.js'),
    detail = require('./details.js'),
    got = require('got');
    
function imgSearch(req , res){
    return new Promise(function(resolve, reject){
        if(err){
            reject(console.log('Schema not created'))
        } else {
        resolve(
            var newSearch = new Search ({
            term: req.params.search,
            timestamp: new Date().toLocaleString()
            ).save()}
        })
    });
}

//call for google API
function apiCall( req, res){
    return new Promise(function(resolve, reject){
        if(err){
            reject(console.log('Google call not made'))
        } else {
            resolve( 
                got('https://www.googleapis.com/customsearch/v1', {
                  query: {
                    q: req.params.search,
                    searchType: 'image',
                    cx: detail.GOOGLE_CX,
                    key: detail.GOOGLE_KEY',
                    start: req.query.offset || 10},
                  json: true
                }))
                .then(function(data) {
                    console.log(data)
                  var results = data.body.items.map(function(item) {
                    return {
                      url: item.link,
                      snippet: item.snippet,
                      thumbnail: item.image.thumbnailLink,
                      context: item.image.contextLink
                    }
                  });
                  res.json(results);
                });
              };
        }
        
    });
}