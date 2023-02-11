/*
	By MH11
*/

document.write('<script src=' + ('__proto__' in {} ? 'js/vendor/zepto' : 'js/vendor/jquery') + '.js><\/script>')

$(document).foundation();

var text;
var names = new Array('Mohammad',
	'Nika',
	'Ali',
	'Sara',
	'Reza',
	'Maryam',
	'Farjam',
	'Samira',
	'Sepehr',
	'Hadis',
	'Alireza',
	'Setare',
	'Rooholla',
	'Sarina',
	'Erfan',
	'Mona',
	'Amir',
	'Narges',
	'Hassan',
	'Fateme',
	'Kazem',
	'Zahra',
	'Nima',
	'Haniye',
	'Masoud',
	'Sahar',
	'Mahdi',
	'Atena',
	'Jafar',
	'Kosar'
);

function reset() {
	// re-enable go button
	setTimeout("$('#go').removeAttr('disabled')", 11005);
	var namesbreak = "";
	if (gup('names') != "") {
		var names = gup('names');
		namesbreak = names.replace(/101/g, '\n');
		namesbreak = namesbreak.replace(/%20/g, ' ');
	} else {
		var names = new Array('Mohammad',
			'Nika',
			'Ali',
			'Sara',
			'Reza',
			'Maryam',
			'Farjam',
			'Samira',
			'Sepehr',
			'Hadis',
			'Alireza',
			'Setare',
			'Rooholla',
			'Sarina',
			'Erfan',
			'Mona',
			'Amir',
			'Narges',
			'Hassan',
			'Fateme',
			'Kazem',
			'Zahra',
			'Nima',
			'Haniye',
			'Masoud',
			'Sahar',
			'Mahdi',
			'Atena',
			'Jafar',
			'Kosar'
		);
		for (var i in names) {
			name = names[i];
			if (name == "" || typeof(name) == undefined) {} else {
				namesbreak = namesbreak + name + "\n";
			}
		}
	}
	$("#namesbox").val(namesbreak);
}

function gup(para) {
	para = para.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + para + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
		return "";
	else
		return results[1];
}

function randOrd() {
	return (Math.round(Math.random()) - 0.5);
}

function save() {
	$("#varnote").hide();
	$("#popdown").show();
	$("#values").hide();
	$("div").remove("#result1");
	savenames = $("#namesbox").val();
	savenames = savenames.replace(/\n\r?/g, '101');
	$('#headline').fadeOut();
	$('#headline').text('لیست اسم ها بروزرسانی و ذخیره شد.').fadeIn();
	$("#names").show();
	$('#namesbox').attr('disabled', 'disabled');
}

function namelist() {
	$("#varnote").hide();
	$('#namesbox').removeAttr('disabled', 'disabled');
	$('#headline').text('ویرایش لیست اسم ها');
	$("#popdown").show();
	$("#values").hide();
	$("#names").show();
	$('body').css({
		"overflow-y": "visible"
	});
}

// does the actual animation
function go() {
	$("#varnote").hide();
	$('body').css({
		"overflow-y": "hidden"
	});
	$('#go').attr('disabled', 'disabled');
	$('#list').attr('disabled', 'disabled');
	$('#save').attr('disabled', 'disabled');
	$('#headline').slideUp();
	$('#namesbox').slideDown();

	var count = 1;
	count = 1;
	$("div").remove("#result1");
	names = $("#namesbox").val();
	if (document.all) { // IE
		names = names.split("\n");
	} else { //Mozilla
		names = names.split("\n");
	}
	$("#values").show();
	$(".name").show();
	$("#popdown").hide();
	$("div").remove(".name");
	$("div").remove(".extra");
	$("#playback").html("");
	newtop = names.length * 200 * -1;
	//$('#values').css({top: -300});
	$('#values').css({
		top: +newtop
	});
	names.sort(randOrd);
	var fruits = new Array("apple", "pear", "orange", "banana");
	//console.log(fruits);
	//console.log(names);
	//alert(newtop);
	for (var i in names) {
		if (names[i] == "" || typeof(names[i]) == undefined) {
			count = count - 1;
		} else {
			name = names[i];
			//console.log(name);
			$('#values').append('<div id=result' + count + ' class=name>' + name + '</div>');
		}
		count = count + 1;
	}
	for (var i in names) {
		if (names[i] == "" || typeof(names[i]) == undefined) {} else {
			name = names[i];
			$('#values').append('<div class=name>' + name + '</div>');
		}
		count = count + 1;
	}
	for (var i in names) {
		if (names[i] == "" || typeof(names[i]) == undefined) {} else {
			name = names[i];
			$('#values').append('<div class=name>' + name + '</div>');
		}
		count = count + 1;
	}
	text = $('#result1').text()
	$('#values').animate({
		top: '+176'
	}, 5000);

	// make it stand out
	setTimeout("standout(text)", 5000);
	//setTimeout("$('#playback').hide('slow')",11005);
}

function standout(text) {

	$('#result1').removeClass('name');
	$('.name').animate({
		opacity: .25
	});
	$('#result1').animate({
		height: '+=60px'
	});
	$('#result1').append('<div class="extra"><a class="small alert button" href="#" onClick="removevictim();">حذف این اسم از لیست</a></div>');
	$('#go').removeAttr('disabled', 'disabled');
	$('#list').removeAttr('disabled', 'disabled');
	$('#save').removeAttr('disabled', 'disabled');
	$('#headline').text('برنده پیدا شد!');
	$('#headline').slideDown();
}

function removevictim() {
	// Removing victim from array and UI
	// names = names.filter(function(){ return true});
	// Rewriting namesbox contents
	var nameupdated = "";
	for (var i in names) {
		name = names[i];
		if (name == "" || name == text || typeof(name) == undefined) {} else {
			nameupdated = nameupdated + "\n" + name;
		}
	}
	$('#namesbox').val("");
	$('#namesbox').val(nameupdated);
	$('#result1').html("حذف شد");
	$('#result1').fadeOut(1000, function() {
		$("div").remove("#result1");
	});
	$("div").remove(".name");
	$("div").remove(".extra");
	$('#headline').text('خب، انجام شد! بریم ببینیم نفر بعدی کیه؟ روی دکمه "برو بریم!" کلیک کنید.');
}