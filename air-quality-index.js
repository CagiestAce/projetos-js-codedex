const aqi = 22;

if (aqi <= 50) {
  console.log("Good")
}
else if (aqi <= 100) {
  console.log("Moderate")
}
else if (aqi <= 150) {
  console.log("Unhealthy(sensitive groups)")
}
else if (aqi <= 200) {
  console.log("Unhealthy")
}
else if (aqi <= 300) {
  console.log("Very Unhealthy")
}
else {
  console.log("Hazardous")
}