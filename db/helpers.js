db = connect("localhost:27017/celebrities");

function getAllCelebs(){
    return db.celebrities.find().pretty();
}

function numWithKids() {
    return db.celebrities.count({children : {$exists: true}});
}

function awardsByBirth() {
    return db.celebrities.aggregate([
        {
            $group: {_id: birthplace, awards: {
                $sum: awards
            }}
        }
    ])
}