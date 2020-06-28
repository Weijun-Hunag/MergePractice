/*
window.onload=function(){

};*/
/*http://tinyurl.com/uch-js-1082*/
$(document).ready(function(){
    $("input").click(function(){
        //alert("Hi");
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        // $("#random-pic").attr("src",pictures[randomChildNumber]);
        /*var first = 1;
        var last= 2;
        var li = 0;
        */
        if(randomChildNumber === 1){
            $("#chgicon").attr("src","https://imageproxy.icook.network/resize?height=600&nocrop=false&stripmeta=true&type=auto&url=http%3A%2F%2Ftokyo-kitchen.icook.tw.s3.amazonaws.com%2Fuploads%2Frecipe%2Fcover%2F156685%2F96a7420fa7879c00.jpg&width=800");
        }
         else if(randomChildNumber === 2){
            $("#chgicon").attr("src","https://foodpicks.tw/wp-content/uploads/2019-12-23_104621-696x440.png");
        }
         else 
         {
            $("#chgicon").attr("src","https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2019/12/11/realtime/7183211.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600");
        }
    });
});
