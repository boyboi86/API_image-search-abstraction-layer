var Search = require('./img.model.js')

function searchCtrl(req, res) {
    Search.find().sort('-when').limit(10).exec(function(err, doc) {
      res.json(doc.map(function(search) {
        return {
          term: doc.term,
          timestamp: doc.timestamp
        }
      }));
    });
  };
  
module.exports = searchCtrl;