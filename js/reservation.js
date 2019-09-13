
if (typeof(Storage) !== "undefined") {
  if(localStorage.getItem('reservations')==null){
    var a = [];
    a.push(JSON.parse(localStorage.getItem('reservations')));
    localStorage.setItem('reservations', JSON.stringify(a));
  } 
}
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
if(queryString!=''){ 
  $("#reserve1").modal();
  showDetails(queryString);
}
  

  var date = document.getElementById("datedate");
  var time = document.getElementById("timetime");
  var cinema = document.getElementById('cinema');
  cinema_selected();

  function resetInput(){
    cinema.value = "cinema";
    date.value = "datedate";
    time.value = "timetime";
    cinema_selected();
    window.location.href = "reservations.html";
  }
  function showDetails(index) {
    var sel = document.getElementById('cinema');
    for (i = sel.length - 1; i > 0; i--) {
      sel.remove(i);
    }
      document.getElementById("title_movie").innerHTML =  JSON.parse(localStorage.getItem("movies"))[index].name;
      document.getElementById("badge_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].badge;
      document.getElementById("date_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].time;
      document.getElementById("description_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].description;
      document.getElementById("director_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].director;
      document.getElementById("writer_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].writer;
      document.getElementById("stars_movie").innerHTML=JSON.parse(localStorage.getItem("movies"))[index].stars;
      document.getElementById("image_movie").src = JSON.parse(localStorage.getItem("movies"))[index].image;
  var selectCinema = document.getElementById("cinema");
  var options = JSON.parse(localStorage.getItem("movies"))[index].cinemas;
  for(var i = 0; i < options.length; i++){
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = "Cinema " + opt.slice(7);
    el.value = opt;
    selectCinema.appendChild(el);
  }
  
  }
  
  function cinema_selected() {
    var sels = document.getElementById('datedate');
    for (i = sels.length - 1; i > 0; i--) {
      sels.remove(i);
    }
    if(cinema.value=="cinema"){
      time.disabled=true;
      time.value = "timetime"; 
      date.disabled=true;
      date.value = "datedate";
      document.getElementById("reserveBtn").disabled=true;
    }
    else{
      time.disabled=true;
      time.value = "timetime"; 
      date.disabled=false;
      var titled= document.getElementById("title_movie").innerHTML;
     
      if(titled=="Aladdin"){
        titled=0;
      }
      else if (titled=="Tangled"){
        titled=1;
      }
      else if (titled=="Ant-Man"){
        titled=2;
      }
      else if (titled=="Infinity War"){
        titled=3;
      }
      else if (titled=="Guardians of the Galaxy"){
        titled=4;
      }
      else if (titled=="Captain Marvel"){
        titled=5;
      }
      else if (titled=="TRON: Legacy"){
        titled=6;
      }
      else if (titled=="The Lion King"){
        titled=7;
      }
      else if (titled=="Moana"){
        titled=8;
      }
      else if (titled=="A Wrinkle in Time"){
        titled=9;
      }
      else if (titled=="Enchanted"){
        titled=10;
      }
      else if (titled=="Beauty and the Beast"){
        titled=11;
      }
      var selectedCinema = document.getElementById("cinema").value;
      var selectdate = document.getElementById("datedate");
      var optionsdatedate = JSON.parse(localStorage.getItem("movies"))[titled][selectedCinema];
      for(var i = 0; i < optionsdatedate.length; i++){
      var opt = optionsdatedate[i];
      var els = document.createElement("option");
      els.textContent = opt;
      els.value = opt;
      selectdate.appendChild(els);
  }
    }
  }
  function date_selected() {
    if(date.value=="datedate"){
      time.disabled=true;
      time.value = "timetime";
      document.getElementById("reserveBtn").disabled=true;
    }
    else{
      time.disabled=false;
    }
  }
  function time_selected() {
    if(time.value=="timetime"){
      document.getElementById("reserveBtn").disabled=true;
    }
    else{
      document.getElementById("reserveBtn").disabled=false;
    }
  }
  function getData() {
    return JSON.parse(localStorage.getItem('reservations') || "[]");
}
createTable();
function createTable(){
  const data = getData();
  if(data!=null){
    var $table  =  $('<table class="table table-striped table-dark table-sm compact rounded"><thead><tr><th scope="col">Movie</th><th scope="col">Cinema</th><th scope="col">Date</th><th scope="col">Time</th><th scope="col">Seats</th><th scope="col">Amount</th><th scope="col">Action</th></tr></thead></table>');
    for(var i=1;i<data.length;i++)
    {
    var $tr =  $('<tr></tr>');
    var $td1 =  $('<td></td>');
    var $td2 =  $('<td></td>');
    var $td3 =  $('<td></td>');
    var $td4 =  $('<td></td>');
    var $td5 =  $('<td class="text-right"></td>');
    var $td6 =  $('<td class="text-right"></td>');
    var $td7 =  $('<td class="text-right"><button type="button" class="btn btn-default button2" onclick="deleteData(this)">Cancel</button></td>');
    $td1.append(data[i].title);
    $td2.append("Cinema " + data[i].cinema.slice(7));
    $td3.append(data[i].date);
    $td4.append(data[i].time);
    $td5.append(data[i].seat.length);
    $td6.append(data[i].amountDue);
    $tr.append($td1);
    $tr.append($td2);
    $tr.append($td3);
    $tr.append($td4);
    $tr.append($td5);
    $tr.append($td6);
    $tr.append($td7);
    $table.append($tr);
    }
    $('div#tabletable').empty().append($table);
  }
}
  function deleteData(element){;
    reservations=JSON.parse(localStorage.getItem('reservations'));
    reservations.splice(element.parentNode.parentNode.rowIndex, 1);
    localStorage.setItem('reservations',JSON.stringify(reservations));
    createTable();   
  }  
  function addReservations(){
      var titled= document.getElementById("title_movie").innerHTML;
      var selectedCinema = document.getElementById("cinema").value;
      var selecteddate = document.getElementById("datedate").value;
      var selectedtime = document.getElementById("timetime").value;
      if(titled=="Aladdin"){
        titled=0;
      }
      else if (titled=="Tangled"){
        titled=1;
      }
      else if (titled=="Ant-Man"){
        titled=2;
      }
      else if (titled=="Infinity War"){
        titled=3;
      }
      else if (titled=="Guardians of the Galaxy"){
        titled=4;
      }
      else if (titled=="Captain Marvel"){
        titled=5;
      }
      else if (titled=="TRON: Legacy"){
        titled=6;
      }
      else if (titled=="The Lion King"){
        titled=7;
      }
      else if (titled=="Moana"){
        titled=8;
      }
      else if (titled=="A Wrinkle in Time"){
        titled=9;
      }
      else if (titled=="Enchanted"){
        titled=10;
      }
      else if (titled=="Beauty and the Beast"){
        titled=11;
      }
      var title=titled;
      var cinemas=selectedCinema;
      var date=selecteddate;
      var time=selectedtime;
      var queryString = "?" + title + "&" + cinemas + "&" + date + "&" + time;
      window.location.href = "seatplan.html" + queryString;
      
  }
document.getElementById('cinema').addEventListener('click', cinema_selected);
document.getElementById('datedate').addEventListener('click', date_selected);
document.getElementById('timetime').addEventListener('click', time_selected);
