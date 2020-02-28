
$(document).ready(function(){
    var cp = '<div class="color-picker" id="color-picker" style="display: none"></div>';
        $(".colorpicker").after(cp);

        var colorList = [ '000000', '993300', '333300', '003300', '003366', '000066', '333399', '333333', 
                            '660000', 'FF6633', '666633', '336633', '336666', '0066FF', '666699', '666666', 'CC3333', 'FF9933', '99CC33', '669966', '66CCCC', '3366FF', '663366', '999999', 'CC66FF', 'FFCC33', 'FFFF66', '99FF66', '99CCCC', '66CCFF', '993366', 'CCCCCC', 'FF99CC', 'FFCC99', 'FFFF99', 'CCffCC', 'CCFFff', '99CCFF', 'CC99FF', 'FFFFFF' ];
		var picker = $('#color-picker');
        
        for (var i = 0; i < colorList.length; i++ ) {
			picker.append('<li class="color-item" data-hex="' + '#' + colorList[i] + '" style="background-color:' + '#' + colorList[i] + ';"></li>');
        }

		$('.colorpicker').click(function(event) {
			event.stopPropagation();
			picker.fadeIn();
			picker.children('li').click(function() {
                var codeHex = $(this).data('hex');
                picker.fadeOut();
                $("body").css("background-color",codeHex);
			});
		});
});