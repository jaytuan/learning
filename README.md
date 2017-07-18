GIT命令行使用
====
一.克隆远程版本库
----
$ git clone https://github.com/jaytuan/learning.git

二.查看本项目的remoteName
----
$ git remote -v
<br/>
\>\>origin https://github.com/jaytuan/learning.git (fetch)
<br/>
\>\>origin https://github.com/jaytuan/learning.git (push)

三.提交当前工作空间的修改内容
----
$ git commit -a   
<br/>
<p>弹出编辑器，需要写出提交的内容,一般来说写什么都可以，但是对于工作学习方便来说，最好写明本次提交修改了哪些功能，方便以后查找。
<br/>
写完提交信息以后，有的按ESC会弹出询问是否保存，点击是会直接退出编辑器，进行下一步。有的需要先后按ESC,Z,Z键保存退出编辑器。</p>
<br/>
四.从远程拉取代码
----
<br/>
Q：git merge和rebase的区别?<br/>
假设现在有两个分支 A B
1. 在B分支上执行 git merge A 后 A就被合到B上了
2. 在B分支上执行 git rebase A 后，效果与merge是一样的，但是 A就没有了，两个分支就合在一起了。
