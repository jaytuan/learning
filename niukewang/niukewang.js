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
	var a = arr.concat(item);
    return a;
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

//改进   使用前从前往后indexOf和从后往前lastIndexOf函数
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