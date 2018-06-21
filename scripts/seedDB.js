const mongoose = require("mongoose");
const db = require("..models");
mongoose.Promise = global.Promise;


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/NPRreact",
    {
      useMongoClient: true
    }
  );

 const articleSeed=[
     {
        title: "First Ladies Unite Against Separating Children At Border",
        url:"https://www.npr.org/2018/06/19/621349853/first-ladies-unite-against-separating-children-at-border",
        date: new Date(Date.now())
     }
         
    ];

    db.article
        .remove({})
        .then(()=>db.article.collection.insertMany(articleSeed))
        .then (data=>{
            console.log(data.insertedCount + "records inserted!");
            process.exit(0);
        })
        .cath (err => {
            console.error(err);
            process.exit(1);
        });
   