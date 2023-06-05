var user = {
    "firstName": "Will",
    "lastName": "Smith",
    "age": 33,
    "department": "Film",
    "isMale": true,
    "marks": [44, 92, 53, 45, 76],
    "address": {
      "permanent": {
        "flatNumber": 21,
        "blockNumber": "B",
        "streetName": "SardarStreet",
        "city": "Hyderabad",
        "Pincode": "500010"
      },
      "temporary": {
        "flatNumber": 21,
        "blockNumber": "B",
        "streetName": "SardarStreet",
        "city": "Hyderabad",
        "Pincode": "500010"
      }
    },
    "dateOfRegister": new Date(),
    "getFullName": function() {
      return this.firstName + " " + this.lastName;
    },
    "weight": null,
    "eyeColor": undefined
  };
  
  for (var key in user) {
    console.log(key + ": " + typeof user[key]);
  }
  