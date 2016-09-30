package main

// Пакеты
import (

	r "github.com/dancannon/gorethink"
	"crypto/rand"
	"crypto/sha1"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"html/template"
	"io"
	"io/ioutil"
	"log"
	"math"
	"net"
	"net/http"
	"net/url"
	"os"
	"path"
	"regexp"
	"runtime"
	"strconv"
	"strings"
	"time"
	"sync"
)

var (
	 IpPort string = ""
     Mux sync.Mutex  
)


/***************************************************************************************************************************************
 *
 *   Title        : Connection to DB
 *   Initialisation Service
 * 	 Date         : 2015-03-11
 *	 Description  : Initialization DB Connect
 *   Author       : SAVCHENKO ARTHUR 
 *   ☎           : 8-097-5547468
 *
 ****************************************************************************************************************************************/
func Dbini() {

	// Инициализация подключения к базе
	// на той машине где расположен и стартует сервис
	// Для переключения на тестовую машину
	
	if runtime.GOOS == "windows" {
	   IpPort = "10.10.10.10:28015"                        // Тестовый сервис

        // Connect to Production Server
        production := false
        if production == true { 
           IpPort = "100.111.111.201:28015"
        }

	}  else {
	     IpPort = "localhost:28015"                       // Локальный ресурс 
	}


	// Сессия подключения
	// MaxActive: 100, IdleTimeout: time.Second * 10, MaxIdle: 10})

	// Для случая когда будет установлен пароль  базы данных
	// ServiceClientKey       = "S0864AA791CE7E7B00RT"
    // AuthKey: DatabaseKey,
    // 

	// session, err := r.Connect(r.ConnectOpts{Address: IpPort, Database: DatabaseName, Password: ServiceClientKey})
	// session, err := r.Connect(r.ConnectOpts{Address: IpPort, Database: DatabaseName, AuthKey: DatabaseKey, Username:"admin", Password: ServiceClientKey})
	session, err := r.Connect(r.ConnectOpts{Address: IpPort, Database: DatabaseName, AuthKey: DatabaseKey, Username:"admin", Password: ""})


  // Закрыть сеесию 
	// defer session.Close()

	// Для случая когда будет установлен пароль для админа + ключ базы данных
	// session, err := r.Connect(r.ConnectOpts{Address: IpPort, Database: DatabaseName, AuthKey: DatabaseKey, Username: "admin", Password: ServiceClientKey})

	// Для случая когда будет установлен пароль для админа
	// session, err := r.Connect(r.ConnectOpts{Address: IpPort, Database: DatabaseName, Username: "admin", Password: ""})

	// Обработка ошибок
	if err != nil {
	   fmt.Println("NO CONNECTION.")
	   return
	}

	// Максимальное количество подключений
	// По умолчанию 200
	session.SetMaxOpenConns(200)
	session.SetMaxIdleConns(200)

	sessionArray = append(sessionArray, session)
}


