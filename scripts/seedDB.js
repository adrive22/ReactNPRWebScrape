const mongoose = require("mongoose");
const db = require("..models");
mongoose.Promise = Promise;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/NPRreact",
    {
      useMongoClient: true
    }
  );

 const bookSeed=[
     {
         title: "NPR Headlines",
         URL: "https://www.npr.org/",
         date: new Date(Date.now())
     }
    ];


   