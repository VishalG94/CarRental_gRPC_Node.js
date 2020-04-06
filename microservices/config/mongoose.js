var mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://admin:admin@cluster0-lzng9.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true, poolSize: 100
    },
    err => {
        if (err) throw err
        console.log("mongoose server running");
    }
)
// mongoose.connect(
//     'mongodb+srv://admin:admin@cluster0-lzng9.mongodb.net/test?retryWrites=true&w=majority',
//     { useNewUrlParser: true, poolSize: 100 },
//     err => {
//         if (err) throw err
//         console.log('mongoose server running')
//     }
// )

module.exports = { mongoose }