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
}); // end;