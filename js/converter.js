$(document).ready(function(){


	function dmsToDd(D,M,S){
		M = Math.abs(M);
		S = Math.abs(S);

		var result = ((M/60)+(S/3600)).toFixed(4);
		var r = result.toString();


		return (D+''+r.slice(1));
	}

	function ddToDms(D){
		var degree = parseInt(D);

		var m = Math.abs(parseFloat(D - degree).toFixed(4));
		var minute = function(){
			var hasilM = parseInt(m * 60);

			return hasilM;
		};

		var second = function(){
			var M = parseFloat(minute()/60).toFixed(4);
			var s = Math.abs(parseInt((m - M)*3600));

			return s; 
		};

		$('#resultD').val(degree);
		$('#resultM').val(minute);
		$('#resultS').val(second);
	}

	function localTime(local, destination){

		var selisihWaktu = function(){
			var t = parseFloat((destination - local)/15).toFixed(4);
			var tDegree = parseInt(t);
			var tMinute	= Math.abs(parseInt((t - tDegree)*60));

			return tDegree+':'+tMinute;
		};

		$('#diffTime').val(selisihWaktu);

		return selisihWaktu();
	}

	$('.dmstodd').click(function(){
		var degree = $('#degree1').val();
		var minute = $('#minute1').val();
		var second = $('#second1').val();

		$('#result1').val(dmsToDd(degree,minute,second));
	});

	$('.ddtodms').click(function(){
		var degree2 = $('#degree2').val();

		return ddToDms(degree2);

	});

	$('.convertTime').click(function(){
		var local = $('#localtime').val();
		var localLong = $('#localLong').val();
		var destLong = $('#destLong').val();
		var hour = 0;
		var minute = 0;

		var localSplit = local.split(':');
		var diffSplit = localTime(localLong, destLong).split(':');
		
		hour = parseInt(localSplit[0]) + parseInt(diffSplit[0]);
		minute = parseInt(localSplit[1]) + parseInt(diffSplit[1]);

		hour = parseInt(hour + minute/60);
		minute = Math.abs(minute%60);

		if (hour > 24) {
			hour = hour%24;
		}


		$('#resultTime').val(hour+':'+minute);

	});

});