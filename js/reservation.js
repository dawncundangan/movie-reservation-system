/*
const aladdin = {
    name: "Aladdin",
    badge: "PG",
    time: "2h 8mins",
    description: "A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
    director: "Guy Ritchie",
    writer:"John August (screenplay by), Guy Ritchie (screenplay by)",
    stars:"Will Smith, Mena Massoud, Naomi Scott",
    image:"imgs/aladdin.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_1:["Sept 4","Sept 5","Sept 6"],
    cinema_2:["Sept 7", "Sept 8"],
    cinema_3:["Sept 9", "Sept 10"],
    cinema_4:["Sept 11", "Sept 12"]

}
const tangled = {
    name: "Tangled",
    badge: "PG",
    time: "1h 40mins",
    description: "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
    director: "Nathan Greno, Byron Howard",
    writer:"Dan Fogelman (screenplay by), Jacob Grimm (based upon the fairy tale Rapunzel by) (as the Brothers Grimm)",
    stars:"Mandy Moore, Zachary Levi, Donna Murphy",
    image:"imgs/tangled.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_2:["Sept 4","Sept 5","Sept 6"],
    cinema_3:["Sept 7", "Sept 8"],
    cinema_4:["Sept 9", "Sept 10"],
    cinema_1:["Sept 11", "Sept 12"]
}
const antMan = {
    name: "Ant-Man",
    badge: "PG-13",
    time: "1h 57mins",
    description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world.",
    director: "Peyton Reed",
    writer:"Edgar Wright (screenplay by), Joe Cornish (screenplay by)",
    stars:"Paul Rudd, Michael Douglas, Corey Stoll",
    image:"imgs/ant-man.jfif",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_3:["Sept 4","Sept 5","Sept 6"],
    cinema_4:["Sept 7", "Sept 8"],
    cinema_1:["Sept 9", "Sept 10"],
    cinema_2:["Sept 11", "Sept 12"]
}
const infinitywar = {
    name: "Infinity War",
    badge: "PG-13",
    time: "2h 29mins",
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    director: "Anthony Russo, Joe Russo",
    writer:"Christopher Markus (screenplay by), Stephen McFeely (screenplay by)",
    stars:"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
    image:"imgs/infinity-war.jfif",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_4:["Sept 4","Sept 5","Sept 6"],
    cinema_1:["Sept 7", "Sept 8"],
    cinema_2:["Sept 9", "Sept 10"],
    cinema_3:["Sept 11", "Sept 12"]
}
const gog = {
   name: "Guardians of the Galaxy",
    badge: "PG-13",
    time: "2h 1mins",
    description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    director: "James Gunn",
    writer:"James Gunn, Nicole Perlman",
    stars:"Chris Pratt, Vin Diesel, Bradley Cooper",
    image:"imgs/guardians-of-the-galaxy.jfif",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_2:["Sept 13","Sept 14","Sept 15"],
    cinema_3:["Sept 16", "Sept 17"],
    cinema_4:["Sept 18", "Sept 19"],
    cinema_1:["Sept 20", "Sept 21"]
}
const captainmarvel = {
    name: "Captain Marvel",
    badge: "PG-13",
    time: "2h 3mins",
    description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
    director: "Anna Boden, Ryan Fleck",
    writer:"Anna Boden (screenplay by), Ryan Fleck (screenplay by)",
    stars:"Brie Larson, Samuel L. Jackson, Ben Mendelsohn",
    image:"imgs/captain-marvel.jfif",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_3:["Sept 13","Sept 14","Sept 15"],
    cinema_4:["Sept 16", "Sept 17"],
    cinema_1:["Sept 18", "Sept 19"],
    cinema_2:["Sept 20", "Sept 21"]
}
const TRON = {
    name: "TRON: Legacy",
    badge: "PG-13",
    time: "2h 5mins",
    description: "The son of a virtual world designer goes looking for his father and ends up inside the digital world that his father designed. He meets his father's corrupted creation and a unique ally who was born inside the digital world.",
    director: "Joseph Kosinski",
    writer:"Edward Kitsis (screenplay), Adam Horowitz (screenplay)",
    stars:"Jeff Bridges, Garrett Hedlund, Olivia Wilde",
    image:"imgs/tron.jfif",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_4:["Sept 13","Sept 14","Sept 15"],
    cinema_1:["Sept 16", "Sept 17"],
    cinema_2:["Sept 18", "Sept 19"],
    cinema_3:["Sept 20", "Sept 21"]
}
const TLK = {
    name: "The Lion King",
    badge: "PG",
    time: "1h 58mins",
    description: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
    director: "Jon Favreau",
    writer:"Jeff Nathanson (screenplay by), Brenda Chapman (story)",
    stars:"Donald Glover, Beyoncé, Seth Rogen",
    image:"imgs/lion-king.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3","cinema_4"],
    cinema_1:["Sept 13","Sept 14","Sept 15"],
    cinema_2:["Sept 16", "Sept 17"],
    cinema_3:["Sept 18", "Sept 19"],
    cinema_4:["Sept 20", "Sept 21"]
}
const moana = {
    name: "Moana",
    badge: "PG",
    time: "1h 57mins",
    description: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right.",
    director: "Ron Clements, John Musker",
    writer:"Jared Bush (screenplay by), Ron Clements (story by)",
    stars:"Auli'i Cravalho, Dwayne Johnson, Rachel House",
    image:"imgs/moana.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3"],
    cinema_1:["Sept 22"],
    cinema_2:["Sept 23"],
    cinema_3:["Sept 24"]
}
const awt = {
    name: "A Wrinkle in Time",
    badge: "PG",
    time: "1h 49mins",
    description: "After the disappearance of her scientist father, three peculiar beings send Meg, her brother, and her friend to space in order to find him.",
    director: "Ava DuVernay",
    writer:"Jennifer Lee (screenplay by), Jeff Stockwell (screenplay by)",
    stars:"Storm Reid, Oprah Winfrey, Reese Witherspoon",
    image:"imgs/wrinkle-in-time.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3"],
    cinema_2:["Sept 22"],
    cinema_3:["Sept 23"],
    cinema_1:["Sept 24"],
}
const enchanted = {
    name: "Enchanted",
    badge: "PG",
    time: "1h 47mins",
    description: "A young maiden in a land called Andalasia, who is prepared to be wed, is sent away to New York City by an evil queen, where she falls in love with a lawyer.",
    director: "Kevin Lima",
    writer:"Bill Kelly",
    stars:"Amy Adams, Susan Sarandon, James Marsden",
    image:"imgs/enchanted.jpg",
    cinemas:["cinema_1","cinema_2","cinema_3"],
    cinema_3:["Sept 22"],
    cinema_1:["Sept 23"],
    cinema_2:["Sept 24"]
}

const BAB = {
    name: "Beauty and the Beast",
    badge: "PG",
    time: "2h 10mins",
    description: "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
    director: "Bill Condon",
    writer:"Bill Kelly",
    stars:" Emma Watson, Dan Stevens, Luke Evans",
    image:"imgs/beauty-and-the-beast.jfif",
    cinemas:["cinema_4"],
    cinema_4:["Sept 22","Sept 23","Sept 24"]
}*/



