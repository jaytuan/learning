// 1.let命令

// es6新增let命令，用来声明变量，用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效
	{
		let a = 10;
		var b = 1;
	}
	console.log(a); // Uncaught ReferenceError: a is not defined
	console.log(b); // 1

==================================================================================================
    // for循环测试let
	for(let a = 0;a < 5;a++){
		console.log(a); //0 1 2 3 4
	}
	console.log(a); //Uncaught ReferenceError: a is not defined
	
	// for循环测试 var
	for(var a = 0;a < 5;a++){
		console.log(a); //0 1 2 3 4
	}
		console.log(a); //5
	/*for循环的计数器，就很合适使用let命令。
	  上面代码中，计数器i只在for循环体内有效，在循环体外引用就会报错。*/

==================================================================================================
	//for循环是用var,则最后输出10，因为i是用var声明的，对全局范围内有效。console.log(i);中i指向全局
	var a = [];
	for (var i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 10  
--------------------------------------------------------	
	//如果使用let，i只在块级作用域有效
	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 6
--------------------------------------------------------	
	//输出10次100；表示函数内部的变量i和循环变量i不在同一个作用域，各有单独的作用域
	for (let i = 0; i < 10; i++) {
	    let i = 100;
	    console.log(i);
	}
==================================================================================================
//ES6不存在变量提升

	//var声明会发生‘变量提升’现象  let一定要在声明之后是用
	// var 的情况
	console.log(foo); // 输出undefined
	var foo = 2;

	// let 的情况
	console.log(bar); // 报错ReferenceError
	let bar = 2;
==================================================================================================
//暂时性死区（temporal dead zone，简称TDZ）
//只要块级作用域内存在let命令，它声明的变量就绑定了这个区域，不再受外部影响
	var tmp = 123;
	if(true){
	tmp = 'abc';// ReferenceError
	let tmp;
	}
//上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定了这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
//ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就行成了封闭作用域，凡是在声明之前使用这些变量，就会报错。
	if(true){
		// TDZ开始
		tmp = 'abc';      //ReferenceError报错
		console.log(tmp); //ReferenceError报错

		let tmp; // TDZ结束
		console.log(tmp); //undefined

		tmp = 123;
		console.log(tmp); //123
	}
//暂时性死区的本质：只要一进入当前作用域，所要使用的变量就已经存在了，但是不可获取，只有等到声明变量的那一行代码出现，才可以获取和使用该变量。
==================================================================================================
//不允许重复声明

//let不允许在相同作用域内，重复声明同一个变量
	// 报错
	function () {
	  let a = 10;
	  var a = 1;
	}

	// 报错
	function () {
	  let a = 10;
	  let a = 1;
	}
	//不能在函数内部重新声明参数，调用方法时报错
	function func(arg) {
	  let arg; // 报错
	}

	function func(arg) {
	  {
	    let arg; // 不报错
	  }
	}
	//函数内部的代码块可以