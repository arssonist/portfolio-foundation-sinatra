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
    url:"js/json/single_test.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(filmResponse){
    // console.log(filmResponse);

var filmBlogTemplateString = $('#film_blog-template').html();
  // console.log(filmBlogTemplateString)

var filmBlogTemplateRenderer = Handlebars.compile(filmBlogTemplateString);

// console.log(filmBlogTemplateRenderer)

//
var output = filmBlogTemplateRenderer(filmResponse)
;
console.log(output)
//
  $('#film_blog_details').html(output);
});
  });
  // var nothingBlogTemplateString = $('#nothing_blog-template').html();
  //
  // var nothingBlogTemplateRenderer = Handlebars.compile(nothingBlogTemplateString);
  //
  // var nothingOutput = nothingBlogTemplateRenderer(response)
  //
  // $('#nothing _blog-details').html(nothingO utput);
