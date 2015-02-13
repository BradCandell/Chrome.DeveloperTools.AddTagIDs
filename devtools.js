
function injectTagIDs() {
	
	chrome.devtools.inspectedWindow.eval('(function() {\n\
		var allTags = document.querySelectorAll("body *");\n\
		var idByTagName = [];\n\
		for (var i = 0, max = allTags.length; i < max; i++) {\n\
			var t = allTags[i].tagName;\n\
			if (idByTagName[t] == undefined) {\n\
				idByTagName[t] = 0;\n\
			}\n\
			allTags[i].setAttribute("tag-ID", t + "-" + idByTagName[t]);\n\
			idByTagName[t]++;\n\
		}\n\
	})()');	
	
}

injectTagIDs();
