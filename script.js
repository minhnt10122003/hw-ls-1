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

 let usernames = users.map(function(item){
     
     return(`${item.firstName} ${item.lastName}`)
     
 })
 console.log(usernames)

//  Apply  filter() method to return all creatures with a habitat that is equal to Ocean:
//   input: 
//   const creatures = [ {name: "Shark", habitat: "Ocean"},
// {name: "Whale", habitat: "Ocean"},
// {name: "Lion", habitat: "Savanna"},
// {name: "Monkey", habitat: "Jungle"}
// ];
// output: [ {name: "Shark", habitat: "Ocean"}, {name: "Whale", habitat: "Ocean"} ]

const creatures = [ {name: "Shark", habitat: "Ocean"},
{name: "Whale", habitat: "Ocean"},
{name: "Lion", habitat: "Savanna"},
{name: "Monkey", habitat: "Jungle"}
];
const result = creatures.filter(item => item.habitat == "Ocean" )
console.log(result)

// Apply  filter() method o return all numbers that are greater than 7:

// input:  [1, 3, 6, 8, 11]
// output: [8, 11]

input =  [1, 3, 6, 8, 11]
const res = input.filter(number => number > 7 )
console.log(res)