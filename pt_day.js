
//Daily times
const todays_d = new Date()
//console.log("date: "+ todays_d)

fetch('http://api.aladhan.com/v1/timingsByCity?city=London&country=United%20Kingdom&method=3&school=1')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  //appendData(data);
  pts = data['data']['timings']
  //console.log(pts)
  document.getElementById('T_Fajr').innerHTML = pts.Fajr
  fajr = pts.Fajr
  fajr_J = moment.utc(fajr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_fajr_j').innerHTML = fajr_J;
  document.getElementById('T_Sunrise').innerHTML = pts.Sunrise
  document.getElementById('T_Dhuhr').innerHTML = pts.Dhuhr
  dhuhr = pts.Dhuhr
  dhuhr_j = moment.utc(dhuhr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_dhuhr_j').innerHTML = dhuhr_j;
  document.getElementById('T_Asr').innerHTML = pts.Asr;
  asr = pts.Asr;
  asr_j = moment.utc(asr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_asr_j').innerHTML = asr_j;
  document.getElementById('T_Sunset').innerHTML = pts.Sunset;
  document.getElementById('T_Maghrib').innerHTML = pts.Maghrib;
  maghrib = pts.Maghrib;
  maghrib_j = moment.utc(maghrib,'hh:mm').add(5,'minutes').format('HH:mm');
  document.getElementById('T_maghrib_j').innerHTML = maghrib_j;
  document.getElementById('T_Isha').innerHTML = pts.Isha;
  isha = pts.Isha;
  isha_j  = moment.utc(isha,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_isha_j').innerHTML = isha_j;
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
