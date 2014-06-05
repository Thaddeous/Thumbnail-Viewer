var showThumbnails = new PhotoCollection();

	showThumbnails.fetch().done(function(){
		showThumbnails.each(function(url){
			new ThumbnailView({model:url})
		});
	});