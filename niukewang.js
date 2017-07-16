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
// 5.题目描述
// 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
function append(arr, item) {
	var a = arr.concat(item);
    return a;
}
// 6.题目描述
// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
