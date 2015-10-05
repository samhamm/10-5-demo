var pikePlace = {
  location: 'Pike Place Market',
  minCustHour: 17,
  maxCustHour: 88,
  avgCookiesCust: 5.2,
  // randCustHour: function(){
  // calculate our random num of custs/hour based on min/max
  // return Math.floor(Math.random() * (max - min + 1)) + min;
  // },
  //totalCookiesHour = []:
  makeUL = function....
}


// min
// max
// random

// random * cookies per customer = cookies per hour

function makeUL(array) {

    for(var i = 0; i < array.length; i++) {

        // connect the list to the JS; this is where your list will appear
        var awesomeList = document.getElementById('list1');

        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        awesomeList.appendChild(item);
    }

    // Finally, return the constructed list:
    return awesomeList;
}

var stuff = ["this", "that", "another thing"];
makeUL(stuff);
