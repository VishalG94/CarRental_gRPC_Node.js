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

const membershipProto = grpc.loadPackageDefinition(
    protoLoader.loadSync('./protos/membership.proto', protoOptions)
);

// let clientServer = 'http://3.86.217.122:50051'
let clientServer = 'localhost:50051'

client = new vehiclesProto.VehicleService(clientServer, grpc.credentials.createInsecure());
addressClient = new addressProto.AddressService(clientServer, grpc.credentials.createInsecure());
cardClient = new cardProto.CardService(clientServer, grpc.credentials.createInsecure());
categoryClient = new categoryProto.CategoryService(clientServer, grpc.credentials.createInsecure());
locationClient = new locationProto.LocationService(clientServer, grpc.credentials.createInsecure());
reservationClient = new reservationProto.ReservationService(clientServer, grpc.credentials.createInsecure());
userClient = new userProto.UserService(clientServer, grpc.credentials.createInsecure());
membershipClient = new membershipProto.MembershipService(clientServer, grpc.credentials.createInsecure());


module.exports = {
    client, addressClient, cardClient, categoryClient, locationClient, userClient, reservationClient, membershipClient
}

// module.exports = client