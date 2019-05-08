/* Translated default messages for the jQuery validation plugin.
 * Locale: TR (Turkish; Türkçe)
 */
$.extend( $.validator.messages, {
	required: "This field is mandatory.",
	remote: "Please correct this field.",
	email: "Lütfen geçerli bir e-posta adresi giriniz.",
	url: "Lütfen geçerli bir web adresi (URL) giriniz.<br/>Örnek: http://www.ornek.com",
	date: "Lütfen geçerli bir tarih giriniz.",
	dateISO: "Lütfen geçerli bir tarih giriniz(ISO formatında)",
	number: "Lütfen geçerli bir sayı giriniz.",
	digits: "Lütfen sadece sayısal karakterler giriniz.",
	creditcard: "Lütfen geçerli bir kredi kartı giriniz.",
	equalTo: "Lütfen aynı değeri tekrar giriniz.",
	extension: "Lütfen geçerli uzantıya sahip bir değer giriniz.",
	maxlength: $.validator.format( "Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz." ),
	minlength: $.validator.format( "Lütfen en az {0} karakter uzunluğunda bir değer giriniz." ),
	rangelength: $.validator.format( "Lütfen en az {0} ve en fazla {1} uzunluğunda bir değer giriniz." ),
	range: $.validator.format( "Lütfen {0} ile {1} arasında bir değer giriniz." ),
	max: $.validator.format( "Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz." ),
	min: $.validator.format( "Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz." ),
	require_from_group: "Lütfen bu alanların en az {0} tanesini doldurunuz.",
	maks3meslek: $.validator.format( "Maksimum {0} meslek seçebilirsiniz." ),
	baslangicyili:$.validator.format( "Başlangıç yılı bitiş yılından büyük olamaz." ),
	bitisyili:$.validator.format( "Bitiş yılı başlangıç yılından küçük olamaz." ),
	gecerliyil:$.validator.format( "Seçtiğiniz yil {0} ve {1} arasında olmalı." ),
	baslangictarihi:$.validator.format( "Başlangıç tarihi bitiş tarihinden büyük olamaz." ),
	bitistarihi:$.validator.format( "Bitiş tarihi başlangıç tarihinde küçük olamaz." ),
	enazbirtanesi:$.validator.format( "Bu alanlardan en az birtanesinin doldurulması zorunludur." ),
	currency:$.validator.format( "Para düzeni 12.345.678,90 bu örnekteki gibi olmalı." ),
	sadecebirtanesi:"Bu alanlardan sadece birtanesini doldurunuz"
} );
