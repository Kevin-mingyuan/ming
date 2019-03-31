var oplist = new Array('about', 'user', 'news', 'mars', 'jielong', 'box', 'school', 'config', 'other');
$(document).ready(function() {
	$('#nav').find("a").click(function() {
		var id = $(this).attr('id');
		$.each(oplist, function(i, n) {
			$('#'+n).attr('class', 'inactive');
		});
		$(this).parents("li").attr('class', 'active');
	});
});
