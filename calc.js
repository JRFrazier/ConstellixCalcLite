//DNS Slider
var dnsSlider = document.getElementById("dnsInput");
var dnsOutput = document.getElementById("dnsValue");
dnsOutput.innerHTML = dnsSlider.value;

dnsSlider.oninput = function() {
  dnsOutput.innerHTML = this.value;
}
//Sonar HTTP Slider
var httpSlider = document.getElementById("httpInput");
var httpOutput = document.getElementById("httpValue");
httpOutput.innerHTML = httpSlider.value;

httpSlider.oninput = function() {
  httpOutput.innerHTML = this.value;
}
//Sonar HTTPS Slider
var httpsSlider = document.getElementById("httpsInput");
var httpsOutput = document.getElementById("httpsValue");
httpsOutput.innerHTML = httpsSlider.value;

httpsSlider.oninput = function() {
  httpsOutput.innerHTML = this.value;
}
