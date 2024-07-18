/*const mongoose = require("mongoose");
let DB_URL = process.env.DB; // هنا نستخدم عنوان URL لقاعدة البيانات الذي قمنا بتعريفه في ملف ENV

module.exports = async function connection() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
      autoIndex: true,
    });
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.log("Failed to connect to database:", error);
  }
};*/
/////const mongoose = require("mongoose");
const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(process.env.DB, connectionParams)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((error) => {
      console.error("Error connecting to database:", error.message);
      process.exit(1); // Exit process with failure
    });
};
