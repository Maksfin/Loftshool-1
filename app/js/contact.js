$(document).ready(function($) {
	
var moduleContact = (function() {
	// приватные св-ва и методы

	var init = function() {
		_setUpListners();
	},
	// прослушка событий
	 _setUpListners = function() {
		$('.form').on('submit', _submitForm);
	},

		// отправляет форму
		_submitForm = function(e) {
			e.preventDefault();
			// данные для ajax запроса
			var form = $(this),
					url = 'unknow.php',
					defObj = _ajaxForm(form, url);
					//  в defObj будет приходить ответ от сервера
	},
	
			// универсальная функция Ajax
		_ajaxForm = function(form, url) {
			if (!moduleValidation.validateForm(form)) return false;
		};

	// публичные св-ва и методы
	return {
		init : init
	};

})();

if ($('.form').length) {
 	moduleContact.init();
 }
 	
});
 