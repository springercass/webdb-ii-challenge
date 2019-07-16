const express = require("express");
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve cars." });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const car = await db("cars").where({ id });

    res.json(car);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve car." });
  }
});

router.post("/", async (req, res) => {
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCarEntry = await db("cars").where({ id });

    res.status(201).json(newCarEntry);
  } catch (err) {
    console.log("POST error", err);
    res.status(500).json({ message: "Failed to add new car." });
  }
});

function deleteById(id) {
  return db("cars")
    .where({ id })
    .del();
}

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCar = await deleteById(id);
    res.status(200).json(deleteCar);
  } catch (error) {
    console.log("DELETE error", error);
    res.status(500).json({ message: "Failed to delete the car information." });
  }
});

module.exports = router;
