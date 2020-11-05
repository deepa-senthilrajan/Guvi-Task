//Add height and weight to Fluffy
var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", "eat bread omblet"],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}
cat.height =1.3
cat.weight =5

//Fluffy name is spelled wrongly. Update it to Fluffyy
cat.name ="Fluffyy"  

//List all the activities of Fluffyy’s catFriends.
console.log(cat.catFriends[0].activities)
console.log(cat.catFriends[1].activities)

//Print the catFriends names.
console.log(cat.catFriends[1].name)
console.log(cat.catFriends[0].name)

//Print the total weight of catFriends
console.log(cat.catFriends[0].weight+cat.catFriends[1].weight)

//Print the total activities of all cats
var act = cat.catFriends[0].activities
act = act.concat(cat.catFriends[1].activities)
console.log(act)

//Add 2 more activities to bar & foo cats
cat.catFriends[0].activities = "be like garlic"
cat.catFriends[0].activities = "be like chubby"
cat.catFriends[1].activities = "be like stinky"
cat.catFriends[1].activities = "be like u"

//Update the fur color of bar
cat.catFriends[0].furcolor ="brown"
