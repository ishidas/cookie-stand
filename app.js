//Hours of Operation on ALL locations
var hoursOfOperation = ["Location","10am","11am","12pm", "1pm", "2pm","3pm","4pm","5pm"];
var stores = [];
var table = document.createElement('table');

function CookieStand(storeLocation, minCustPerHr, maxCustPerHr, aveCookiesPerCust) {
  this.storeLocation = storeLocation;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.aveCookiesPerCust = aveCookiesPerCust;
  this.hourlyCookies = [0,];
  this.total = 0;

  this.calculateRandomHrlyCust = function(){
    return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
    console.log(this.calculateRandomHrlyCust());
  };
  this.calculateHourlyTtl = function(){
    return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
    console.log(this.calculateHourlyTtl());
  };
  this.calculateDailyTtl = function(){
    //var pplist = document.getElementById('pikePlaceList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      this.total += this.hourlyCookies[i];
      console.log(this.total);
      var listItem1 = document.createElement("li");
      listItem1.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
      console.log(listItem1.innerHTML);
    //  pplist.appendChild(listItem1)

    };
    //   //added on Nov 4 8:02am- got Total number attached to the list.
    //   var listItem1Total = document.createElement("li");
    //   listItem1Total.innerHTML = "Total: " + pikePlace.total;
    //   listItem1.appendChild(listItem1Total);
    //   console.log(listItem1Total);
  };

  this.tableRows = function() {
    // Create Store name in first cell
    var row = document.createElement('tr');
    table.appendChild(row);
    var tableData = document.createElement('td');
    tableData.innerHTML = this.storeLocation;
    row.appendChild(tableData);
    //Create cookie values in the rest of cells
    for (var i = 1; i < hoursOfOperation.length; i++) {
      var tableData = document.createElement('td'); //Creates tableData tag/element
      tableData.innerHTML = this.hourlyCookies[i]; //Adds the hours to the tag/element
      row.appendChild(tableData);
    }
    var tableData = document.createElement('td');
    tableData.innerHTML = this.total;
    row.appendChild(tableData);
  };
}

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTacAirport = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenterMall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

displayTable = function() {
  //Create Table and Header Row
  // var table = document.createElement('table');
  console.log(table);
  var row = document.createElement('tr');
  row.setAttribute("id", "headerRow"); //Sets an id="headerRow" on the tr tag
  console.log(row);
  var header = document.createElement('th');
  console.log(header);
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var header = document.createElement('th'); //Creates header tag/element
    header.innerHTML = hoursOfOperation[i]; //Adds the hours to the tag/element
    row.appendChild(header);
  }
  var header = document.createElement('th');
  header.innerHTML = 'Total';
  row.appendChild(header);
  table.appendChild(row);
  document.body.appendChild(table);
}
//Calculates each store's cookie count
pikePlace.calculateDailyTtl();
seaTacAirport.calculateDailyTtl();
southCenterMall.calculateDailyTtl();
bellevueSquare.calculateDailyTtl();
alki.calculateDailyTtl();

displayTable(); //Creates table and header row

//Displays each store's row in the table below the header row
pikePlace.tableRows();
seaTacAirport.tableRows();
southCenterMall.tableRows();
bellevueSquare.tableRows();
alki.tableRows();

// //Pike Place store Hourly Customer, Hourly Cookies TTL, Daily TTL
// var pikePlace = {
//   minCustPerHr: 17,
//   maxCustPerHr: 88,
//   aveCookiesPerCust: 5.2,
//   hourlyCookies: [],
//   total: 0,

//   calculateRandomHrlyCust: function(){
//     return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
//   },
//   calculateHourlyTtl: function(){
//     return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
//   },
//   calculateDailyTtl: function(){
//     var pplist = document.getElementById('pikePlaceList');
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       this.hourlyCookies.push(this.calculateHourlyTtl());
//       this.total += this.hourlyCookies[i];
//       var listItem1 = document.createElement("li");
//       listItem1.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
//       pplist.appendChild(listItem1)
//     }
//       var listItem1 = document.createElement("li");
//       listItem1.innerHTML = "Total: " + this.hourlyCookies[i]
//       pplist.appendChild(this.total)
//   }
// };

// //calling the above function
// pikePlace.calculateDailyTtl();

// //Sea Tac Airport store Hourly Customer, Hourly Cookies TTL, Daily TTL

// var seaTacAirport = {
//   minCustPerHr: 6,
//   maxCustPerHr: 44,
//   aveCookiesPerCust: 1.2,
//   hourlyCookies: [],

//   calculateRandomHrlyCust: function(){
//     return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
//   },
//   calculateHourlyTtl: function(){
//     return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
//   },
//   calculateDailyTtl: function(){
//     var total = 0;
//     var seataclist = document.getElementById('seaTacAirportList');
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       this.hourlyCookies.push(this.calculateHourlyTtl());
//       var listItem2 = document.createElement("li");
//       listItem2.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
//       seataclist.appendChild(listItem2)
//     }

//   }
// };

// seaTacAirport.calculateDailyTtl();

// //Southcenter Mall store Hourly Customer, Hourly Cookies TTL, Daily TTL

// var southCenterMall = {
//   minCustPerHr: 11,
//   maxCustPerHr: 38,
//   aveCookiesPerCust: 1.9,
//   hourlyCookies: [],

//   calculateRandomHrlyCust: function(){
//     return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
//   },
//   calculateHourlyTtl: function(){
//     return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
//   },
//   calculateDailyTtl: function(){
//     var total = 0;
//     var sctrlist = document.getElementById('southCenterMallList');
//     for (var i = 0; i < hoursOfOperation.length; i++) {
//       this.hourlyCookies.push(this.calculateHourlyTtl());
//       var listItem3 = document.createElement("li");
//       listItem3.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
//       sctrlist.appendChild(listItem3)
//     }

//   }
// };

// southCenterMall.calculateDailyTtl();




















