use("tours_travel");

// db.getCollectionNames();
db.users.find();
// db.userdetails.find();

db.users.aggregate([
    {
        $lookup: {
            from: "userdetails",
            localField: "_id",
            foreignField: "userId",
            as: "userDetails"
        }
    }
]);

// db.users.drop();
// db.userdetails.drop();

