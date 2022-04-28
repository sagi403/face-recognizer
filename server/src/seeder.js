import persons from "./data/persons.js";
import { Face } from "./models/face.js";
import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await Face.deleteMany();
    await Face.insertMany(persons);

    console.log("Data imported!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Face.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
