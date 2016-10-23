$(document).ready(function() {
	var f = 1, color = "orange";
    var isDragging = false;
    $("#canvas")
    .mousedown(function() {
        isDragging = true;
    })
    .mouseup(function() {
        var wasDragging = isDragging;
        isDragging = false;
    });
	$("td").mouseenter(function() {
        if (isDragging) {
            if (color=="orange") {
                $(this).removeClass("red blue").toggleClass("orange");
            }
            if (color=="red") {
                $(this).removeClass("orange blue").toggleClass("red");
            }
            if (color=="blue") {
                $(this).removeClass("orange red").toggleClass("blue");
            }
        }
	});
    $("td").mousedown(function() {
        if (color=="orange") {
			$(this).removeClass("red blue").toggleClass("orange");
		}
		if (color=="red") {
			$(this).removeClass("orange blue").toggleClass("red");
		}
		if (color=="blue") {
			$(this).removeClass("orange red").toggleClass("blue");
		}
    });
    $(document).keydown(function(evt) {
        if (evt.keyCode == 32) {
          isDragging = !isDragging;
        }
      });
	$("div#cells").click(function() {
		$("td").toggleClass("cells");
	});
	$("div#height").click(function() {
		$("td").toggleClass("height");
	});
	$("div#width").click(function() {
		$("td").toggleClass("width");
	});
	$("div#color").click(function() {
		if (color=="orange") {
			$(this).addClass("colorred");
			color="red";
		}
		else if (color=="red") {
			$(this).removeClass("colorred");
			$(this).addClass("colorblue");
			color="blue";
		}
		else if (color=="blue") {
			$(this).removeClass("colorblue");
			color="orange";
		}
	});
	$("div#clear").click(function() {
		$("#canvas").slideUp();
		$("td").removeClass("orange red blue");
		$("#canvas").slideDown();
	});
	$("div#show").click(function() {
		if (f==1) {
			$("#rightbar").stop(true, true).animate({width: "0"});
			$("div#show").html("Show");
			f=0;
		}
		else {
			$("#rightbar").stop(true, true).animate({width: "230"});
			$("div#show").html("Hide Again");
			f=1;
		}
	});
});