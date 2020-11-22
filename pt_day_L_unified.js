
//Daily times
const todays_d = new Date()
//console.log("date: "+ todays_d)

fetch('http://www.londonprayertimes.com/api/times/?format=json&key=2faaa5a2-496f-485c-aa26-af5c30a83adb')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  //appendData(data);
  pts = data;
  console.log(pts)
  //console.log(pts)
  document.getElementById('T_Fajr').innerHTML = pts.fajr
  fajr = pts.fajr
  fajr_J = moment.utc(fajr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_fajr_j').innerHTML = fajr_J;
  document.getElementById('T_Sunrise').innerHTML = pts.sunrise
  document.getElementById('T_Dhuhr').innerHTML = pts.dhuhr
  dhuhr = pts.dhuhr
  dhuhr_j = moment.utc(dhuhr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_dhuhr_j').innerHTML = dhuhr_j;
  document.getElementById('T_Asr').innerHTML = pts.asr;
  asr = pts.asr_2;
  asr_j = moment.utc(asr,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_asr_j').innerHTML = asr_j;
  document.getElementById('T_Maghrib').innerHTML = pts.magrib;
  maghrib = pts.magrib;
  maghrib_j = moment.utc(maghrib,'hh:mm').add(5,'minutes').format('HH:mm');
  document.getElementById('T_maghrib_j').innerHTML = maghrib_j;
  document.getElementById('T_Isha').innerHTML = pts.isha;
  isha = pts.isha;
  isha_j  = moment.utc(isha,'hh:mm').add(15,'minutes').format('HH:mm');
  document.getElementById('T_isha_j').innerHTML = isha_j;
  // gregorian
  //dateg = data['data']['date']['readable']
  //hij_d = data['data']['date']['hijri']['day']
  //hij_m = data['data']['date']['hijri']['month']['en']
  //hij_y = data['data']['date']['hijri']['year']
  //hijri_date = hij_d + " " + hij_m + " " + hij_y
  //document.getElementById('hijri_date').innerHTML = hijri_date;
  //document.getElementById('gregorian_date').innerHTML = dateg;
  //console.log(dateg);
  //console.log(hijri_date);
  //console.log(pts['Fajr'])
})
.catch(function (err) {
  console.log(err);
});
