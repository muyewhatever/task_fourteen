/**
 * Created by Owner on 3/14/2016.
 */

var aqiData = [
    ["北京", 90],
    ["上海", 50],
    ["福州", 10],
    ["广州", 50],
    ["成都", 90],
    ["西安", 100]
];

(function () {

    /*
     在注释下方编写代码
     遍历读取aqiData中各个城市的数据
     将空气质量指数大于60的城市显示到aqi-list的列表中
     */
    var i,text='',box=document.getElementById("aqi-list");
    aqiData.sort(function(a,b){
        return b[1]-a[1];
    });

    for(i=0;i<aqiData.length;i++) {
        if(aqiData[i][1]>60) {
            text+='<li>第'+(i+1)+'名：'+aqiData[i][0]+' , '+aqiData[i][1]+'</li>';
        }
    }
    box.innerHTML=text;
})();
