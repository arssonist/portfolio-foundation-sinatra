$(document).ready(function(){

  $.ajax({
    url:"js/json/code_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(codeResponse){
// code blog
    var codeBlogTemplateString = $('#code-blog-template').html();
    //
    var codeBlogTemplateRenderer = Handlebars.compile(codeBlogTemplateString);
    var codeOutput = codeBlogTemplateRenderer(codeResponse)

    $('#code-blog-details').html(codeOutput);
  });

  $.ajax({
    url:"js/json/film_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(filmResponse){

    var filmBlogTemplateString = $('#film-blog-template').html();

    var filmBlogTemplateRenderer = Handlebars.compile(filmBlogTemplateString);

    var filmOutput = filmBlogTemplateRenderer(filmResponse)
    ;
    $('#film-blog-details').html(filmOutput);

    console.log(filmResponse)
});



  $.ajax({
    url:"js/json/nothing_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(codeResponse){

    var nothingBlogTemplateString = $('#nothing-blog-template').html();

    var nothingBlogTemplateRenderer = Handlebars.compile(nothingBlogTemplateString);

    var nothingOutput = nothingBlogTemplateRenderer(codeResponse)

    $('#nothing-blog-details').html(nothingOutput);
  });
});
