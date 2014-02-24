$(document).ready(function(){
	
jQuery(function() {
    var shortDateFormat = 'dd/MM/yyyy';
	 jQuery(".shortDateFormat").each(function (idx, elem) {
        if (jQuery(elem).is(":input")) {
            jQuery(elem).val(jQuery.format.date(jQuery(elem).val(), shortDateFormat));
        } else {
            jQuery(elem).text(jQuery.format.date(jQuery(elem).text(), shortDateFormat));
        }
    });
});
});