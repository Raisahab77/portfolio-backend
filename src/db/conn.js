const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dummy-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection is successful");
}).catch((err) => {
    console.log("No connection!");
});