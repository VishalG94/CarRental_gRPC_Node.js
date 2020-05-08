const grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
let db = require('./models/db.js');

const VEHICLE_PROTO_FILE_PATH = './protos/vehicle.proto';
const vehiclePackageDefinition = protoLoader.loadSync(VEHICLE_PROTO_FILE_PATH);
const vehicleProto = grpc.loadPackageDefinition(vehiclePackageDefinition);

const ADDRESS_PROTO_FILE_PATH = './protos/address.proto';
const addressPackageDefinition = protoLoader.loadSync(ADDRESS_PROTO_FILE_PATH);
const addressProto = grpc.loadPackageDefinition(addressPackageDefinition);

const cardPackageDefinition = protoLoader.loadSync('./protos/card.proto');
const cardProto = grpc.loadPackageDefinition(cardPackageDefinition);

const locationPackageDefinition = protoLoader.loadSync('./protos/location.proto');
const locationProto = grpc.loadPackageDefinition(locationPackageDefinition);

const categoryPackageDefinition = protoLoader.loadSync('./protos/category.proto');
const categoryProto = grpc.loadPackageDefinition(categoryPackageDefinition);

const userPackageDefinition = protoLoader.loadSync('./protos/user.proto');
const userProto = grpc.loadPackageDefinition(userPackageDefinition);

const reservationPackageDefinition = protoLoader.loadSync('./protos/reservation.proto');
const reservationProto = grpc.loadPackageDefinition(reservationPackageDefinition);

const membershipPackageDefinition = protoLoader.loadSync('./protos/membership.proto');
const membershipProto = grpc.loadPackageDefinition(membershipPackageDefinition);

let VehicleService = require('./services/VehicleService');
let MembershipService = require('./services/MembershipService');
let AddressService = require('./services/AddressService');
let CardService = require('./services/CardService');
let LocationService = require('./services/LocationService');
let CategoryService = require('./services/CategoryService');
let UserService = require('./services/UserService');
let ReservationService = require('./services/ReservationService');

const server = new grpc.Server();
server.addService(vehicleProto.VehicleService.service, VehicleService);
server.addService(membershipProto.MembershipService.service, MembershipService);
server.addService(addressProto.AddressService.service, AddressService);
server.addService(cardProto.CardService.service, CardService);
server.addService(categoryProto.CategoryService.service, CategoryService);
server.addService(locationProto.LocationService.service, LocationService);
server.addService(userProto.UserService.service, UserService);
server.addService(reservationProto.ReservationService.service, ReservationService);

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://localhost:50051')
server.start()