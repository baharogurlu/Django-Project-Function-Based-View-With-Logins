var defaultPhone = "";


/* ************************************** */
function load() {
	/*
	
	*/
	
	$('#telefon').val(defaultPhone);
	$('#telefon').focus();
	
	processPhone();
}


// -------------------------------------------------------------------------   
function clickPhone(id) {
	/*
	
	Called when the phone box is clicked
	
	*/
	var telefonId = '#'+id;
	if ($(telefonId).val() == defaultPhone) {
		$(telefonId).val('');
	}
	
	processPhone();
}


// -------------------------------------------------------------------------   
function processPhone(id,ulke) {
	/*
	
	Process the phone number
	
	*/
	var telefonId = '#'+id;
	var ulke = '#'+ulke;
	phone = $(telefonId).val();
	phone=formatInternational(country, phone);
	if (phone.length == 0) {
		$('#popup').fadeOut('fast');
	} else {
		$('#popup').fadeIn('fast');
	}
	var country = countryCodeToName($(ulke).val());
	var e164 = formatE164(country, phone);
	
	$(telefonId).val(e164);
	$('#phone_national').html(formatLocal(country, phone));
	var countryCode = countryForE164Number(formatE164(country, phone));
	if (countryCode.length == 0) { 
		$('#phone_country').html('-');
	} else {
		$('#phone_country').html(countryCode + " - " + countryCodeToName(countryCode));
	}
	$('#phone_mobile_dial').html(formatNumberForMobileDialing(country, phone));
	if (isValidNumber(phone, country)) {
		$('#phone_valid').html('Yes');
	} else {
		$('#phone_valid').html('No');
	}
}