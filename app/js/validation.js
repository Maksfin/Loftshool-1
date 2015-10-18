var moduleValidation = (function () {

	// Инициализия модуля
	var init = function () {
				_setUpListners();
	},

	// прослушка событий
	_setUpListners = function () {
		$('.form').on('keydown','.error', _removeError);
		$('.form').on('reset', _clearForm);
	},  

  _removeError = function () {
		$(this).removeClass('error');
	},

	_clearForm = function (form) {
		var form = $(this);
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.error').removeClass('error');		
	},

	// cоздаёт тултипы
	_createQtip = function (elem, position) {
		// устанавливает позицию тултипа
    if (position === 'right') {
      position = {
        my: 'left center', 
        at: 'right center'
      }
    }else{
      position = {
        my: 'right center', 
        at: 'left center'
      }
    }
 		// инициализируем тултип
    elem.qtip({
      content: {
        text: function() {
          return $(this).attr('qtip-content');
        }
      },
      show: {
        event: 'show'
      },
      hide: {
        event: 'keydown hideTooltip'
      },
      position: position,
      style: {
        classes: 'qtip-mystyle qtip-rounded'    
      }
    }).trigger('show');
	},

  validateForm = function(form) {

		var elements = form.find('input, textarea').not('input[type="file"]'),
				valid = true;
		    $.each(elements, function (index, val){
			  var element = $(val),
            val = element.val(),
            pos = element.attr('qtip-position');    

    // если не валидна, создаем тултип и возвращаем переменную с результатом
      if(val.length === 0){
      	element.addClass('error');
      	_createQtip(element,pos);  
      	valid = false; 
      }     
		});

		return valid;
	};

	// публичные методы 
	return {
			init: init,
			validateForm: validateForm
	};

 // плейсхолдер ie8
if(!Modernizr.input.placeholder){
	$('input, textarea').placeholder();
}

})();

// проверка модуля
if ($('.form').length) {
 	moduleValidation.init();
 }


