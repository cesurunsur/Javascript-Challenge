// Get a reference to the table body
var tbody = d3.select("tbody");

// from data.js
var tableData = data;

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

var submit= d3.select("#filter-btn");
submit.on("click",function(){ 
  var dataFilter=d3.select("#datetime"); 
  var dataValue=dataFilter.property("value");
  console.log(dataValue);
  

  var filterData=tableData.filter(x => x.datetime===dataValue)
  console.log(filterData);
  filterData.forEach(function(x) {
    console.log(x);
    tbody.html("");
    var row = tbody.append("tr"); 
    Object.entries(x).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

