const btn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp").querySelector("span");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityval = cityName.value;
  if (cityval === "") {
    city_name.innerText = `Enter a city name to search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=a372163e1ec9a2220d72432323e36b4d`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];

      city_name.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
      temp.innerText = arrdata[0].main.temp;
      const tempMood = arrdata[0].weather[0].main;

      //condition to check weather
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-sun' style='color: #f3f31b'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #5d6269'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: #a7d2dc'></i>";
      } else if (tempMood == "Drizzle") {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud-rain' style='color: #595e5f'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa-solid fa-cloud' style='color: #a7d2dc'></i>";
      }

      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Enter a city name to search`;
      datahide.classList.add("data_hide");
    }
  }
};

btn.addEventListener("click", getInfo);
