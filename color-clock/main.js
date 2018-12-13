function center() {
    var main = document.getElementById('main');
     main.style['margin-top'] = (((document.documentElement.clientHeight) / 2) - (main.offsetHeight / 2)) + 'px';
     main.style['margin-left'] = (((document.documentElement.clientWidth) / 2) - (main.offsetWidth / 2)) + 'px';
     var title = document.getElementById("title");
     title.style['margin-left'] = (((document.documentElement.clientWidth) / 2) - (title.offsetWidth / 2)) + 'px';
}
center();
window.addEventListener('resize', center);
var date = new Date;
var hours = document.getElementById("hours");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");
var hex1 = document.getElementById("hex1");
var hex2 = document.getElementById("hex2");
var hex3 = document.getElementById("hex3");
hours.innerHTML = ("0" + date.getHours()).slice(-2);
mins.innerHTML = ("0" + date.getMinutes()).slice(-2);
secs.innerHTML = ("0" + date.getSeconds()).slice(-2);
hex1.innerHTML = ("0" + (Math.round(date.getHours() * 255 / 24)).toString(16)).toUpperCase().slice(-2);
hex2.innerHTML = ("0" + (Math.round(date.getMinutes() * 255 / 60)).toString(16)).toUpperCase().slice(-2);
hex3.innerHTML = ("0" + (Math.round(date.getSeconds() * 255 / 60)).toString(16)).toUpperCase().slice(-2)
var hex = hex1.innerHTML + hex2.innerHTML + hex3.innerHTML;
document.body.style.background = "#" + hex;
setInterval(function(){
    var date = new Date;
    hours.innerHTML = ("0" + date.getHours()).slice(-2);
    mins.innerHTML = ("0" + date.getMinutes()).slice(-2);
    secs.innerHTML = ("0" + date.getSeconds()).slice(-2);
    hex1.innerHTML = ("0" + (Math.round(date.getHours() * 255 / 24)).toString(16)).toUpperCase().slice(-2);
    hex2.innerHTML = ("0" + (Math.round(date.getMinutes() * 255 / 60)).toString(16)).toUpperCase().slice(-2);
    hex3.innerHTML = ("0" + (Math.round(date.getSeconds() * 255 / 60)).toString(16)).toUpperCase().slice(-2);	
    var hex = hex1.innerHTML + hex2.innerHTML + hex3.innerHTML;
    document.body.style.background = "#" + hex;
}, 1000)