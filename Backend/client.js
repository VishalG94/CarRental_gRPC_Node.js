const grpc = require('grpc')
var protoLoader = require("@grpc/proto-loader");
const protoOptions = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    arrays: true,
    oneofs: true
}
const vehiclesProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/vehicle.proto', protoOptions)
);
const addressProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/address.proto', protoOptions)
);
const cardProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/card.proto', protoOptions)
);
const categoryProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/category.proto', protoOptions)
);
const locationProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/location.proto', protoOptions)
);
const reservationProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/reservation.proto', protoOptions)
);
const userProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/user.proto', protoOptions)
);

client = new vehiclesProto.VehicleService('localhost:50051', grpc.credentials.createInsecure());
addressClient = new addressProto.AddressService('localhost:50051', grpc.credentials.createInsecure());
cardClient = new cardProto.CardService('localhost:50051', grpc.credentials.createInsecure());
categoryClient = new categoryProto.CategoryService('localhost:50051', grpc.credentials.createInsecure());
locationClient = new locationProto.LocationService('localhost:50051', grpc.credentials.createInsecure());
reservationClient = new reservationProto.ReservationService('localhost:50051', grpc.credentials.createInsecure());
userClient = new userProto.UserService('localhost:50051', grpc.credentials.createInsecure());

module.exports = {
    client, addressClient, cardClient, categoryClient, locationClient, userClient, reservationClient
}

// module.exports = client