//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// mongoose.connect("mongodb+srv://admin-atu:Test123@cluster0.mj7bbyv.mongodb.net/todolistDB");

mongoose.connect("mongodb://localhost:27017/todolistDB");



const itemsSchema = {
   name: String
};

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
   name: "Welcome to your todolist!"
});

const item2 = new Item({
   name: "Hit the + button to add a new item."
});

const item3 = new Item({
   name: "<-- Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
   name: String,
   items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);

app.get("/", function (req, res) {
   let shouldRedirect = false;
   Item.find({})
      .then(foundItems => {
         if (foundItems.length === 0) {
            shouldRedirect = true;
            return Item.insertMany(defaultItems);
         } else {
            res.render("list", { listTitle: "Today", newListItems: foundItems });
         }
      })  

      .then(() => {
         console.log("Successfully saved default items to the database.");
         if (shouldRedirect) {
            res.redirect("/");
         }
      }) 
      .catch(err => {
         console.log(err);
         res.status(500).send("Internal Server Error");
      });
});


app.get("/:customListName", function(req, res){
   const customListName = _.capitalize(req.params.customListName);

   List.findOne({ name: customListName })
   .then(foundList => {
      if (!foundList) {
         // create a new list
         const list = new List({
            name: customListName,
            items: defaultItems
         });

         return list.save();
      } else {
         // Show an existing list
         res.render("list", { listTitle: foundList.name, newListItems: foundList.items });
      }
   })
   .catch(err => {
      console.log(err);
      res.status(500).send("Internal Server Error");
   });

});
           
app.post("/", function(req, res){
   const itemName = req.body.newItem;

   const listName = req.body.list;

   const item = new Item({ name: itemName }); 

   if(listName === "Today"){
      item.save()
      .then(() => {
         res.redirect("/");
      })
      .catch(err => {
         console.log(err);
         res.status(500).send("Internal Server Error");
      });
   } else {
      List.findOne({ name: listName })
         .then(foundList => {
            foundList.items.push(item);
            return foundList.save();
         })
         .then(() => {
            res.redirect("/" + listName);
         })
         .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error");
         });
   }
   
});

app.post("/delete", function(req, res){
   const checkedItemId = req.body.checkbox;
   const listName = req.body.listName;

   if (listName === "Today") {
      Item.findByIdAndDelete(checkedItemId)
      .then(() => {
       console.log("Successfully deleted checked item.");
       res.redirect("/");
      })
      .catch(err => {
       console.log(err);
       res.status(500).send("Internal Server Error");
      });
   } else {
      List.findOneAndUpdate(
         { name: listName },
         { $pull: { items: { _id: checkedItemId } } }
      )
         .then(() => {
            res.redirect("/" + listName);
         })
         .catch(err => {
            console.log(err);
            res.status(500).send("Internal Server Error");
         });
   }
  
   });

app.get("/about", function(req, res){
    res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
   port = 3000;
}

app.listen(port, function(){
    console.log("Server has started successfully");
});