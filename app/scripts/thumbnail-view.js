'use strict';
// View - The view is where we display our data in different ways
// The view is also a constructor
var ThumbnailView = Backbone.View.extend({
  // The className is a built in function that designates a class
  // to this.el     
  className: 'thumbnail',
  // here we create a template using underscore that links to html and scripts
  template: _.template($('.thumbnail-template').text()),
  // We are using Events in the view because events are built in functions?
  // I believe events are native like .click and are put in html
  // I dont understand "binding an event to something". Makes no sense.
  events: {
    // This event click is referencing a fuction. saying once clicked run the function 
    "click" : "showDetailView"
  },
  
  // I though Initialize was always at the top of the page? Not so apparently
  // I believe this is saying that the first thing that needs to happen in the 
  // thumbnail view is for the container to be appended and then the View
  // div (this.el which is thumbnail div) to be rendered
  initialize: function(){
    $('.thumbnail-container').append(this.el);
    this.render()
  },
 
  // here we create our own render function that is specific to this Thumbnail view only
  // it reads right to left like this...
  // make this function be a template that has uses the provided div. 
  // Let this native provided div have the model's attributes (which is _id)
  // and all that equals the render template????
  render: function(){
    var renderedTemplate = this.template(this.model.attributes)
    this.$el.html(renderedTemplate)
  },
 
  // this showDetailView is a constructor function only existing within the ThumbnailView
  // it reads ({Photo: thumbnailView.Photo})   No idea how this works or why its necessary
  showDetailView: function(){
    new DetailView({model: this.model})
  }
})

