git init //初始化工作区  
git add . //将操作的文件提交到暂存区
git commit //添加多行注释
git commit -m "这里写注释"  //添加单行注释
git commit -a -m "这里写注释" ///跳过git add . 直接提交 前提是文件已经追踪
git clone git仓库地址 //克隆仓库
git push //将版本库提交到git仓库
git push github master //将版本库提交到GitHub仓库
git remote rm origin //
git remote -v //
git remote a dd github Git仓库地址 //
git status //查看文件状态
git config --global alias.别名 命令  //修改别名
git config --global --list  //查看用户配置信息
git config --list //查看全部配置信息
git log --oneline --decorate --graph --all //查看版本历史记录
git diff //查看工作区修改后的内容
git diff --staged //查看暂存区修改后的内容
git cat-file -t hash值 //查看文件类型
git cat-file -p hash值 //查看文件信息
git ls-files -s  //查看暂存区信息
git branch //查看分支
git branch Test  //创建Test分支
git branch -d Test //删除Test分支-前提是Test已经合并或没进行操作
git branch -D Test //强制删除TEst分支
git branch Test Hash值 //创建分支并将文件放到Hash值提交对象的位置-Hash值要是一个提交对象git_lol
git checkout Test //切换到Test分支
git checkout -b Test //创建并切换到Test分支
git stash //存储当前修改的信息
git stash appley stash@{0}  //应用存储修改的信息
git stash pop stash@{0} //应用并删除存储修改的信息
git stash drop stash@{0} //删除存储修改的信息
git stash list //查看存储的信息
git merge 要合并的分支  //合并分支
git rm 文件 //删除文件
git mv 原文件 修改后的文件 //修改文件名
git reflog //查看所以操作
###撤回
git reset --soft HEAD~1||Hash值  //撤销最后一次的提交，1可以换成其他更早的数字也可以指定对应的历史Hash值（该撤回只修改HEAD、分支）
git reset --mixed HEAD~1||Hash值 //撤销最后一次的提交，1可以换成其他更早的数字也可以指定对应的历史Hash值（该撤回只修改工作区）
git reset --hard HEAD~1||Hash值 //撤销最后一次的提交，1可以换成其他更早的数字也可以指定对应的历史Hash值（该撤回修改HEAD、分支，工作区，暂存区）
git reset 文件名 //撤回暂存区的修改（旧版）
git commit --amend //重新修改上一次提交的注释
git checkout 文件名 //撤回工作区的修改（旧版）
git restore 文件名 //撤回工作区的修改（新版）
git restore --staged 文件名 //撤回暂存区的修改（新版）
###标签
git tag //查看所标签
git tag 标签名 //在当前的HEAD上创建一个标签
git checkout -b 分支名 标签 //转到标签的同时创建一分支
git tag -d 标签名 //删除标签
git tag 标签名 Hash值 //在指定的提交对象上打上标签


