// Poblem 1
 var myArray = [];
 for (var i = 1000; i > 0; i -= 2) {
    myArray.push(i);
 }
 
 console.log(myArray);
  
  // Problem 2 
 
     for(let i = 0; i <= 10000; i++) {
      if(i == 2500) {
         alert("A quarter of the way there!");
    } else if (i == 5000) {
       alert("Halfway there!");
    } else (i == 10000); {
 
    }
       
 }
 alert("The loop is done!");
 
 
 
 
 
// Problem 3 Favorite TV Shows

var tvShows = ["NCIS Los Angles", "Power", "Dateline NBC", "Matlock", "House Hunters"];
var myRankings = ["#1", "#2", "#3", "#4", "#5"]; 

for(let i = 0; i < tvShows.length; i++) {
   console.log("My"   +   myRankings [i] +   "favorite TV show is"  +   tvShows [i]  );
}
