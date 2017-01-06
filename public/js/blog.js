$(document).ready(function(){

  $.ajax({
    url:"js/json/code_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(codeResponse){
// code blog
  var codeBlogTemplateString = $('#code_blog-template').html();
  //
  var codeBlogTemplateRenderer = Handlebars.compile(codeBlogTemplateString);
  var codeOutput = codeBlogTemplateRenderer(codeResponse)

  $('#code_blog-details').html(codeOutput);
  });

  $.ajax({
    url:"js/json/film_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(filmResponse){

  var filmBlogTemplateString = $('#film_blog-template').html();

  var filmBlogTemplateRenderer = Handlebars.compile(filmBlogTemplateString);

  var filmOutput = filmBlogTemplateRenderer(filmResponse)
  ;
  $('#film_blog_details').html(filmOutput);
});
  });
  // var nothingBlogTemplateString = $('#nothing_blog-template').html();
  //
  // var nothingBlogTemplateRenderer = Handlebars.compile(nothingBlogTemplateString);
  //
  // var nothingOutput = nothingBlogTemplateRenderer(response)
  //
  // $('#nothing _blog-details').html(nothingO utput);
