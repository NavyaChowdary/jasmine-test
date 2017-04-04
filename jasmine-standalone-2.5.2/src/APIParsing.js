function isLfieldPresent(url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	
	if (xhr.readyState == 4 && xhr.status == 200) {
		/*Sanitize Json object. Remove "\" characters present in API*/
		var jsonObj = xhr.responseText.replace(/\//g, "");
		jsonObj = JSON.parse(jsonObj);
		return jsonObj[0].hasOwnProperty('l');
    }  
	return false;
}

