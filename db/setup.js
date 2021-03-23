db = connect("localhost:27017/celebrities")

db.celebrities.drop()

db.celebrities.insertMany([
    { name: "Ridley Scott", age: 83, birthplace: "England", relStatus: "married", children: 3, awards: {oscar: 9, bafta: 9, goldenGlobe: 5} },
    { name: "James Cameron", age: 66, birthplace: "Canada", relStatus: "married", children: 4, awards: {oscar: 21, bafta: 5, goldenGlobe: 7} },
    { name: "Peter Jackson", age: 59, birthplace: "New Zealand", relStatus: "married", children: 2, awards: {oscar: 20, bafta: 14, goldenGlobe: 4} },
    { name: "Quentin Tarantino", age: 57, birthplace: "America", relStatus: "married", children: 1, awards: {oscar: 7, palmeDor: 1, bafta: 7, goldenGlobe: 8, saturn: 8} },
    { name: "Spike Lee", age: 64, birthplace: "America", relStatus: "married", children: 2, awards: {oscar: 1, palmeDor: 1} },
    { name: "Alfred Hitchcock", age: "deceased", birthplace: "England", children: 1, awards: {oscar: 1, goldenGlobe: 2} },
    { name: "Michael Bay", age: 56, birthplace: "America", relStatus: "single", awards: {goldenRaspb: 2, saturn: 2} }
])