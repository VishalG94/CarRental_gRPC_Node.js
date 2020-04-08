const Vehicles = [
  {
    _id: 123,
    MAKE: "Tesla",
    MODEL: "Model X",
    CATEGORY: "Sedan",
    YEAR: "2011",
    REGISTRATION_TAG: "CA12345",
    MILEAGE: "1000",
    LAST_SERVICE_DATE: "DateService",
    VEHICLE_CONDITION: "Good",
    IMAGE_URL:
      "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC60TSS011C021001.jpg",
    RENTAL_LOCATION_ID: {
      _id: 1,
      NAME: "360 Residences",
      ADDRESS: {
        _id: 1,
        STREET: "360 S Market St, San Jose, CA 95113",
        STATE: "California",
        COUNTRY: "United States",
        PIN: 95113,
        LATITUDE: 37.330516,
        LONGITUDE: -121.885233,
      },

      CURRENT_CAPACITY: 10,
      VEHICLE_CAPACITY: 20,
    },
  },
  {
    _id: 124,
    MAKE: "Ford",
    MODEL: "EcoSport",
    CATEGORY: "SUV",
    YEAR: "2014",
    REGISTRATION_TAG: "CA12445",
    MILEAGE: "10000",
    LAST_SERVICE_DATE: "DateService",
    VEHICLE_CONDITION: "Needs Cleaning",
    IMAGE_URL:
      "https://di-uploads-pod14.dealerinspire.com/kingsford/uploads/2018/04/ford_ecosport2018_blue.png",
    RENTAL_LOCATION_ID: {
      _id: 1,
      NAME: "360 Residences",
      ADDRESS: {
        _id: 1,
        STREET: "360 S Market St, San Jose, CA 95113",
        STATE: "California",
        COUNTRY: "United States",
        PIN: 95113,
        LATITUDE: 37.330516,
        LONGITUDE: -121.885233,
      },

      CURRENT_CAPACITY: 10,
      VEHICLE_CAPACITY: 20,
    },
  },
  {
    _id: 125,
    MAKE: "Toyota",
    MODEL: "Sienna",
    CATEGORY: "Van",
    YEAR: "2017",
    REGISTRATION_TAG: "NV34552",
    MILEAGE: "1000",
    LAST_SERVICE_DATE: "DateService",
    VEHICLE_CONDITION: "Needs Cleaning",
    IMAGE_URL:
      "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/chrome/white/2018TOV110001_1280_01",

    RENTAL_LOCATION_ID: {
      _id: 1,
      NAME: "360 Residences",
      ADDRESS: {
        _id: 1,
        STREET: "360 S Market St, San Jose, CA 95113",
        STATE: "California",
        COUNTRY: "United States",
        PIN: 95113,
        LATITUDE: 37.330516,
        LONGITUDE: -121.885233,
      },

      CURRENT_CAPACITY: 10,
      VEHICLE_CAPACITY: 20,
    },
  },
];

export default Vehicles;
