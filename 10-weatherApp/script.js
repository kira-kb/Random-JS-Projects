const btn = document.querySelector(".btn");
const inputCountry = document.querySelector("input");

const country = document.querySelector(".country");
const weather = document.querySelector(".weather");

const a = document.querySelector("a");
const link = document.querySelector(".link");

const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

const weatherAPI = async () => {
  const city = inputCountry.value;

  country.textContent = "";
  weather.textContent = "";
  link.style.display = "none";
  //   console.log(city);
  if (!city.length) return;

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (res.status !== 200)
    return (country.textContent = "oops! we could't find");

  const data = await res.json();

  //   console.log(data.main.temp);
  //   console.log(data.name);
  //   console.log(data);

  country.textContent = data.name;
  weather.textContent = `${data.main.temp} °C`;

  a.href = `https://www.google.com/maps/@${data.coord.lat},${data.coord.lon},14.33z`;

  link.style.display = "block";
};

btn.addEventListener("click", () => {
  weatherAPI();
});
window.addEventListener("keyup", (e) => {
  if (e.key === "Enter") weatherAPI();
});
