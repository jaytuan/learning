#### 1.需求背景：小程序列表优化
----
##### 需求详情：列表页渲染的时候，改变其中某个数据，也需要整个list去setData，在数据量大的时候渲染时间长，卡顿。
##### 解决思路：思考只改变了一个数据，那就只setData这一个变的数据就好了。
##### 解决方法：发现setData方法的形参是一个对象，操作列表时改变数组中某个对象的值，操作的下标是一个变量，所以考虑使用[]对象的中括号取属性方法，然后再去setData。
##### 效果：提高了列表的渲染速度，在数据量最多的上海南京车次列表，提高了至少一倍的渲染速度。
###### 例子：param对象设置两个属性。backupTrains是需要渲染整个对象数组，opIndex 是被操作对象的数组下标，hasSelected为控制显隐的属性，hasChoose是已经选中的所有车次
var param = {};<br />
var keyStr = "backupTrains["+opIndex+"].hasSelected";<br />
param[keyStr] = this.data.backupTrains[opIndex].hasSelected ;<br />
param.hasChooseTrains = hasChoose;<br />
this.setData(param);<br />

#### 2.需求：在手机端添加常旅信息缺失。
##### 排查：bindchange只有在输入框失焦的时候才会触发，在手机端用户还在输入的时候点击完成操作，bindchange会在完成操作之后执行，而在开发者工具上，点击完成操作可以先执行bindchange再执行完成操作方法。
##### 总结：小程序输入框最好不要用bindchange，可以使用bindinput代替解决，而且测试的时候最好还是以真实手机环境为准。。

#### 3.小程序wx.uploadFile    参考：http://bbs.csdn.net/topics/392047069
wx.uploadFile({<br />
               url:'https://dddddd', //指定服务器接口地址<br />
               filePath:res.tempFilePaths[0],<br />
               name:'image',<br />
               header: { "Content-Type": "multipart/form-data" },<br />
               //  formData: {<br />
               //    filePath:res.tempFilePaths[0]<br />
               //  }, // HTTP 请求中其他额外的 form data<br />
               success: function(res){<br />
                 var resData = res.data;<br />
                  
                 // success<br />
               },<br />
               complete: function() {<br />
                 // complete<br />
               }<br />
             })<br />
   后台接收代码，通过 HttpContext.Current.Request.Files[0] 接收<br />
public string PostFile()<br />
{<br />
              HttpPostedFile file = HttpContext.Current.Request.Files[0];<br />
}<br />
