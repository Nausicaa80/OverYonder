var express = require('express');
var router = express.Router();
const db = require("../model/helper");
/* GET users listing. */


module.exports = router;

//select donations from database
router.get("/donations", function(req, res, next) {
  
  db("SELECT * FROM donations;")
    .then(results => {
      res.send(results);
    })
    .catch(error => {
      // Handle the error
      next(error);
    });
});

//Select boy in  childrenGender 

/*Select boy in childrenGender
//router.get("/:childrenGender", function (req, res, next) {
  //const childrenGender = req.params.childrenGender;

  //if (childrenGender === "boy") {
    // Logic for when childrenGender is "boy"
    //res.send({ message: "You selected boy" });
  //} else {
    // Logic for when childrenGender is not "boy"
   // res.send({ message: "You did not select boy" });
  }
});

//select girl in childrenGender
router.get("/:childrenGender", function (req, res, next) {
  const childrenGender = req.params.childrenGender;

  if (childrenGender === "girls") {
    // Logic for when childrenGender is "girl"
    res.send({ message: "You selected girl" });
  } else {
    // Logic for when childrenGender is not "girl"
    res.send({ message: "You did not select Girls" });
  }
});*/


// insert new donation item into the database
router.post("/", function (req, res, next) {
  const { item, itemPrice, itemUrl,itemDescription,itemImg} = req.body;

  if (!item || !itemPrice|| !itemUrl|| !itemDescription|| !itemImg) {
    return res.status(400).json({ message: "Item and Item price are required" });
  }

  db(`INSERT INTO donations (item, itemPrice, itemUrl,itemDescription, itemImg) VALUES ('${item}', ${itemPrice})`)
    .then(() => {
      res.status(201).json({ message: "Donation item added successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    });
});


  //delete donation item from database from ID
  router.delete("/:id", function (req, res, next) {
    const itemId = parseInt(req.params.id);
    db(`DELETE FROM donations WHERE id = ${itemId}`)
        .then(results => {
            if (results.affectedRows > 0) {
                res.json({ message: "Item deleted" });
            } else {
                res.status(404).json({ message: "Item not found" });
            }
        })
        .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});
  


module.exports = router;  