REM ECHO "  "                 
REM ECHO ....................................................................
REM ECHO gopath = %gopath%
REM ECHO ....................................................................
REM go clean -r -i
REM go install -a
 
REM Update Driver Gorethinkdb
rem go get -u github.com/dancannon/gorethink
rem go get -u github.com/googollee/go-socket.io

REM go env
REM SET versgo=go version
REM SET BUILD_DATE=12.02.2016

REM ECHO %BUILD_DATE%
REM ECHO %versgo%

REM go help build
rem  pscp -P 2222 -l user1-pw Password  test.txt  user@10.10.10.10:/home/user/ 

REM Building
go build -o prog.exe 
prog.exe

REM Server is started
ECHO %Date% %Time%  %date:~-10,0% Сервер запущен >> d:\SERVICE\log.txt 

REM go run selectgo.go
REM go run d:\MORION\RETHINKDB\GO\main.go
@PAUSE
