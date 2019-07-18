exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: 100001, make: "Ford", model: "Explorer", mileage: "15000" },
        { VIN: 100002, make: "Chevy", model: "Cruise", mileage: "30000" },
        { VIN: 100003, make: "Nissan", model: "Altima", mileage: "23000" }
      ]);
    });
};
