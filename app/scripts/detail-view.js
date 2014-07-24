"use strict";
var DetailView = Backbone.View.extend({
  className: 'detail-view',
  template: _.template($('.detail-view-template').text()),
  events: {
    "click .update-button": "updateModel",
    "click .post-button": "createPhoto",
    "click .clear-button": "clearFields"
  },

  initialize: function(){
    this.listenTo(photos, 'add', function(photo){
      new ThumbnailView({model: photo})
    })
    this.listenTo(this.model, 'change', this.render);
    $('.left-container').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.template(this.model.attributes);
    this.$el.html(renderedTemplate)
    return this;
  },

  updateModel: function(){
    var that = this;
    this.model.set({
      url:      this.$el.find('.url-input').val(),
      author:  this.$el.find('.author-input').val(),
      title:  this.$el.find('.title-input').val(),
      caption:  this.$el.find('.caption-input').val()
    });

    photos.add(this.model)
    this.model.save().done(function(){
      that.$el.find('.clear-button').html('Saved!')
    })
  },

  clearFields: function(){
    var photoInstance = new Photo();
    this.model = photoInstance
    this.$el.find('input').val('');
    this.$el.find('img').attr('src',' http://placehold.it/700X350');
  },


   createPhoto: function(){
    var that = this;
    this.model.set({
      url:      this.$el.find('.url-input-add').val(),
      author:  this.$el.find('.author-input-add').val(),
      title:  this.$el.find('.title-input-add').val(),
      caption:  this.$el.find('.caption-input-add').val()
    });

    photos.add(this.model)
    this.model.save().done(function(){
      that.$el.find('.post-button-add').html('Saved!')
    })
  }
})