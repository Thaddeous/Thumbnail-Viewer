var photos = new PhotoCollection();

 photos.fetch().done(function(){
	 photos.each(function(url){
			thumbnailInstance = new ThumbnailView({model:url})
		});
			detailInstance = new DetailView({model:photos.last()})
	});














	// app = new AppRouter()
	// Backbone.history.start();