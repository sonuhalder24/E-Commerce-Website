const mongoose = require("mongoose");

mongoose
  .connect("<YOUR_MONGODB_CONNECTION_LINK>", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });
