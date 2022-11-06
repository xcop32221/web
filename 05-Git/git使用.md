#  Git

### DAY1:

```js
分布式VCS
特点：服务器客户端模式
1.服务器保存文件的所有更新版本
2.客户端是服务器的完整备份

#Git
开源分布式版本控制系统
特点：
1.直接记录快照而非差异比较
2.近乎所有操作都是本地执行

//Git中的三个区域
1.工作区：处理工作时的区域//红色
2.暂存区：临时存放区域，等待提交//绿色
3.Git仓库：最终存放位置

//git操作

#配置用户信息
1.git config --global user.name/email

#查看配置信息
2.git config --list --gloabal

#清除某个设置
3.git config --unset --global user.name/email

#建立git仓库（有项目文件夹，进入文件夹-cd指令）
//直接加个git仓库名可以自动创建文件夹（直接创建新的项目文件夹）
4.git init

#拉取本身存在的项目，拉取后默认就会有一个仓库
5.git clone 地址


#查看状态
//红色在工作区，绿色在暂存区
//文件状态：
1.A表示新跟踪的文件纳入暂存区--add 
2.M表示刚修改过的文件在工作区--modify
3.U表示未纳入git的文件-untracked//？？表示文件未跟踪
4.deleted 表示删除过的文件/在暂存区

6.git status
//git config --global core.quotepath false 解决中文乱码
git status --short/s

#添加文件跟踪纳入git管理（默认放入暂存区)--A状态
7.git add 文件 //添加单个文件
git add. //将所有未跟踪的文件


#提交更新(commit)，将暂存区的代码提交到仓库-这个状态会被永久的保存
//提交更新之前需要把所有的文件放入暂存区
//提交完之后文件变成未修改的状态
8.git commit -m '描述'
//语法上不用add，直接到仓库
//未跟踪的文件不能使用该简写，已经跟踪提交过才行
git commit -am '描述'

#查看提交信息
9.git log//返回哈希值，通过这个哈希值去回档
git log --oneline //精简模式
输入q退出log模式

#回退到指定版本
//读档，该状态后面的记录无法访问了
10.git reset --hard commitId
//解决读档后之后的记录没有了
//查看所有的记录
git reflog
//reset还可以把暂存区的文件移出到工作区
git reset HEAD 文件名 //单个文件
git reset HEAD .	//多个文件

#撤销对文件的修改
讲该次修改的文件，还原成git仓库里的文件
11.git checkout -- 文件名称
//直接消失，不做记录，替换文件

#从Git仓库移除文件
//从当前版本删除
//从git仓库和工作区同时移除
12.git rm -f 文件
//从git仓库中的文件移到工作区
//如果没有被修改，添加跟踪时会直接放入Git仓库
git rm --cached 文件
git rm -r --cached . 将仓库中的所有文件拿出来

#文件不纳入管理
//未跟踪的文件才能被不纳入管理
1.仓库目录下创建.gitignore文件
2.在该文件下写入不需要管理的文件名/可以批量：'文件夹/*后缀名'
3.再跟踪提交.gitignore文件


//文件状态
//未纳入管理
1.未跟踪:untracked
//纳入管理
2.未修改:unmodified
3.已修改:modifeid
4.已暂存:staged

#流程：
//Git仓库里的文件做出修改，该文件状态变为红色的M，跟踪后会变成绿色的M，再提交后结束本次修改,仓库和工作区保持一致(unmodified)
//新建文件，该文件状态变为未跟踪，跟踪后会变成绿色的A，再提交后结束本次修改,仓库和工作区保持一致(unmodified)
//从Git仓库中删除文件到工作区，文件状态变为两个：1个未跟踪，1个deleted，再提交文件从git库中删除
```

![微信图片_20221024165555](D:\WEB\笔记img\微信图片_20221024165555.png)

### DAY2:

```js
//git操作
修改最近一次提交说明
git commmit --amend -m '描述'

//常见的命令
cd ：进入文件目录 '.'表示当前 '..'表示上层 '~/'表示用户这个文件夹
cat 文件名字 ：查看文件内容
mkdir 文件夹 ：创建文件夹
touch 文件   ：创建文件
ll ：列出文件信息
ls ：列出文件
pwd：显示当前目录

vim编辑器：
vi 文件名 可以进入这个文件
按下字母i 表示进入编辑模式(插入模式)
按ESC 按SHFIT+：
//:q 退出
//:q!强制退出
//:wq 保存并退出
//:wq!强制保存退出

//SSH
一对密钥：公钥+私钥
1.服务端公钥，本地私钥
2.公钥加密，私钥解密
3.私钥签名，公钥确认

//分支branch
多人开发时，基于分支进行项目功能开发
主分支：master//保留整个项目已经完成的代码
功能分支：专门用来开发新功能的分支，开发且测试完毕后，最终合并到master主分支上
查看分支：git branch
新建分支：git branch 分支名
切换分支: git checkout 分支名/创建并切换 git checkout -b 分支名
合并分支: git merge 分支名//先切换到mastet分支
//解决合并冲突
冲突：如果再两个不同的分支中，对同一个文件进行了不同的修改，Git无法干净的合并
冲突时git会拉出option供选择解决：
1.currnt change：保存当前修改 
2.currnt change：保存当前修改 
3.currnt change：保存当前修改 
4.compare change：比较变更
冲突解决后再add和commit
删除分支: git branch -d 分支名

//链接github远端
使用文档创建origin：地址
//去除origin绑定
git remote -rm origin

//添加origin
git remote add origin 地址

//推送文件到远端
//第一次将git仓库推送到远端(建立了关联)
git push  -u origin '分支'
//之后推送到远端
git push

//远程分支remote
//推送远端分支(之后再推送不用加u)
git push -u origin 本地分支名称:远程分支名称//git push -u origin login

//删除远程分支
git push origin --delete 远程分支名称

//查看远端仓库分支列表
git remote show origin

//跟踪远端仓库分支
1.//本地分支和远端分支有关联
git checkout 远端分支的名字
2.//远程创建了分支，而本地没有关联
git pull origin 远端分支
//将本地分支和远程分支关联
git checkout -b 本地分支 origin/远端分支


//获取远端分支的最新代码，需要本地和远端有关联
//当前处于哪个分支上，就会把对应的远程分支最新的代码下载到该分支
git pull





//sourcetree使用
```

