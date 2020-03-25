// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
tableData.forEach(function(weatherReport) {
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

// var submit= d3.select("#filter-btn");
// submit.on("click",filterClick)

var input=d3.select("input")
var button=d3.selectAll(".filter")
inputValues={};

function filterClick(){ 

  var query=d3.select(this).select("input"); 
  var dataValue=query.property("value");
  var queryID=query.attr("id");
  console.log(query);
  console.log(dataValue)
 
  inputValues[queryID] = dataValue;
 

// inputValues[queryid] = dataValue;
    console.log(inputValues);
    createnewtable();
}

function createnewtable() {
    let filterData=tableData;
    Object.entries(inputValues).forEach(function([key, value]) {
    filterData = filterData.filter(x => x[key]===value)
    console.log(filterData);
    });
    var tbody = d3.select("tbody");
    tbody.html("");
    filterData.forEach(function(x) {
        var row = tbody.append("tr"); 
        Object.entries(x).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
  });
};
button.on("change",filterClick)

