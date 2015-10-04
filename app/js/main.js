$(document).ready(function($) {
	$('.galery__add-image').on('click', function(e){
		e.preventDefault();

		$('.popup').bPopup({
			closeClass : 'popup__close',
			easing: 'easeOutBack', //использую плагин jQuery easing plugin
      speed: 550,
      transition: 'slideDown'
		});
});

$('.form__input-file-origin').on('change', function(){
	var 
		$this = $(this),
		value = $this.val(),
		pureVal = value.replace(/c:\\fakepath\\/gmi, "");

	$('.form__input-fake').text(pureVal);
	});	
// $('.form__input-file-hidden').on('change', function(){
// 		var 
// 			input = $(this),
// 			name = input[0].files[0].name;
// 			$('.input-file-text')
// 					.val(name)
// 					.trigger('hideTooltip')
// 					.removeClass('has-error');
// });

}); // end;