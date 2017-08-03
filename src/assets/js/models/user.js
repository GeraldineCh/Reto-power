var config = {
  apiKey: "AIzaSyC0kgAEyPWZV-m-GRSyFNHAI9Odtg3OrEs",
  authDomain: "retopower-265a9.firebaseapp.com",
  databaseURL: "https://retopower-265a9.firebaseio.com",
  projectId: "retopower-265a9",
  storageBucket: "",
  messagingSenderId: "456825737252"
};
firebase.initializeApp(config);


const getUsers = () => {
    return firebase.database().ref('/users').once('value').then((snapshot) => {
          return snapshot.val();
    });
};
const CargarData = () => {
  return new Promise((resolve,reject) => {
    resolve(getUsers());
  });
};

const generarCsv = (json,encabezado,btn,archivo) =>{
  var date = new Date();
  var fecha = date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()+"_"+date.getHours()+":"+date.getMinutes();
  var json1 = [];
  $.each(json, function (key, data) {
    json1.push(data);
})
  json2csv({ data: json1, fields: encabezado}, function(err, csv) {
    if (err) console.log(err);
    var array = "data:text/csv;charset=utf-8,";
    array += csv.split(',').join(";");
    var encodedUri = encodeURI(array);
    btn.attr("href", encodedUri);
    btn.attr("download", archivo+"/"+fecha+".csv");
    btn.click();
  });
}
const newUser = (dni,data) => {
  firebase.database().ref('users/' + dni).set(data);
}
