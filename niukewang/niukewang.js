=====================================================================================================
// 1.题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
function indexOf(arr, item) {
    var j = 0 ;
    for(var i=0;i<arr.length;i++){
        if(arr[i] == item){
            return i;
            j++;
            break;
        }
    }
    if(j==0){
        return -1;
    }
}
function indexOf(arr, item) {
    if(Array.prototype.indexOf){
        return arr.indexOf(item);
    }else{
        for(var i = 0;i < arr.length;i++){
            if(arr[i] == item){
                return i;
            }
        }
    }
    return -1;
}
=====================================================================================================
// 2.题目描述
// 计算给定数组 arr 中所有元素的总和
// 输入描述:
// 数组中的元素均为 Number 类型
function sum(arr) {
	var sumCount = 0;
    for(var i=0;i<arr.length;i++){
        sumCount += arr[i];
    }
    return sumCount;
}
function sum(arr) {
    return arr.reduce(function(item,it){
        return item + it
    });
}
=====================================================================================================
// 3.题目描述
// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
function remove(arr, item) {
    var newArr = [];
	for(var i=0;i<arr.length;i++){
        if(arr[i] != item){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function remove(arr, item) {
    var result = arr.filter(function(it,index){
        return it != item
    })
    return result;
}
=====================================================================================================
// 4.题目描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
function removeWithoutCopy(arr, item) {
	for(var i = 0;i<arr.length;i++){
        if(arr[i] == item){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
=====================================================================================================
// 5.题目描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
	return arr.concat(item);
}
=====================================================================================================
// 6.题目描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
function truncate(arr) {
	var newArr = arr.slice(0);
    newArr.pop();
    return newArr;
}
=====================================================================================================
// 7.题目描述
// 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组

//利用concat拼接
function prepend(arr, item) {
    return [item].concat(arr);
}

//利用unshift函数从开头插入
function prepend(arr, item) {
	var newArr = arr.slice(0);
    newArr.unshift(item);
    return newArr;
}
=====================================================================================================
// 8.题目描述
// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组

//利用slice函数，从第一个开始截取
function curtail(arr) {
    return arr.slice(1);
}

//利用shift函数，弹出第一个元素
function curtail(arr) {
	var newArr = arr.slice(0);
    newArr.shift();
    return newArr;
}
=====================================================================================================
// 9.题目描述
// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
	
//利用concat函数
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

//利用push函数
function concat(arr1, arr2) {
    var newArr = arr1.slice(0);
    arr2.forEach(function(item){
         newArr.push(item);
    })

    return newArr;
}
=====================================================================================================
// 10.题目描述
// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组

//concat方法连接两个或多个数组
function insert(arr, item, index) {
	return arr.slice(0,index).concat(item,arr.slice(index));
}
//利用splice添加
function insert(arr, item, index) {
    var array = arr.slice(0);
    array.splice(index,0,item);
    return array;
}
=====================================================================================================
// 11.题目描述
// 统计数组 arr 中值等于 item 的元素出现的次数
function count(arr, item) {
    var times = 0;
    for(var i = 0;i < arr.length;i++){
         if(arr[i] === item){
            times++;
        }
    }
    
    return times;
}
=====================================================================================================
// 12.题目描述
// 找出数组 arr 中重复出现过的元素
//第一次
//嵌套循环，内循环只循环没有对比过的数据
function duplicates(arr) {
    var repeatElem = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if( arr[i] === arr[j] && (repeatElem.indexOf(arr[i]) == -1)){
                repeatElem.push(arr[i])
            }
        }
    }
    
    return repeatElem;
}

//改进   使用从前往后indexOf和从后往前lastIndexOf函数
function duplicates(arr) {
    var repeatElem = [];
    for(var i = 0; i < arr.length; i++){
        if( arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && (repeatElem.indexOf(arr[i]) == -1)){
            repeatElem.push(arr[i])
        }
    }
    
    return repeatElem;
}
=====================================================================================================
// 13.题目描述
// 为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组

//自己
function square(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    
    return newArr;
}

//大牛
function square(arr) {
    return arr.map(function(item,index,array){
        return item*item;
    })
}
=====================================================================================================
// 14.题目描述
// 在数组 arr 中，查找值与 item 相等的元素出现的所有位置
function findAllOccurrences(arr, target) {
    var indexArr = [];
    for(var i = 0; i < arr.length; i++){
        arr[i] === target && indexArr.push(i);    
    }
    return indexArr;
}
=====================================================================================================
// 15.题目描述
// 给定的 js 代码中存在全局变量，请修复
// function globals() {
//     myObject = {
//       name : 'Jory'
//     };

//     return myObject;
// }
function globals() {
    //加上var 声明即局部变量
    var myObject = {
      name : 'Jory'
    };

    return myObject;
}
=====================================================================================================
// 16.题目描述
// 请修复给定的 js 代码中，函数定义存在的问题
// 示例1
// 输入  true
// 输出  a
// function functions(flag) {
//     if (flag) {
//       function getValue() { return 'a'; }
//     } else {
//       function getValue() { return 'b'; }
//     }

//     return getValue();
// }

function functions(flag) {
    if (flag) {
     var getValue = function() { return 'a'; }
    } else {
     var getValue = function() { return 'b'; }
    }

    return getValue();
}
=====================================================================================================
// 17.题目描述
// 修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例
// function parse2Int(num) {
//     return parseInt(num);
// }
//按十进制转换，非数字忽略
function parse2Int(num) {
    return parseInt(num,10);
}
=====================================================================================================
// 18.题目描述
// 判断 val1 和 val2 是否完全等同	
function identity(val1, val2) {
    return val1 === val2;
}
=====================================================================================================
// 19.实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出	
function count(start, end) {
	console.log(start);
    var cou = setInterval(function(){
        if(start < end){
	        console.log(++start);
        }
    },100);
    return{
        cancel : function(){
        	clearInterval(cou);
    	}    
    }
    
}
=====================================================================================================
// 20.题目描述
// 实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
// 1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2、如果 num 能被 3 整除，返回字符串 fizz
// 3、如果 num 能被 5 整除，返回字符串 buzz
// 4、如果参数为空或者不是 Number 类型，返回 false
// 5、其余情况，返回参数 num
function fizzBuzz(num) {
    if(!!num && typeof(num) == "number"){
        if(num%3 == 0 && num%5 == 0){
            return 'fizzbuzz';
        }else if(num % 3 == 0){
            return 'fizz';
        }else if(num % 5 == 0){
            return 'buzz';
        }else{
            return num;
        }    
    }else{
        return false;
    }
}
// 21.题目描述
// 将数组 arr 中的元素作为调用函数 fn 的参数
=====================================================================================================
function argsAsArray(fn, arr) {
    return fn.apply(this,arr)
}
// 22.题目描述
// 将函数 fn 的执行上下文改为 obj 对象
=====================================================================================================
function speak(fn, obj) {
    return fn.apply(obj)
}
// 23.题目描述
// 实现函数 functionFunction，调用之后满足如下条件：
// 1、返回值为一个函数 f
// 2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
// 3、所有函数的参数数量为 1，且均为 String 类型
=====================================================================================================
function functionFunction(str) {
    return function(str2){
        return str + ', ' + str2
    }
}
