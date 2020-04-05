const grpc = require('grpc')
const uuidv1 = require('uuid/v1')
const VEHICLE_PROTO_FILE_PATH = './protos/vehicle.proto'
const vehicleProto = grpc.load({ root: __dirname, file: VEHICLE_PROTO_FILE_PATH })
var { Vehicle } = require('./models/vehicles');
var { mongoose } = require('./config/mongoose');

// const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://user:user@cluster0-yhk3o.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, function (err) {
//     if (err) {
//         console.log("ERROR! MONGO MONGOOSE")
//         throw err;
//     }
//     else {
//         console.log('Successfully connected to MongoDB');
//     }
// })
const server = new grpc.Server()
server.addService(vehicleProto.VehicleService.service, {
    list: (_, callback) => {

        //make request
        Vehicle.find({}, function (err, res) {
            if (err) {
                console.log("error is", err)
            }
            else {
                callback(null, JSON.stringify(res))
                console.log(JSON.stringify(res));
            }
        })


    },
    insert: (call, callback) => {
        let book = call.request
        book.id = uuidv1()
        console.log("title is" + book.title + "    content is" + book.content)

        Books.create({
            id: book.id,
            title: book.title,
            content: book.content
        }, function (err, res) {
            if (err) {
                console.log("error is", err)
            }
            else {
                console.log("book created")
            }
        })
        callback(null, book)
    }
})
server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://0.0.0.0:50051')
server.start()