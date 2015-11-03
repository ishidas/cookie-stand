var hoursOfOperation = ["10am","11am","12pm", "1pm", "2pm","3pm","4pm","5pm","6pm"];

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
    var pikePlaceList = document.getElementById('pikePlaceList');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      this.hourlyCookies.push(this.calculateHourlyTtl());
      var listItem = document.createElement("li");
      listItem.innerHTML = this.hourlyCookies[i]
      pikePlaceList.appendChild(listItem)
    }

  }
};


pikePlace.calculateDailyTtl();


