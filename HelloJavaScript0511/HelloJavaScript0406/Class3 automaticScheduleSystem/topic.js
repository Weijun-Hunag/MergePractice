let topicsArray =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "環境性",
    "重複性",
    "監聽事件",
    "條件判斷",
    "迴圈"
];

let startDate = new Date();
function setMonthAndDay(setMonth,startDay){
    startDate.setMonth(setMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
}
setMonthAndDay(4,1);


