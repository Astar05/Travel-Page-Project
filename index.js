function showTokyoTime() {
  let timeElement = document.querySelector("#time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  timeElement.innerHTML = `<i class="fa-regular fa-clock"></i> ${tokyoTime.format(
    "h:mm A"
  )} (JST) `;
}

function showTokyoTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let tokyoTemperatureCelsius = response.data.temperature.current;
  let tokyoTemperatureFahrenheit = (tokyoTemperatureCelsius * 9) / 5 + 32;

  temperatureElement.innerHTML = `<i class="fa-solid fa-temperature-three-quarters"></i> ${Math.round(
    tokyoTemperatureCelsius
  )}°C | ${Math.round(tokyoTemperatureFahrenheit)}°F`;
}

showTokyoTime();
setInterval(showTokyoTime, 1000);

let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=18.95508&lat=69.6489&key=491037f95bt62c7eo1c6b568c53adb94&units=metric`;
axios.get(apiUrl).then(showTokyoTemperature);