if (typeof(Storage) !== "undefined") {
  // Store
/* localStorage.setItem('aladdin', JSON.stringify(aladdin));
 localStorage.setItem('tangled', JSON.stringify(tangled));
 localStorage.setItem('antMan', JSON.stringify(antMan));
 localStorage.setItem('infinitywar', JSON.stringify(infinitywar));
 localStorage.setItem('gog', JSON.stringify(gog));
 localStorage.setItem('captainmarvel', JSON.stringify(captainmarvel));
 localStorage.setItem('TRON', JSON.stringify(TRON));
 localStorage.setItem('TLK', JSON.stringify(TLK));
 localStorage.setItem('moana', JSON.stringify(moana));
 localStorage.setItem('awt', JSON.stringify(awt));
 localStorage.setItem('enchanted', JSON.stringify(enchanted));
 localStorage.setItem('BAB', JSON.stringify(BAB));*/
  // Retrieve
  /*console.log(JSON.parse(localStorage.getItem('aladdin')).description);*/
if(localStorage.getItem('reservations')==null){
  var a = [];
  a.push(JSON.parse(localStorage.getItem('reservations')));
  localStorage.setItem('reservations', JSON.stringify(a));
}
  
}
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
console.log(queryString);
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
  console.log(options);
  for(var i = 0; i < options.length; i++){
    console.log(options[i]);
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = "Cinema " + opt.slice(7);
    el.value = opt;
    selectCinema.appendChild(el);
    console.log(opt);
  }
  
  }
  
  function cinema_selected() {
    var sels = document.getElementById('datedate');
    for (i = sels.length - 1; i > 0; i--) {
      sels.remove(i);
    }
    if(cinema.value=="cinema"){
      console.log("haha");
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
      console.log(optionsdatedate[i]);
      var opt = optionsdatedate[i];
      var els = document.createElement("option");
      els.textContent = opt;
      els.value = opt;
      selectdate.appendChild(els);
      console.log(optionsdatedate[i]);
  }
    }
  }
  function date_selected() {
    console.log( date.value );
    if(date.value=="datedate"){
      console.log("haha1");
      time.disabled=true;
      time.value = "timetime";
      document.getElementById("reserveBtn").disabled=true;
    }
    else{
      time.disabled=false;
    }
  }
  function time_selected() {
    console.log( time.value );
    if(time.value=="timetime"){
      console.log("haha2");
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
    console.log(data);
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
      console.log(titled);
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
