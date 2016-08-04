var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var search =new Schema({
    term: {
        type: String,
        required: true
    },
    timestamp: String
});

module.export = mongoose.model('Search', search);