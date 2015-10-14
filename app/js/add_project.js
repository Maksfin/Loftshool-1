$(document).ready(function($) {
	
var CreatorModule = (function () {
	// приватные св-ва и методы

	// прослушка событий
	var _setUpListners = function () {
		$('.galery__add-image').on('click', _showModal);
		$('.form').on('submit', _addProject);
	},

	// модальное окно 
	_showModal = function (e) {
		e.preventDefault();
		$('.popup').bPopup({
			easing : 'easeOutBack',
			speed : 550,
			transition : 'slideDown',
			onClose : function () {
				this.find('.form').trigger('reset');
			}
		})
	},

	//добавление проекта 
	_addProject = function (e) {
		e.preventDefault();
		var form = $(this),
				url = '',
				serverAnswer = _ajaxForm(form, url);

	},



	// публичные св-ва и методы
	return {
		init : function() {
				_setUpListners();
		}
	};
})();

if ($('.popup').length) {
 	CreatorModule.init();
 }

});
 