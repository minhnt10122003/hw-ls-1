// Use the map() method to iterate over the array and join the values of  firstName and lastName:
// input: 
// const users = [ {firstName : "Susan", lastName: "Steward"},
// {firstName : "Daniel", lastName: "Longbottom"},
// {firstName : "Jacob", lastName: "Black"}
// ];
// output: ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

const users = [ {firstName : "Susan", lastName: "Steward"},
 {firstName : "Daniel", lastName: "Longbottom"},
 {firstName : "Jacob", lastName: "Black"} ]

 let usernames = users.map(obj => {
     let userlist = {}
     userlist[obj.key] = `${obj.firstName} ${obj.lastName}`
     console.log(userlist)
 })

//  Apply  filter() method to return all creatures with a habitat that is equal to Ocean:
//   input: 
//   const creatures = [ {name: "Shark", habitat: "Ocean"},
// {name: "Whale", habitat: "Ocean"},
// {name: "Lion", habitat: "Savanna"},
// {name: "Monkey", habitat: "Jungle"}
// ];
// output: [ {name: "Shark", habitat: "Ocean"}, {name: "Whale", habitat: "Ocean"} ]

