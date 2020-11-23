var api_key = '2faaa5a2-496f-485c-aa26-af5c30a83adb';
var this_year = '2020';
var this_month = 'November';
var detay = "http://www.londonprayertimes.com/api/times/?format=json&year="+this_year+"&month="+this_month+"&key="+api_key
fetch(detay)
.then(function (response){
    return response.json();
})
.then(function (json){
  var pts = json['times'];
  console.log(pts);
  var days_in_the_month = Object.keys(pts).length;

  var today = new Date();
  var today_date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  //console.log(today_date);
  console.log();
  
  var tmonth = new Array(12);
  tmonth[0] = "January";
  tmonth[1] = "February";
  tmonth[2] = "March";
  tmonth[3] = "April";
  tmonth[4] = "May";
  tmonth[5] = "June";
  tmonth[6] = "July";
  tmonth[7] = "August";
  tmonth[8] = "September";
  tmonth[9] = "October";
  tmonth[10] = "November";
  tmonth[11] = "December";

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var month = tmonth[today.getMonth()];
  var bugun = weekday[today.getDay()];
  //console.log(month);
  var mytable = '<table class="table text-center"><thead class=" thead-light"><tr><th scope="col">'+ month +'</th>';
  mytable += '<th scope="col" colspan="2">Fajr <img src="images/sunrise.png" width="15px" alt="Fajr"></th>';
  mytable += '<th scope="col">Sunrise</th>';
  mytable += '<th scope="col" colspan="2">Dhuhr <img src="images/sun.png" width="15px" alt="Dhuhr"></th>';
  mytable += '<th scope="col" colspan="2">Asr <img src="images/sunset.png" width="15px" alt="Asr"></th>';
  mytable += '<th scope="col" colspan="2">Maghrib <img src="images/moonrise.png" width="15px" alt="Maghrib"></th>';
  mytable += '<th scope="col" colspan="2">Isha <img src="images/night.png" width="15px" alt="Isha"></th></tr></thead><tbody>';
  //mytable += "<tr class='table-active'><td></td><td><img src='images/adhan-call.png'><br>START</img></td><td><img src='images/group.png'><br>Jamaah</img></td><td></td><td><img src='images/adhan-call.png'></img></td><td><img src='images/group.png'></img></td><td><img src='images/adhan-call.png'></img></td><td><img src='images/group.png'></img></td><td><img src='images/adhan-call.png'></img></td><td><img src='images/group.png'></img></td><td><img src='images/adhan-call.png'></img></td><td><img src='images/group.png'></img></td></tr>";
  //console.log(pts)
  let newday = '';
  
  for(var i = 0; i < days_in_the_month; i++) {
    day = (i+1).toString();
    //console.log(day);
    if (day.length<2){day='0'+day}
    //console.log(day)
    var gun = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+day.toString();
    //console.log(gun);
    var obj = pts[gun];
    //console.log(obj);
    var fajr = obj['fajr'];
    var fajr_j = obj['fajr_jamat'];
    var sun = obj['sunrise'];
    var dhu = obj['dhuhr'];
    var dhu_j = obj['dhuhr_jamat'];
    var asr = obj['asr'];
    var asr_j = obj['asr_jamat'];
    var mag = obj['magrib'];
    var mag_j = obj['magrib_jamat'];
    var ish = obj['isha'];
    var ish_j = obj['isha_jamat'];
    //console.log(today_date)
    var each_day = new Date(gun)
    var today_weekday = weekday[each_day.getDay()];
    //console.log(today_weekday);
    if (obj['date']==today_date){
      newday = "<tr class='table-active'><td>"+(i+1)+"</td><td>"+fajr+"</td><td>"+fajr_j+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+dhu_j+"</td><td>"+asr+"</td><td>"+asr_j+"</td><td>"+mag+"</td><td>"+mag_j+"</td><td>"+ish+"</td><td>"+ish_j+"</td></tr>";
    }else if (today_weekday=='Friday') {
      newday = "<tr class='table-warning'><td>"+(i+1)+"</td><td>"+fajr+"</td><td>"+fajr_j+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+dhu_j+"</td><td>"+asr+"</td><td>"+asr_j+"</td><td>"+mag+"</td><td>"+mag_j+"</td><td>"+ish+"</td><td>"+ish_j+"</td></tr>";
    }else{
    newday = "<tr><td>"+(i+1)+"</td><td>"+fajr+"</td><td>"+fajr_j+"</td><td>"+sun+"</td><td>"+dhu+"</td><td>"+dhu_j+"</td><td>"+asr+"</td><td>"+asr_j+"</td><td>"+mag+"</td><td>"+mag_j+"</td><td>"+ish+"</td><td>"+ish_j+"</td></tr>";
    }
    mytable += newday;

    //console.log(newday)
    //document.getElementById('timings_row').innerHTML = newday
    //console.log(obj);
  }
  mytable += "</tbody></table>";
  document.getElementById('mytable').innerHTML = mytable;
})
.catch(function (err) {
  console.log(err);
});

<!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> -->