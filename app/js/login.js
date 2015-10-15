$(document).ready(function($) {
	
var moduleLogin = (function() {
	// приватные методы

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
			// ajax запрос
			var form = $(this),
					url = 'unknow.php',
					defObj = _ajaxForm(form, url);
					//  в defObj будет приходить ответ от сервера
	},

		_ajaxForm = function(form, url) {
			if (!moduleValidation.validateForm(form)) return false;
		};

	
	// публичные  методы
	return {
		init : init
	};

})();

if ($('.form').length) {
 	moduleLogin.init();
 }
 	
});
 