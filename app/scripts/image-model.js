'use script';

// Model - The model determines what data I will be using?
// Start the model with a constructor function
// Not sure if "id" always has to be the paramater or
// What else could be a parameter
var Photo = Backbone.Model.extend({
  idAttribute: "_id"
});

 
// Collection - The Collection is multiple instances of
// the model constructor(s) above 
var PhotoCollection = Backbone.Collection.extend({
  // Photo is linking back to model. I dont see how this is an instance
  // I thought it was just the name of the "model" in a property: value format
  model: Photo,
  // this URL links us to the server. This I believe is where we will be uploading our data
  url: 'http://tiny-pizza-server.herokuapp.com/collections/tad-thumbnails'
})