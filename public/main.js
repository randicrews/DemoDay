// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

const venues = {
  chicago: {
    center: { lat: 41.878, lng: -87.629 },
    complaints: 8,
  },
  newyork: {
    center: { lat: 40.714, lng: -74.005 },
    complaints: 1,
  },
  losangeles: {
    center: { lat: 34.052, lng: -118.243 },
    complaints: 4,
  },
  vancouver: {
    center: { lat: 49.25, lng: -123.1 },
    complaints: 6,
  },
};



// initMap();
function initMap(){
  var options = { 
    zoom: 8,
    center:{lat:42.3601, lng:-71.0589}
  }
  var map = new
  google.maps.Map(document.getElementById('map'), options)

  var marker = new google.maps.Marker({
    position:{lat: 42.4668, lng: -70.9087},
    map: map
  })
  for (const spot in venues) {
  var circle = new google.maps.Circle({
      strokeOpacity: 0,
      strokeWeight: 2,
      fillColor: `rgb(${venues[spot].complaints*100 + 10}, 0, 0)`,
      fillOpaspot: 0.35,
      map,
      center: venues[spot].center,
      radius: Math.sqrt(venues[spot].complaints) * 100000
  })
}
  
}
var heart = document.getElementsByClassName("fa-heart");
// document.getElementById('addMov').addEventListener('click', addMov)
// document.getElementById('findMov').addEventListener('click', findMov)

function findMov(){
  const title = document.getElementById('movieSearch').value
  fetch(`/movie/${title}`, {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'title': title,
    })
  })

}


Array.from(heart).forEach(function(element) {
      element.addEventListener('click', function(){
        const title = this.parentNode.parentNode.childNodes[3].innerText
        const over = this.parentNode.parentNode.childNodes[4].innerText

        // const heart = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('/mine', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'title': title,
            'over': over
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// function findMov(){
//   const mov = document.getElementById('title').value
//   const url = `/titles/${mov}`
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
    // let queens = []
    // queens = data
    // list.innerHTML = ''
    // let uniqueQueens = new Set()
    // console.log(data, 'data')
    // document.getElementById('seasonal').classList.remove('sneaky')
    // for (let queen of queens){
    //   let i = queen.seasons.indexOf(+season)
    //   console.log(season)
    //   if (!uniqueQueens.has(queen.dragName)){
    //   let li = document.createElement('li')
    //   li.appendChild(document.createTextNode(`${queen.dragName} ${queen.outcomes[i]}`))
    //   list.appendChild(li)
    //   uniqueQueens.add(queen.dragName)
  //   }
  // }
//   })
// }

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const title = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('titles', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'title': title
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
