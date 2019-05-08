
	function loadKullanimKosullari(){
		$('#kosullar').empty();
		$.ajax({
			url:'../views/loadKullanimKosullari',
			async:false,
			success:function(data){
				$('#kullanimkosullari').html(data);
			}
		});
	}
	
	function loadAramalar(url){
		$('#kosullar').empty();
		$.ajax({
			url:url,
			async:false,
			success:function(data){
				$('#kosullar').html(data);
			}
		});
	}

	function paylasimTakip(paylasimId,paylasimTuru,durum,id){
		$.ajax({
			url:'ajaxPaylasimTakip?paylasimId='+paylasimId+'&paylasimTuru='+paylasimTuru+'&durum='+durum+'&id='+id,
			async:false,
			success:function(data){
				if(durum){
					alert(uyari1);
					$('#follow').hide();
					$('#unfollow').show();
				}
				else{
					alert(uyari2);
					$('#follow').show();
					$('#unfollow').hide();
				}
			}
		});
	}	

	function cagriTakip(cagriId,cagriTuru,durum,id){
		$.ajax({
			url:'ajaxCagriTakip?cagriId='+cagriId+'&cagriTuru='+cagriTuru+'&durum='+durum+'&id='+id,
			async:false,
			success:function(data){
				if(durum){
					alert(uyari1);
					$('#follow').hide();
					$('#unfollow').show();
				}
				else{
					alert(uyari2);
					$('#follow').show();
					$('#unfollow').hide();
				}
			}
		});
	}

	function tavsiyeEt(paylasimId,paylasimTuru,tur){
		var eposta= document.getElementById('tavsiyeEt').value;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(re.test(eposta)){
			$.ajax({
				url:'ajaxTavsiyeEt?paylasimId='+paylasimId+'&paylasimTuru='+paylasimTuru+'&eposta='+eposta+'&tur='+tur,
				async:false,
				success:function(data){
					alert(uyari3);
					 if(tur!=4 && tur!=5 && tur!=8 && tur!=1)
					 $('#okuMesaj').modal('toggle');
				}
			});
		}else{
			alert(uyari4);
		}
	}	
	
	function kisiTakip(kisiId,durum){
		$.ajax({
			url:'ajaxKisiTakip?kisiId='+kisiId+'&durum='+durum,
			async:false,
			success:function(data){
				if(durum){
					alert(uyari1);
					$('#followKisi').hide();
					$('#unfollowKisi').show();
				}
				else{
					alert(uyari2);
					$('#followKisi').show();
					$('#unfollowKisi').hide();
				}
			}
		});
	}	

	function kurumTakip(kurumId,durum){
		$.ajax({
			url:'ajaxKurumTakip?kurumId='+kurumId+'&durum='+durum,
			async:false,
			success:function(data){
				if(durum){
					alert(uyari1);
					$('#follow').hide();
					$('#unfollow').show();
				}
				else{
					alert(uyari2);
					$('#follow').show();
					$('#unfollow').hide();
				}
			}
		});
	}	

	function fonSaglayiciTakip(fonSaglayiciId,durum){
		$.ajax({
			url:'ajaxFonSaglayiciTakip?fonSaglayiciId='+fonSaglayiciId+'&durum='+durum,
			async:false,
			success:function(data){
				if(durum){
					alert(uyari1);
					$('#followFonSaglayici').hide();
					$('#unfollowFonSaglayici').show();
				}
				else{
					alert(uyari2);
					$('#followFonSaglayici').show();
					$('#unfollowFonSaglayici').hide();
				}
			}
		});
	}
