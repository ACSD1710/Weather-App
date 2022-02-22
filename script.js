const input = document.getElementById("input");
const button = document.getElementById("button");
const statistics = document.getElementById("statistics");
const hourlyData = document.getElementById("hourlydata");
let body = document.getElementsByTagName("body")[0];
let mainDiv = document.getElementById("main");
let div = document.createElement("div");
let divTable = document.createElement("div");

function displayElementHourlyData(data) {
  let h1 = document.createElement("h1");
  h1.textContent = `Weather Alert of ${input.value} right now `;

  let h2 = document.createElement("h2");
  h2.textContent =
    "The most accurate weather page in the world! According the some sources...";

  let tempMax = document.createElement("h2");
  let tempMin = document.createElement("h2");
  let maxTemp = document.createElement("p");
  let minTemp = document.createElement("p");
  let avgTemp = document.createElement("p");
  let sumTemp = 0;

  let maxTemhelp = data.list[0].main.temp_max;
  let minTemhelp = data.list[0].main.temp_min;
  

  let tempMid = data.list[0].main.temp;

  let maxHum = document.createElement("p");
  let minHum = document.createElement("p");
  let avgHum = document.createElement("p");
  let sumHum = 0;

  let maxHumhelp = data.list[0].main.humidity;
  let minHumhelp = data.list[0].main.humidity;

  for (const item of data.list) {
    console.log(item.main.temp);
    if (item.main.temp >= tempMid) {
      tempMax.textContent = `Warmest time of the following period: ${item.dt_txt} and Tepreture is ${item.main.temp}`;
    }

    if (item.main.temp <= tempMid) {
      tempMin.textContent = `Coldest time of the following period: ${item.dt_txt} and Tepreture is ${item.main.temp}`;
    }

    sumTemp = sumTemp + item.main.temp;

    if (item.main.temp_max >= maxTemhelp) {
      maxTemhelp = item.main.temp_max;
    }
    if (item.main.temp_min <= minTemhelp) {
      minTemhelp = item.main.temp_min;
    }

    if (item.main.humidity >= maxHumhelp) {
      maxHumhelp = item.main.humidity;
    }

    sumHum = sumHum + item.main.humidity;

    if (item.main.humidity < maxHumhelp) {
      minHumhelp = item.main.humidity;
    }
  }

  let sumAvgTem = sumTemp / data.list.length;

  avgTemp.textContent = `The AVG.Temp is: ${sumAvgTem.toFixed(1)}  °C`;
  maxTemp.textContent = `The Max.Temp is: ${maxTemhelp} °C`;
  minTemp.textContent = `The Min.Temp is: ${minTemhelp.toFixed(1)} °C`;

  let avgHum1 = sumHum / data.list.length;

  maxHum.textContent = `MAX HUMD: ${maxHumhelp} %`;
  minHum.textContent = `MIN HUMD: ${minHumhelp} %`;
  avgHum.textContent = `AVG HUMD: ${avgHum1} %`;

  console.log(avgHum1);
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(maxTemp);
  div.appendChild(minTemp);
  div.appendChild(avgTemp);
  div.appendChild(maxHum);
  div.appendChild(minHum);
  div.appendChild(avgHum);
  div.appendChild(tempMax);
  div.appendChild(tempMin);
  body.appendChild(div);
}

