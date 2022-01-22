# tutorial notes

## command 


### bash

exist from the folder
> cd ...

open the current folder with vscode
> code .

clear the terminal
> clear

create a folder
> mkdir <span style="color:F43E5C;" ><foldername></span>

create a file
> touch <filename>

### git

install the git in the project folder ( note: this only have to run once )
> git init


connect git with your github
> git remote add origin <github-repo-url>
> git push -u origin master

add git user name to the project folder
> git config --global user.name "<username>"


add git user email to the project folder
> git config --global user.email "<email>"


check git user name 
> git config --get user.name

check git user email 
> git config --get user.email


save the progess in git  // regular
> git add .
> git commit -m "<messeage>"

upload the save file to github  // regular
> git push


view save history // regular
> git log --oneline -5






