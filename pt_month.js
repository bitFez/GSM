
//Daily times
fetch('http://api.aladhan.com/v1/calendarByCity?city=London&country=United%20Kingdom&method=2&school=1')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  pts = data['data'];
  var month = pts[0]['date']['gregorian']['month']['en'];
  //console.log(month);
  mytable = '<table class="table"><thead class=" thead-light"><tr><th scope="col">'+month+'</th>';
  mytable += '<th scope="col">Fajr <img src="images/sunrise.png" width="15px" alt="Fajr"></th>';
  mytable += '<th scope="col">Sunrise</th>';
  mytable += '<th scope="col">Dhuhr <img src="images/sun.png" width="15px" alt="Dhuhr"></th>';
  mytable += '<th scope="col">Asr <img src="images/sunset.png" width="15px" alt="Asr"></th>';
  mytable += '<th scope="col">Maghrib <img src="images/moonrise.png" width="15px" alt="Maghrib"></th>';
  mytable += '<th scope="col">Isha <img src="images/night.png" width="15px" alt="Isha"></th></tr></thead><tbody>';

  var today = new Date();
  var today_date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  //console.log(today_date)
  let newday = '';
  for(var i = 0; i < pts.length; i++) {
    var obj = pts[i];
    var day = obj['date']['gregorian']['day'];
    var fajr = obj['timings']['Fajr'];
    var sun = obj['timings']['Sunrise'];
    var dhu = obj['timings']['Dhuhr'];
    var asr = obj['timings']['Asr'];
    var mag = obj['timings']['Maghrib'];
    var ish = obj['timings']['Isha'];
    if (obj['date']['gregorian']['date']==today_date){
      newday = "<tr class='table-active'><td>"+day+"</td><td>"+fajr+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+asr+"</td><td>"+mag+"</td><td>"+ish+"</td></tr>";
    }else if (obj['date']['gregorian']['weekday']['en']=='Friday') {
      newday = "<tr class='table-warning'><td>"+day+"</td><td>"+fajr+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+asr+"</td><td>"+mag+"</td><td>"+ish+"</td></tr>";
    }else{
    newday = "<tr><td>"+day+"</td><td>"+fajr+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+asr+"</td><td>"+mag+"</td><td>"+ish+"</td></tr>";
    }
    mytable += newday;

    console.log(fajr)
    //document.getElementById('timings_row').innerHTML = newday
    //console.log(obj);
  }
  mytable += "</tbody></table>";
  document.getElementById('mytable').innerHTML = mytable;
})

.catch(function (err) {
  console.log(err);
});
