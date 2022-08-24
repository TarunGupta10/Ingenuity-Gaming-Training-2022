// 1.  XHR

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getApiData(url) {
  console.log("we are good to go");

  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
      console.log(request);

      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject("data not fetched");
      }
    };
  });
}

getApiData(API_URL)
  .then((val) => {
    // console.log(JSON.parse(val));
    displayData(JSON.parse(val));
  })
  .catch((err) => console.log("Error " + err));

// getApiData(API_URL)

function displayData(serverData) {
//   console.log(serverData);
for(var user of serverData){
    let newtr = document.createElement('tr')

    let newtd1 = document.createElement('td')
    let newtd2 = document.createElement('td')
    let newtd3 = document.createElement('td')
    let newtd4 = document.createElement('td')


    newtd1.innerText = "" + user.id
    newtd2.innerText = "" + user.name
    newtd3.innerText = "" + user.email
    newtd4.innerText = "" + user.phone
    // newtd1.innerText = `${user.id}`
    // newtd2.innerText = `${user.name}`
    // newtd3.innerText = `${user.email}`
    // newtd4.innerText = `${user.phone}`

    newtr.appendChild(newtd1)
    newtr.appendChild(newtd2)
    newtr.appendChild(newtd3)
    newtr.appendChild(newtd4)

    document.getElementById("myTable").appendChild(newtr)
}
}