async function screen() {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Prilep&units=metric&APPID=22ccdc6670a066836a0f584d3470320f`
    );
    let result = await res.json();
    let h1 = document.createElement("h1");
    h1.textContent = `Weather Alert of Prilep right now `;

    let h2 = document.createElement("h2");
    h2.textContent =
      "The most accurate weather page in the world! According the some sources...";

    let tempMax = document.createElement("h2");
    let tempMin = document.createElement("h2");
    let maxTemp = document.createElement("p");
    let minTemp = document.createElement("p");
    let avgTemp = document.createElement("p");
    let sumTemp = 0;

    let maxTemhelp = result.list[0].main.temp_max;
    let minTemhelp = result.list[0].main.temp_min;

    let tempMid = result.list[0].main.temp;
    console.log(tempMid);

    let maxHum = document.createElement("p");
    let minHum = document.createElement("p");
    let avgHum = document.createElement("p");
    let sumHum = 0;

    let maxHumhelp = result.list[0].main.humidity;
    let minHumhelp = result.list[0].main.humidity;

    for (const item of result.list) {
      if (item.main.temp >= tempMid) {
        tempMax.textContent = `Warmest time of the following period: ${item.dt_txt} and Tepreture is ${item.main.temp}`;
      }

      if (item.main.temp <= tempMid) {
        tempMin.textContent = `Coldest time of the following period: ${item.dt_txt} and Tepreture is ${item.main.temp}`;
      }

      sumTemp = sumTemp + item.main.temp;

      if (item.main.temp_max >= maxTemhelp) {
        maxTemhelp = item.main.temp_max;
      }
      if (item.main.temp_min <= minTemhelp) {
        minTemhelp = item.main.temp_min;
      }

      if (item.main.humidity >= maxHumhelp) {
        maxHumhelp = item.main.humidity;
      }

      sumHum = sumHum + item.main.humidity;

      if (item.main.humidity < maxHumhelp) {
        minHumhelp = item.main.humidity;
      }
    }
    let sumAvgTem = sumTemp / result.list.length;

    avgTemp.textContent = `The AVG.Temp is: ${sumAvgTem.toFixed(1)}  °C`;
    maxTemp.textContent = `The Max.Temp is: ${maxTemhelp} °C`;
    minTemp.textContent = `The Min.Temp is: ${minTemhelp.toFixed(1)} °C`;

    let avgHum1 = sumHum / result.list.length;

    maxHum.textContent = `MAX HUMD: ${maxHumhelp} %`;
    minHum.textContent = `MIN HUMD: ${minHumhelp} %`;
    avgHum.textContent = `AVG HUMD: ${avgHum1} %`;

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(maxTemp);
    div.appendChild(minTemp);
    div.appendChild(avgTemp);
    div.appendChild(maxHum);
    div.appendChild(minHum);
    div.appendChild(avgHum);
    div.appendChild(tempMax);
    div.appendChild(tempMin);
    body.appendChild(div);
  } catch (err) {
    console.log("Something went wrong");
  }
}

async function table(data) {
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  h1.textContent = `Hourly Data of Prilep`;
  p.textContent = `Here you can read the hourly weather report for the following days. Keep in mind that it is not actually every hour, but every 3 - 5 hours`;

  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=Prilep&units=metric&APPID=22ccdc6670a066836a0f584d3470320f`
    );
    let result = await res.json();
    let list = result.list;
    let theadArray = [
      "",
      "Weather Discription",
      "Date and Time",
      "Max and Min Temp",
      "Humudity",
      "Wind Speed",
    ];

    for (const iterator of theadArray) {
      
      let th = document.createElement("th");
      th.textContent = `${iterator}`;
      thead.appendChild(th);
    }

    for (const iterator of list) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");

      
      td1.textContent = `${iterator.weather[0].description}`;
      td2.textContent = `${iterator.dt_txt}`;
      td3.textContent = `${iterator.main.temp_max}.Max.temp, (${iterator.main.temp_min}.Min.temp)`;
      td4.textContent = `${iterator.main.humidity} %`;
      td5.textContent = `${iterator.wind.speed} km/h`;

      let iconTd = document.createElement('img');
      iconTd.src = `http://openweathermap.org/img/w/${iterator.weather[0].icon}.png`;
      console.log()
      
      
      td.appendChild(iconTd)

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    }

    divTable.appendChild(h1);
    divTable.appendChild(p);
    table.appendChild(thead);
    table.appendChild(tbody);
    divTable.appendChild(table);
    body.appendChild(divTable);
  } catch (err) {
    console.log("Something went wrong");
  }
}

button.addEventListener("click", async function () {
  let result = await weatherFirst(input.value);
 
  div.innerHTML = "";
  divTable.innerHTML = "";
  displayElementHourlyData(result);
});

hourlyData.addEventListener("click", async function () {
  div.innerHTML = "";

  if (input.value) {
    table1(input.value);
  } else {
    table();
  }
});

statistics.addEventListener("click", async function () {
  divTable.innerHTML = "";
  div.innerHTML = "";
  let result = await weatherFirst(input.value);
  if (input.value) {
    displayElementHourlyData(result);
  } else {
    screen();
  }
});

async function weatherFirst(city) {
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=22ccdc6670a066836a0f584d3470320f`
    );
    let result = await res.json();
    console.log(result);

    return result;
  } catch (err) {
    console.log("Something went wrong");
  }
}

screen();

async function table1(data) {
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  h1.textContent = `Hourly Data of ${data}`;
  p.textContent = `Here you can read the hourly weather report for the following days. Keep in mind that it is not actually every hour, but every 3 - 5 hours`;

  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${data}&units=metric&APPID=22ccdc6670a066836a0f584d3470320f`
    );
    let result = await res.json();
    let list = result.list;
   
    let theadArray = [
      "",
      "Weather Discription",
      "Date and Time",
      "Max and Min Temp",
      "Humudity",
      "Wind Speed",
    ];
    

    for (const iterator of theadArray) {
      console.log(iterator);
      let th = document.createElement("th");
      th.textContent = `${iterator}`;
      thead.appendChild(th);
    }

    for (const iterator of list) {
      console.log(iterator)
      console.log(list)
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      
      let iconTd = document.createElement('img');
      iconTd.src = `http://openweathermap.org/img/w/${iterator.weather[0].icon}.png`;
      console.log()
      
      
      td.appendChild(iconTd)
      td1.textContent = `${iterator.weather[0].description}`;
      td2.textContent = `${iterator.dt_txt}`;
      td3.textContent = `${iterator.main.temp_max}.Max.temp, (${iterator.main.temp_min}.Min.temp)`;
      td4.textContent = `${iterator.main.humidity} %`;
      td5.textContent = `${iterator.wind.speed} km/h`;

      tr.appendChild(td);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);
    }
    
    divTable.appendChild(h1);
    divTable.appendChild(p);
    table.appendChild(thead);
    table.appendChild(tbody);
    divTable.appendChild(table);
    body.appendChild(divTable);
  } catch (err) {
    console.log("Something went wrong");
  }
}


async function icon (input) {
  try {
    let res = await fetch(
      `https://openweathermap.org/img/w/${input}.png`
    );
    let result = await res.json();
    console.log(result);

    return result;
  } catch (err) {
    console.log("Something went wrong");
  }
}

