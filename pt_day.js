
//Daily times
const todays_d = new Date()
console.log("date: "+ todays_d)

fetch('http://api.aladhan.com/v1/timingsByCity?city=London&country=United%20Kingdom&method=3&school=1')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  //appendData(data);
  pts = data['data']['timings']
  console.log(pts)
  document.getElementById('T_Fajr').innerHTML = pts.Fajr
  document.getElementById('T_Sunrise').innerHTML = pts.Sunrise
  document.getElementById('T_Dhuhr').innerHTML = pts.Dhuhr
  document.getElementById('T_Asr').innerHTML = pts.Asr
  document.getElementById('T_Maghrib').innerHTML = pts.Maghrib
  document.getElementById('T_Isha').innerHTML = pts.Isha
  // gregorian
  dateg = data['data']['date']['readable']
  hij_d = data['data']['date']['hijri']['day']
  hij_m = data['data']['date']['hijri']['month']['en']
  hij_y = data['data']['date']['hijri']['year']
  hijri_date = hij_d + " " + hij_m + " " + hij_y
  document.getElementById('hijri_date').innerHTML = hijri_date;
  document.getElementById('gregorian_date').innerHTML = dateg;
  //console.log(dateg);
  //console.log(hijri_date);
  //console.log(pts['Fajr'])
})
.catch(function (err) {
  console.log(err);
});
