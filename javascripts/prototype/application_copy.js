window.onload = function() {
  $('js-glenn').style.display = 'none';
  $('js-mara').style.display = 'none';
  $('js-andrew').style.display = 'none';
  $('js-eric').style.display = 'none';

  if (!document.getElementsByTagName) return false;
  var lnks = document.getElementsByTagName("a");
  for (var i=0; i<lnks.length; i++) {
    if (lnks[i].getAttribute("class") == "blind-glenn") {
	  lnks[i].onclick = function() {
	    blindGlenn(this.getAttribute("href"));
	    return false;	
	  }	
	}
	else if (lnks[i].getAttribute("class") == "blind-mara") {
	  lnks[i].onclick = function() {
	    blindMara(this.getAttribute("href"));
	    return false;	
	  }	
	}
	else if (lnks[i].getAttribute("class") == "blind-andrew") {
	  lnks[i].onclick = function() {
	    blindAndrew(this.getAttribute("href"));
	    return false;	
	  }	
	}
	else if (lnks[i].getAttribute("class") == "blind-eric") {
	  lnks[i].onclick = function() {
	    blindEric(this.getAttribute("href"));
	    return false;	
	  }	
	}
  }
}



function blindGlenn() {
  new Effect.BlindDown('js-glenn');
  Element.removeClassName("a-glenn", "blind-glenn");
  Element.addClassName("a-glenn", "blindup-glenn");
  Element.update("link-glenn", '<a href="" id="a-glenn" class="blindup-glenn">less info about Glenn...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blindup-glenn") {
	    lnks[i].onclick = function() {
		  blindUpglenn(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}
function blindUpglenn() {
  new Effect.BlindUp('js-glenn');
  Element.update("link-glenn", '<a href="#" id="a-glenn" class="blind-glenn">more info about Glenn...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blind-glenn") {
	    lnks[i].onclick = function() {
		  blindGlenn(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindMara() {
  new Effect.BlindDown('js-mara');
  Element.removeClassName("a-mara", "blind-mara");
  Element.addClassName("a-mara", "blindup-mara");
  Element.update("link-mara", '<a href="" id="a-mara" class="blindup-mara">less info about Mara...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blindup-mara") {
	    lnks[i].onclick = function() {
		  blindUpmara(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindUpmara() {
  new Effect.BlindUp('js-mara');
  Element.update("link-mara", '<a href="#" id="a-mara" class="blind-mara">more info about Mara...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blind-mara") {
	    lnks[i].onclick = function() {
		  blindMara(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindAndrew() {
  new Effect.BlindDown('js-andrew');
  Element.removeClassName("a-andrew", "blind-andrew");
  Element.addClassName("a-andrew", "blindup-andrew");
  Element.update("link-andrew", '<a href="" id="a-andrew" class="blindup-andrew">less info about Andrew...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blindup-andrew") {
	    lnks[i].onclick = function() {
		  blindUpandrew(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindUpandrew() {
  new Effect.BlindUp('js-andrew');
  Element.update("link-andrew", '<a href="#" id="a-andrew" class="blind-andrew">more info about Andrew...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blind-andrew") {
	    lnks[i].onclick = function() {
		  blindAndrew(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindEric() {
  new Effect.BlindDown('js-eric');
  Element.removeClassName("a-eric", "blind-eric");
  Element.addClassName("a-eric", "blindup-eric");
  Element.update("link-eric", '<a href="" id="a-eric" class="blindup-eric">less info about Eric...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blindup-eric") {
	    lnks[i].onclick = function() {
		  blindUperic(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}

function blindUperic() {
  new Effect.BlindUp('js-eric');
  Element.update("link-eric", '<a href="#" id="a-eric" class="blind-eric">more info about Eric...</a>');
  var lnks = document.getElementsByTagName("a");
    for (var i=0; i<lnks.length; i++) {
	  if (lnks[i].getAttribute("class") == "blind-eric") {
	    lnks[i].onclick = function() {
		  blindEric(this.getAttribute("href"));
		  return false;	
		}	
	  }
    }
}