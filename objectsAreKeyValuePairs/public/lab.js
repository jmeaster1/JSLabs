/*
0 : You have been provided with several data points:

- ips : an array of comma seperated IP addresses

- states : an object containing many objects representing US States

- commit : an object from the github api representing a commit

*/

/*
1 : Modify the following function such that it will return an object representing
a state from the 'states' object when it's abbreviation is provided
*/
var getStateByAbbr = function(abbr) {
/************************* Your Solution *************************/
return states[abbr];
/*****************************************************************/
}
console.log(getStateByAbbr('CO'))

/*
2 : Modify the following function to return the name of the capital of the state
by it's abbreviation
*/
var getStateCapitalByAbbr = function(abbr) {
/************************* Your Solution *************************/
var state = states[abbr]
return state.capital;

/*****************************************************************/
}
console.log(getStateCapitalByAbbr('CO'))
/*

3 : Return an array of state objects within some distance of a provided latitude
and longitude
*/

var getStatesWithinDegreesOfLatLong = function(lat,long,distance) {
/************************* Your Solution *************************/
var stateArray = [];

var minLat = lat - distance;
var maxLat = lat + distance;
var minLong = long - distance;
var maxLong = long + distance;

for (var state in states){

  if( states[state].lat < maxLat && states[state].lat > minLat && states[state].long < maxLong && states[state].long > minLong){
      stateArray.push(states[state]);
    }
}
return stateArray;


/*****************************************************************/
}
console.log(getStatesWithinDegreesOfLatLong(33,-112,10))

/*
4 : Modify the following 'countProperties' function ...


Use the for...in loop to count the number of properties in the provided object.
*/

var countProperties = function(obj) {
/************************* Your Solution *************************/
var counter = 0;
for (var p in obj){
  counter++;

}
return counter;

/*****************************************************************/
};
console.log(countProperties(states));

/*
5 : Return an object. The properties of the object should be the unique IP addresses
and the values should be the number of times that that IP address made a request
*/
var logAccessByIp = function(ips) {
/************************* Your Solution *************************/

//property = ipAddress thats unique
//value = number of times it shows up

var ipAddresses = { };
for(var i = 0; i < ips.length; i++){
  var x = ips[i]; //ip address each time through(the actual strings in the file) //the property
  if(ipAddresses[x] === undefined){
    ipAddresses[x] = 1; //the count is its value //x isn't in quotes cuz its already a String inside the variable(with quotes)
  }
  else{
    ipAddresses[x] += 1;
  }
}
return ipAddresses;

/*****************************************************************/
};
console.log(logAccessByIp(ips));

/*
6 : Use the provided commit JSON to format and return a new object like the following:

{
  committer : "The committer's name",
  timestamp : "The date the commit was authored",
  msg : "The commit message",
  sha : "The commit's sha"
}
*/
var formatGithubCommit = function(commit) {
/************************* Your Solution *************************/
var result = {};
result.committer = commit.author.name;
result.timestamp = commit.author.date;
result.msg = commit.message;
result.sha = commit.tree.sha;
return result;




/*****************************************************************/
};

console.log(formatGithubCommit(commit));
