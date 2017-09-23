$(document).ready(function(){
		 $("#hdp-VipPrice,#hdp-SalePrice").keyup(function () {
		     var reg = $(this).val().match(/\d+\.?\d{0,2}/);
		     var txt = '';
		     if (reg != null) {
		         txt = reg[0];
		     }
		     $(this).val(txt);
		 }).change(function () {
		     $(this).keypress();
		     var v = $(this).val();
		     if (/\.$/.test(v))
		     {
		         $(this).val(v.substr(0, v.length - 1));
		     }
		 });
		 });