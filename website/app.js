/* Global Variables */
const wetharURl = "https://api.openweathermap.org/data/2.5/weather?q=";
const keyAPI = "&appid=59eb55b374ec6eb2c9767edc66485c61&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();

// create a event click on the generate button
document.getElementById("generate").addEventListener("click", onClickBtn);
function onClickBtn() {
  // get the values from inputs
  const zip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeatherApi(wetharURl, zip, keyAPI).then((data) => {
    //check if zip code or city is correct
    if (data.cod === 200) {
      postData("/add", {
        temp: data["main"].temp,
        feelings: feelings,
        time: newDate,
      });
      retrieveData();
    } else {
      console.log(data.message);
      document.getElementById("content").innerHTML = data.message;
    }
  });
}

// make the asyncronas fucntion to get wather data from api
const getWeatherApi = async (w, zipCode, key) => {
  const resObject = await fetch(w + zipCode + key);
  try {
    const data = resObject.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// send data to server
const postData = async function (url = "", data = {}) {
  console.log(data);
  const respons = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await respons.json();
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

// reseave data from the server and add it to divs
const retrieveData = async () => {
  const request = await fetch("/all");
  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById("temp").innerHTML =
      Math.round(allData.temp) + " degrees";
    document.getElementById("content").innerHTML = allData.feelings;
    document.getElementById("date").innerHTML = allData.time;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
