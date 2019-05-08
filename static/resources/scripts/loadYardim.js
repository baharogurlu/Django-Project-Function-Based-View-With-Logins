
function loadYardim(){
	var sayfa = $(location).attr('pathname');	
	YardimPenceresi('../views/yardimGoster.htm?sayfa='+sayfa,'_blank','800','600','yes');return false;
}

function loadYardimSSS(){
	YardimPenceresi('../views/yardimSSSGoster.htm','_blank','1000','650','yes');return false;
}

function loadKusipOneri(){
	YardimPenceresi('../views/editKusipOneri.htm','_blank','1000','650','yes');return false;
}

function loadKusipSikayet(){
	YardimPenceresi('../views/editKusipSikayet.htm','_blank','1000','650','yes');return false;
}

function loadVideoGoster(id,url,icerikTuru){
	YardimPenceresi('../views/videoGoster.htm?id='+id+'&url='+url+'&icerikTuru='+icerikTuru,'_blank','550','215','yes');return false;
}



function loadPaylasimVideoGoster(id,url,icerikTuru,paylasimTuru){
	YardimPenceresi('../views/videoGoster.htm?id='+id+'&url='+url+'&icerikTuru='+icerikTuru+'&pt='+paylasimTuru,'_blank','550','215','yes');return false;
}

function YardimPenceresi(sayfa, baslik, w, h, scroll) {
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	ozellikler = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
	win = window.open(sayfa, baslik, ozellikler)
	if(win==null){alert('<fmt:message key="label.popup.uyari"/>');}
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}


		


