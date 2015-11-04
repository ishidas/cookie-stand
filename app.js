//Hours of Operation on ALL locations
var hoursOfOperation = ["10am","11am","12pm", "1pm", "2pm","3pm","4pm","5pm","Total"];
var stores = [];

function CookieStand(storeLocation, minCustPerHr, maxCustPerHr, aveCookiesPerCust) {
  this.storeLocation = storeLocation;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.aveCookiesPerCust = aveCookiesPerCust;
  this.hourlyCookies = [];
  this.total = 0;

  this.calculateRandomHrlyCust = function(){
    return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
  };
  this.calculateHourlyTtl = function(){
    return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
  };
  this.calculateDailyTtl = function(){
    var pplist = document.getElementById('pikePlaceList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      this.total += this.hourlyCookies[i];
      var listItem1 = document.createElement("li");
      listItem1.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
      pplist.appendChild(listItem1)
    };
      var listItem1 = document.createElement("li");
      listItem1.innerHTML = "Total: " + this.hourlyCookies[i]
      pplist.appendChild(this.total)
  }
};


this.display = function() {
  this.calculateHourlyTtl();
  var table = document.createElement('table');
  var row = document.createElement('tr');
  for (var i = 0; i < hoursOfOperation.length; i++) {
  var header = document.createElement('th');
  var data = document.createElement('td');
    data.textConent = hoursOfOperation[i];
    header.appendChild(data);
    row.appendChild(header);
    console.log[i];
  }
  table.appendChild(row);

  for (var i = o; i < this.hourlyCookies.length; i++) {
    var row = document.createElement('tr');
    var data = document.createElement('td');
      data.textConent = this.hourlyCookies[i];
      row.appendChild(data);
      console.log[i];
    }
    table.appendChild(row);

  document.body.appendChild(row);

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTacAirport = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenterMall = new CookieStand('Southcenter Mall', 11, 38, 1.9);
var bellevueSquare = new CookieStand('Bellevue Square Mall', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);





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




















