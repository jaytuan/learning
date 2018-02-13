"use strict";

//level
var map = [];
var level ={
    level1:[
        // 0 for empty;
        // 1 for wall;
        // 2 for box;
        // 3 for person;
        // 4 for goal space;
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,0],
        [0,0,0,1,4,1,0,0,0,0],
        [0,0,0,1,0,1,1,1,1,0],
        [0,1,1,1,2,0,2,4,1,0],
        [0,1,4,0,2,3,1,1,1,0],
        [0,1,1,1,1,2,1,0,0,0],
        [0,0,0,0,1,4,1,0,0,0],
        [0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ],
    level2:[
        [0,0,0,0,0,0,0,0,0,0],
        [1,1,1,1,1,0,0,0,0,0],
        [1,0,0,0,1,0,0,0,0,0],
        [1,0,2,2,1,0,1,1,1,0],
        [1,3,2,0,1,0,1,4,1,0],
        [1,1,1,0,1,1,1,4,1,0],
        [0,1,1,0,0,0,0,4,1,0],
        [0,1,0,0,0,1,0,0,1,0],
        [0,1,0,0,0,1,1,1,1,0],
        [0,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]
}
// map.push(level2);
map = deepCopy(level.level1); //默认第一关
var gameDefine= {
    person:{
        x:0,
        y:0,
        id:"person"
    },
    map:0,
    pointNum:0,
    box:{
        x:50,
        y:50
    },
    match:0,
    //分别获取人、箱子、重点的坐标
    endPoints: getPointsLoc(4),
    boxPoints: getPointsLoc(2),
    humanPoints: getPointsLoc(3),
    currentLevel: 1,//当前关卡
    totalLevel: getTotalLevel() //总关数，只执行一次
};

function createMap(){
    gameDefine.pointNum = 0;
    var table=document.getElementById("table");
    table.innerHTML="";
    //校验位置

    for(var i=0; i<map.length; i++){
        var row=document.createElement("tr");
        // console.log(i);
        table.appendChild(row);
        for(var j=0; j<map[i].length; j++){
            var cell=document.createElement("td");
            var picture=document.createElement("img");
            cell.appendChild(picture);
            row.appendChild(cell);
            cell.setAttribute("name",i+"_"+j);
            picture.className="picture";

            switch(map[i][j]){
                case 0:
                    picture.src="0.jpg";
                    break;

                case 1:
                    picture.src="1.jpg";
                    break;

                case 2:
                    picture.src="2.jpg";
                    break;

                case 3:
                    picture.src="3.png";
                    gameDefine.person.x=j;
                    gameDefine.person.y=i;
                    break;

                case 4:
                    picture.setAttribute("endPoint","1");
                    picture.src="4.png";
                    gameDefine.pointNum++;
                    break;
            }
        }
    }
}
//检验如果叉号上面有盒子或者人，显示盒子或者人，否则显示叉号
function check(){
    gameDefine.boxPoints = getPointsLoc(2);
    gameDefine.humanPoints = getPointsLoc(3);
    var boxOnEnd = 0;//用于统计重点上箱子数，只有箱子数等于终点总数时提示成功
    for(var i = 0; i < gameDefine.endPoints.length; i++){
        var count = 0;
        for(var j = 0; j < gameDefine.boxPoints.length; j++){
            if(gameDefine.endPoints[i].x == gameDefine.boxPoints[j].x && gameDefine.endPoints[i].y == gameDefine.boxPoints[j].y){
                count ++;
                boxOnEnd++;
                map[gameDefine.endPoints[i].y][gameDefine.endPoints[i].x] = 2;
                gameDefine.endPoints[i].isShow = false;
            }
        }
        if(gameDefine.endPoints[i].x == gameDefine.humanPoints[0].x && gameDefine.endPoints[i].y == gameDefine.humanPoints[0].y){
            count++;
            map[gameDefine.endPoints[i].y][gameDefine.endPoints[i].x] = 3;
            gameDefine.endPoints[i].isShow = false;
        }
        if(count == 0){
            //表示该终点上没有人也没有箱子
            gameDefine.endPoints[i].isShow = true;

        }
    }
    for(var i = 0; i < gameDefine.endPoints.length; i++){
        if(gameDefine.endPoints[i].isShow){
             map[gameDefine.endPoints[i].y][gameDefine.endPoints[i].x] = 4;
        }
    } 
    setTimeout(function(){
        if(boxOnEnd == gameDefine.endPoints.length){
            if(gameDefine.currentLevel >= gameDefine.totalLevel){
            	 alert('恭喜您通关！');
            }else{
            	 alert('恭喜过关！开始下一关');
            	 var selectDom = document.getElementById('level');
            	 selectDom.value = 'level' + (gameDefine.currentLevel*1+1);
    			 gameDefine.currentLevel = gameDefine.currentLevel*1+1;
            	 changeLevel();
            }
        }
    },100);
}
function changeLevel(){
    var selectDom = document.getElementById('level');
    gameDefine.currentLevel = selectDom.value.substr(5,1); 
    map = deepCopy(level[selectDom.value]);
    createMap();
    selectDom.blur();
    gameDefine.endPoints = getPointsLoc(4);
    gameDefine.boxPoints = getPointsLoc(2);
    gameDefine.humanPoints = getPointsLoc(3);
}
function move(){
    createMap();

    document.onkeydown=function keyCode(event){

        var code=event.keyCode;
        var a=gameDefine.person.x;
        var b=gameDefine.person.y;

        switch (code){

            case 37:
                switch(map[b][a-1]){
                    case 0:
                        map[b][a-1]=3;
                        map[b][a]=0;
                        break;
                    case 1:
                        map[b][a]=3;
                        break;
                    case 2:
                        if(map[b][a-2] == 1||map[b][a-2]==2){
                            map[b][a-1]=2;
                            map[b][a]=3;
                            break;
                        }
                        else{
                            map[b][a-1]=3;
                            map[b][a]=0;
                            map[b][a-2]=2;
                            break;
                        }
                    case 4:
                        map[b][a-1]=3;
                        map[b][a]=0;
                        break;
                }
                check();
                createMap();
                break;

            case 38:
                switch(map[b-1][a]){
                    case 0:
                        map[b-1][a]=3;
                        map[b][a]=0;
                        break;
                    case 1:
                        map[b][a]=3;
                        break;
                    case 2:
                        if(map[b-2][a] == 1||map[b-2][a]==2){
                            map[b-1][a]=2;
                            map[b][a]=3;
                            break;
                        }
                        else{
                            map[b-1][a]=3;
                            map[b][a]=0;
                            map[b-2][a]=2;
                            break;
                        }
                    case 4:
                        map[b-1][a]=3;
                        map[b][a]=0;
                        break;
                }
                check();
                createMap();
                break;

            case 39:
                switch(map[b][a+1]){
                    case 0:
                        map[b][a+1]=3;
                        map[b][a]=0;
                        break;
                    case 1:
                        map[b][a]=3;
                        break;
                    case 2:
                        if(map[b][a+2] == 1||map[b][a+2]==2){
                            map[b][a+1]=2;
                            map[b][a]=3;
                            break;
                        }
                        else{
                            map[b][a+1]=3;
                            map[b][a]=0;
                            map[b][a+2]=2;
                            break;
                        }
                    case 4:
                        map[b][a+1]=3;
                        map[b][a]=0;
                        break;
                }
                check();
                createMap();
                break;

            case 40:
                switch(map[b+1][a]){
                    case 0:
                        map[b+1][a]=3;
                        map[b][a]=0;
                        break;
                    case 1:
                        map[b][a]=3;
                        break;
                    case 2:
                        if(map[b+2][a] == 1||map[b+2][a] == 2){
                            map[b+1][a]=2;
                            map[b][a]=3;
                            break;
                        }
                        else{
                            map[b+1][a]=3;
                            map[b][a]=0;
                            map[b+2][a]=2;
                            break;
                        }
                    case 4:
                        map[b+1][a]=3;
                        map[b][a]=0;
                        break;
                }
                check();
                createMap();
                break;
        }
    }
}
function deepCopy(arr){
    var newArray = [];
    for(var i=0;i<arr.length;i++){
        newArray.push([].concat(arr[i]));
    }
    return newArray;
}
//type为数字，与上面1,2,3,4对应，获取该类别的坐标
function getPointsLoc(type){
    var result = [];
    var obj = {};
    for(var i=0;i<map.length;i++){
        for(var j=0;j<map[i].length;j++){
            if(map[i][j] == type){
                obj = {x:j,y:i}; 
                if(type==4){
                    obj.isShow = true;
                }
                result.push(obj);
            }
        }
    }
    return result;
}
function getTotalLevel(){
	var count = 0;
	for(var key in level){
		count ++;
	}
	return count;
}


