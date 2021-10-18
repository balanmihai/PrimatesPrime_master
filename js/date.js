// function date(){
//   var today=new Date()
//   var dd=today.getDate()
//   var mm=today.getMonth()+1
//   var yy=today.getFullYear()
//   if(dd<10) dd='0'+dd;
//   if(mm<10) mm='0'+mm;
  
//   return (dd+" "+"February"+" "+yy);  
//   }

function displayDate(){
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var date = currentDate.getDate();
  var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var month = months[currentDate.getMonth()];
  if (date<10){
    date = "0" + date;
  }
  return (date +" "+ month +" "+ year);
}

document.getElementById("date").innerHTML = displayDate();