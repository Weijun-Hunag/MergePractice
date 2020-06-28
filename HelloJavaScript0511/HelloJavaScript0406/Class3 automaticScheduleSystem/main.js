/*
window.onload=function(){

};*/
/*http://tinyurl.com/uch-js-1082*/
$(document).ready(function(){
 $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
 
 let topicCount = topicsArray.length;
 let onDayMilliseconds = 24*60*60*1000;
 for(let x=0;x<topicCount;x++)
 {

   //  $("#courseTable").append("<tr>");
   //  $("#courseTable").append("<td>"+(x+1)+"</td>");
   //  $("#courseTable").append("<td>"+startDate+"</td>");
   //  $("#courseTable").append("<td>"+topicsArray[x]+"</td>");
   //  $("#courseTable").append("</tr>");
   let thisDate = new Date(startDate.getTime()+7*x*onDayMilliseconds);
   $("#courseTable").append(
      "<tr>"+
      "<td>"+(x+1) + "</td>"+
      "<td>"+thisDate.toLocaleDateString().slice(5)  +"</td>"+
      "<td>"+topicsArray[x]+"</td>"+
      "</tr>"
   );
 }
 $("#inputDate").change(function(){
    // console.log($(this).val());
    // console.log(typeof($(this).val()));
    let inputDate = $(this).val();
    let splitText = inputDate.split("-");
    console.log(splitText);
   setMonthAndDay(splitText[1],splitText[2]);
   setTable();
 });

//  let topicCount = topicsArray.length;
//  for(let x=0; x<topicCount; x++)
//     $("#courseTable").append(
//         "<tr>"+
//         "<td>"+(x+1) +"</td>"+
//         "<td>預計日期</td>"+
//         "<td>"+topicsArray[x]+"</td>"+
//         "</tr>"
//     );
});
function setTable(){
  $("#courseTable").empty();
  $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
 
  let topicCount = topicsArray.length;
  let onDayMilliseconds = 24*60*60*1000;
  for(let x=0;x<topicCount;x++)
  {
 
    //  $("#courseTable").append("<tr>");
    //  $("#courseTable").append("<td>"+(x+1)+"</td>");
    //  $("#courseTable").append("<td>"+startDate+"</td>");
    //  $("#courseTable").append("<td>"+topicsArray[x]+"</td>");
    //  $("#courseTable").append("</tr>");
    let thisDate = new Date(startDate.getTime()+7*x*onDayMilliseconds);
    $("#courseTable").append(
       "<tr>"+
       "<td>"+(x+1) + "</td>"+
       "<td>"+thisDate.toLocaleDateString().slice(5)  +"</td>"+
       "<td>"+topicsArray[x]+"</td>"+
       "</tr>"
    );
  }
}
