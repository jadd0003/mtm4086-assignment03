function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);
		
		
		for (var key in jsonObj){
			var theimage = document.getElementById("holder");
			var thecontent = document.createElement("div");
			thecontent.className ='holder';
			var articleImg = document.createElement("img");
			articleImg.setAttribute('src',jsonObj[key].imageUrl);
			thecontent.appendChild(articleImg);
			theimage.appendChild(thecontent);
			
			var titleGrab = document.getElementById("holder");
			var thecontent = document.createElement("div");
			var articleTitle = document.createElement("h1");
			articleTitle.innerHTML = ('src',jsonObj[key].title);
			thecontent.appendChild(articleTitle);
			titleGrab.appendChild(thecontent);
			
			var captionGrab = document.getElementById("holder");
			var thecontent = document.createElement("div");
			var articleSlo = document.createElement("p");
			articleSlo.innerHTML = ('src',jsonObj[key].caption);
			thecontent.appendChild(articleSlo);
			captionGrab.appendChild(thecontent);
			
			var authorGrab = document.getElementById("holder");
			var thecontent = document.createElement("div");
			var articleAuth = document.createElement("p");
			articleAuth.className ='articleAuth';
			articleAuth.innerHTML = ('src',jsonObj[key].credits);
			thecontent.appendChild(articleAuth);
			authorGrab.appendChild(thecontent);
		}

      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();