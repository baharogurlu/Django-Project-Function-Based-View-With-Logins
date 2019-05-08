	function extraValidate(){
		/* Sadece Yılları karşılaştırır*/
		jQuery.validator.addMethod('baslangicyili', function (value, element,params) {
			var test = true;
			if(params[0]){
				if($(params[0]).val() && value > $(params[0]).val())
					test = false;
			}
			return test;
			}, jQuery.validator.messages.baslangicyili);
		jQuery.validator.addMethod('bitisyili', function (value, element,params) {
			var test = true;
			if(params[0]){
				if($(params[0]).val() && value < $(params[0]).val())
					test = false;
			}
			return test;
			},jQuery.validator.messages.bitisyili);
	}
	function extraValidateTamTarihKarsilastir(){
		/* Tarihleri karşılaştırır gün-ay-yıl*/
		jQuery.validator.addMethod('baslangictarihi', function (value, element,params) {
			var test = true;
			if(params[0]){
				if($(params[0]).val()){
					var bitisZamani=$(params[0]).val();
					var baslamaZamaniParca = value.match(/(\d+)/g);
					var bitisZamaniParca= bitisZamani.match(/(\d+)/g);
					var yeniBaslangic = new Date(baslamaZamaniParca[2],baslamaZamaniParca[1],baslamaZamaniParca[0]);
					var yeniBitis = new Date(bitisZamaniParca[2],bitisZamaniParca[1],bitisZamaniParca[0]);
					if(yeniBaslangic >= yeniBitis)
							test = false;
				}
			}
			return test;
			}, jQuery.validator.messages.baslangictarihi);
		jQuery.validator.addMethod('bitistarihi', function (value, element,params) {
			var test = true;
			if(params[0]){
				if($(params[0]).val()){
					var baslamaZamani=$(params[0]).val();
					var bitisZamaniParca = value.match(/(\d+)/g);
					var baslamaZamaniParca= baslamaZamani.match(/(\d+)/g);
					var yeniBaslangic = new Date(baslamaZamaniParca[2],baslamaZamaniParca[1],baslamaZamaniParca[0]);
					var yeniBitis = new Date(bitisZamaniParca[2],bitisZamaniParca[1],bitisZamaniParca[0]);
					if(yeniBaslangic >= yeniBitis)
							test = false;
					}
			}
			return test;
			},jQuery.validator.messages.bitistarihi);
	}
	function extraValidateEnAzBirTaneAlanDoldurulmali(){

		jQuery.validator.addMethod('enazbirtanesi', function (value, element,params) {
			var test = false;
			for (var i = 0; i < params.length; i++){
				 if ($(params[i]).val())
			        	test = true;
			}
		    return test;
			}, jQuery.validator.messages.enazbirtanesi);

	}
	function extraValidateCurrency(){

		jQuery.validator.addMethod('currency', function (value, element,params) {
			if (value){
				  var regex = /^\$?[0-9][0-9.]*[0-9]\,?[0-9]{0,2}$/i;
			      return regex.test(value);
			}
		    return false;
			}, jQuery.validator.messages.currency);

	}
	
	function extraValidateSadeceBirAlanDoldurulmali(){

		jQuery.validator.addMethod('sadecebirtanesi', function (value, element,params) {
			var test = false;
			var count = 0; 
			for (var i = 0; i < params.length; i++){
				if($(params[i]).prop("type")=="checkbox"){
					if($(params[i]).is(':checked')){
						$(params[i]).val('true');
					}else{
						$(params[i]).val('');
					}
				}
				 if ($(params[i]).val())
			        	count +=1; 
				 
			}
			if(count == 1)
				test=true;
		    return test;
			}, jQuery.validator.messages.sadecebirtanesi);
	}



