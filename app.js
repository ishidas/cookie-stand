//Hours of Operation on ALL locations
var hoursOfOperation = ["10am","11am","12pm", "1pm", "2pm","3pm","4pm","5pm","Total"];
var shops = ["Pike Place","Sea Tac Airport", ];

//Pike Place store Hourly Customer, Hourly Cookies TTL, Daily TTL
var pikePlace = {
  minCustPerHr: 17,
  maxCustPerHr: 88,
  aveCookiesPerCust: 5.2,
  hourlyCookies: [],

  calculateRandomHrlyCust: function(){
    return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
  },
  calculateHourlyTtl: function(){
    return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
  },
  calculateDailyTtl: function(){
    var total = 0;
    var pplist = document.getElementById('pikePlaceList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      var listItem1 = document.createElement("li");
      listItem1.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
      pplist.appendChild(listItem1)
    }

  }
};

//calling the above function
pikePlace.calculateDailyTtl();

//Sea Tac Airport store Hourly Customer, Hourly Cookies TTL, Daily TTL

var seaTacAirport = {
  minCustPerHr: 6,
  maxCustPerHr: 44,
  aveCookiesPerCust: 1.2,
  hourlyCookies: [],

  calculateRandomHrlyCust: function(){
    return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
  },
  calculateHourlyTtl: function(){
    return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
  },
  calculateDailyTtl: function(){
    var total = 0;
    var seataclist = document.getElementById('seaTacAirportList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      var listItem2 = document.createElement("li");
      listItem2.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
      seataclist.appendChild(listItem2)
    }

  }
};

seaTacAirport.calculateDailyTtl();

//Southcenter Mall store Hourly Customer, Hourly Cookies TTL, Daily TTL

var southCenterMall = {
  minCustPerHr: 11,
  maxCustPerHr: 38,
  aveCookiesPerCust: 1.9,
  hourlyCookies: [],

  calculateRandomHrlyCust: function(){
    return Math.floor(Math.random()*(this.maxCustPerHr - this.minCustPerHr +1))+this.minCustPerHr;
  },
  calculateHourlyTtl: function(){
    return Math.ceil(this.calculateRandomHrlyCust() * this.aveCookiesPerCust);
  },
  calculateDailyTtl: function(){
    var total = 0;
    var sctrlist = document.getElementById('southCenterMallList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      var listItem3 = document.createElement("li");
      listItem3.innerHTML = hoursOfOperation[i]+ ": " + this.hourlyCookies[i]
      sctrlist.appendChild(listItem3)
    }

  }
};

southCenterMall.calculateDailyTtl();




















