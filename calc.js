//DNS Slider Variables🔥
const dnsSlider = document.getElementById("dnsInput");
const dnsOutput = document.getElementById("dnsValue");
const dnsCost = document.getElementById("dnsCost");
//Query Slider Variables🔥 
const querySlider = document.getElementById("queryInput");
const queryOutput = document.getElementById("queryValue");
const queryCost = document.getElementById("queryCost");
//HTTP Slider Variables🔥
const httpSlider = document.getElementById("httpInput");
const httpOutput = document.getElementById("httpValue");
const httpCost = document.getElementById("httpCost");
//HTTPS Slider Variables🔥
const httpsSlider = document.getElementById("httpsInput");
const httpsOutput = document.getElementById("httpsValue");
const httpsCost = document.getElementById("httpsCost");
//Totals
let dnsTotal = 0;
let queryTotal = 0;
let httpTotal = 0;
let httpsTotal = 0;
//Total
const calcTotal = document.getElementById("calcTotal");

//Loads initial value of $0 for all 3 sliders when window first loads 💪
window.onload = function() {
  dnsCost.innerHTML = "$0";
  queryCost.innerHTML = "$0";
  httpCost.innerHTML = "$0";
  httpsCost.innerHTML = "$0";
};

//DNS Slide
dnsOutput.innerHTML = dnsSlider.value;

dnsSlider.oninput = function() {
  dnsOutput.innerHTML = this.value;

  if (this.value == 1) {
    dnsCost.innerHTML = `$${this.value * 5}`;
    dnsTotal = this.value * 5;
  } else if (this.value > 1 && this.value < 26) {
    dnsCost.innerHTML = `$${((this.value - 1) * 0.5 + 5).toFixed(2)}`;
    dnsTotal = (this.value - 1) * 0.5 + 5;
  } else if (this.value > 25) {
    dnsCost.innerHTML = `$${((this.value - 25) * 0.095 + 17).toFixed(2)}`;
    dnsTotal = (this.value - 25) * 0.095 + 17;
  } else {
    dnsCost.innerHTML = "$0";
    dnsTotal = 0;
  }
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
};

//Query Slider
queryOutput.innerHTML = querySlider.value;

querySlider.oninput = function() {
  queryOutput.innerHTML = this.value

  queryCost.innerHTML = `$${(this.value * 0.39).toFixed(2)}`

  queryTotal = this.value * 0.39;

  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal)
}

//Sonar HTTP Slider
httpOutput.innerHTML = httpSlider.value;
let httpInterval = 86400;
let httpRegionValue = 0.00004;
let httpCheckNumber = 0;

httpSlider.oninput = function() {
  httpOutput.innerHTML = this.value;
  httpCheckNumber = this.value;

  httpCost.innerHTML = `$${(
    httpCheckNumber *
    httpRegionValue *
    httpInterval
  ).toFixed(2)}`;

  httpTotal = httpCheckNumber * httpRegionValue * httpInterval;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
};

function httpIntervalChange(number) {
  httpInterval = number;

  httpCost.innerHTML = `$${(httpCheckNumber * httpRegionValue * number).toFixed(
    2
  )}`;

  httpTotal = httpCheckNumber * httpRegionValue * number;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
}

function setHttpRegionValue(region) {
  if (region === 2) {
    httpRegionValue = 0.00006;
  } else {
    httpRegionValue = 0.00004;
  }

  httpCost.innerHTML = `$${(
    httpCheckNumber *
    httpRegionValue *
    httpInterval
  ).toFixed(2)}`;

  httpTotal = httpCheckNumber * httpRegionValue * httpInterval;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
}

//Sonar HTTPS Slider
let httpsInterval = 86400;
let httpsRegionValue = 0.00006;
let httpsCheckNumber = 0;

httpsOutput.innerHTML = httpsSlider.value;

httpsSlider.oninput = function() {
  httpsOutput.innerHTML = this.value;
  httpsCheckNumber = this.value;

  httpsCost.innerHTML = `$${(
    httpsCheckNumber *
    httpsRegionValue *
    httpsInterval
  ).toFixed(2)}`;

  httpsTotal = httpsCheckNumber * httpsRegionValue * httpsInterval;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
};

function httpsIntervalChange(number) {
  httpsInterval = number;

  httpsCost.innerHTML = `$${(
    httpsCheckNumber *
    httpsRegionValue *
    number
  ).toFixed(2)}`;

  httpsTotal = httpsCheckNumber * httpsRegionValue * number;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
}

function setHttpsRegionValue(region) {
  if (region === 2) {
    httpsRegionValue = 0.00008;
  } else if (region === 3) {
    httpsRegionValue = 0.0001;
  } else {
    httpsRegionValue = 0.00006;
  }

  httpsCost.innerHTML = `$${(
    httpsCheckNumber *
    httpsRegionValue *
    httpsInterval
  ).toFixed(2)}`;

  httpsTotal = httpsCheckNumber * httpsRegionValue * httpsInterval;
  updateTotal(dnsTotal + queryTotal + httpTotal + httpsTotal);
}

// Total
function updateTotal(number) {
  calcTotal.innerHTML = `$${parseFloat(number).toFixed(2)}`;
}
