var image= document.getElementById("image")
var loc= document.getElementById('loc')
var image_before=window.getComputedStyle(image,"::after")

var ics=window.getComputedStyle(image,"bacground")
image.style.setProperty('--after','green');
window.onload=function(){
    //image.style.setProperty('--dis','none');
    var li = document.getElementsByTagName('li');
    for(var i=0; i < li.length;i++){
        li[i].style.setProperty('--dis','none');
    }
    console.log(li)
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      //console.log(`Latitude: ${latitude}, ${longitude}`);
    });
} else {
    console.log("Geolocation is not supported by this browser.");
    loc.textContent="Geolocation is not supported by this browser."
}
//console.log(window)

function currrent_location(){
    

    navigator.geolocation.watchPosition(function(data){
        console.log(data);
        console.log(`${data.coords.latitude}, ${data.coords.longitude}`)
        loc.textContent=`${data.coords.latitude}, ${data.coords.longitude}`
    },function(err){
        console.log(err);
        loc.textContent=`${err}`
    })
    
}

currrent_location()
