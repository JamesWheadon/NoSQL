db = connect("localhost:27017/celebrities");

function getAllCelebs(){
    return db.celebrities.find().pretty();
}

function numWithKids() {
    return db.celebrities.count({children : {$exists: true}});
}

function awardsByBirth() {
    return db.celebrities.aggregate([
        { $project: { birth: '$birthplace', awards1: { $objectToArray: "$awards" } } },
        { $unwind: "$awards1" },
        {
            $group: {
                _id: '$birth', awards: {
                    $sum: '$awards1.v'
                }
            }
        }
    ])
}