	var myWindow;

	function openCenteredWindow(url) {
		var width = 400;
		var height = 300;
		var left = parseInt((screen.availWidth/2) - (width/2));
		var top = parseInt((screen.availHeight/2) - (height/2));
		var windowFeatures = "width=" + width + ",height=" + height + ",status,resizable,left=" + left + ",top=" + top + "screenX=" + left + ",screenY=" + top;
		myWindow = window.open(url, "subWind", windowFeatures);
	}

	function PopupCenter(url, title, w, h) {
		// Fixes dual-screen position                         Most browsers      Firefox
		var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
		var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

		width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
		height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

		var left = ((width / 2) - (w / 2)) + dualScreenLeft;
		var top = ((height / 2) - (h / 2)) + dualScreenTop;
		var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

		// Puts focus on the newWindow
		if (window.focus) {
			newWindow.focus();
		}}

		
function parseGET() {
  // Обработка GET-запросов
  var tmp = new Array();    // два вспомогательных
  var tmp2 = new Array();  // массива
  get = new Array();
  var url = location.search;    // строка GET запроса
  if(url != '') {
    tmp = (url.substr(1)).split('&');   // разделяем переменные
    for(var i=0; i < tmp.length; i++) {
      tmp2 = tmp[i].split('=');     // массив param будет содержать
      get[tmp2[0]] = tmp2[1];       // пары ключ(имя переменной)->значение
    }
  }
}


//Только вот ты забыл, что в JS нету ассоциативных массивов и вот эта строка
//get[tmp2[0]] = tmp2[1];
//не имеет смысла до тех пор, пока она
//get = new Array();
//Рабочая версия (возвращает объект)

function parseUrlQuery() {
    var data = {};
    if(location.search) {
        var pair = (location.search.substr(1)).split('&');
        for(var i = 0; i < pair.length; i ++) {
            var param = pair[i].split('=');
            data[param[0]] = param[1];
        }
    }
    return data;
}


function parseUrl(_url)
   {
    var params = new Object();
    var t1 = _url.split('?');
    if (t1.length > 1)
       {
        var t2 = t1[1].split('#');
        if (t2.length > 0)
           {
            var t3 = t2[0].split('&');
            	 
            if (t3.length > 0)
               {
                var t4;
                for (var i=0; i<t3.length; i++)
                    {
                     t4 = t3[i].split('=');
                        
                     if (t4.length > 0)
                       {
                        params[t4[0]] = (t4[1] || 'n/a');
                       }
                   }
               }
           }
       }
    
    return params;
}


function print_r(data)
   {
    var t = new Array();
        
    for (var prop in data)
        {
         t.push('data['+ prop +'] - '+  (data[prop] || 'n/a'));
        }
     return t.join('\n');
    }

var _script  = document.getElementById('id_скрипта');
if (_script)
   {
    var data = parseUrl(_script.src);
    //alert(data['чего-то там..']);
    alert(print_r(data));
 }



