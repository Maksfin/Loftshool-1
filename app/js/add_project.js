$(document).ready(function($) {
	
var modulePopup = (function() {
	// приватные св-ва и методы

	// прослушка событий
	var _setUpListners = function() {
		$('.galery__add-image').on('click', _showModal);
		$('.form__input-file-origin').on('change', _changeNameImage);
		$('.form').on('submit', _addProject); 
	},

	// модальное окно 
	_showModal = function (e) {
		e.preventDefault();
		$('.form__input-fake').text('Загрузите изображение');
		$('.popup').bPopup({
			positionStyle : 'fixed',
			easing : 'easeOutBack', //использую плагин jQuery easing plugin
			speed : 550,
			transition : 'slideDown',
			onClose : function () {
				this.find('.form').trigger('reset');
			}
		})
	},
		//меняем путь к изображению
	_changeNameImage = function() {
		var	
			$this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");
			$('.form__input-fake')
			.text(pureVal)
			.trigger('hideTooltip')
			.removeClass('error');	
	},

	_addProject = function (e) {
			e.preventDefault();
			var form = $(this),
						url = 'add_project.php',
						defObj = _ajaxForm(form, url);
			 
	},	

	_ajaxForm = function (form, url) {
			if (!moduleValidation.validateForm(form)) return false;
				// если поля заполнены делает запрос на сервер и возвращает ответ
				
		};
	// публичные св-ва и методы
	return {
		init : function() {
				_setUpListners();
		}
	};
})();

if ($('.popup').length) {
 	modulePopup.init();
 }

});
 