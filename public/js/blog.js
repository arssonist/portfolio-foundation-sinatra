$(document).ready(function(){

  $.ajax({
    url:"js/json/code_blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(response){

  var codeBlogTemplateString = $('#code_blog-template').html();
  // console.log(workTemplateString)
// // // 2.Compile the string into a function
  var codeBlogTemplateRenderer = Handlebars.compile(codeBlogTemplateString);
//       // console.log(workTemplate)
// // // 3.Input response into the function
  var output = codeBlogTemplateRenderer(response)
  //   // console.log(output)
// //
// 4.append to page
  $('#code_blog-details').html(output);


  var filmBlogTemplateString = $('#film_blog-template').html();

  var filmBlogTemplateRenderer = Handlebars.compile(filmBlogTemplateString);

  var output = filmBlogTemplateRenderer(response)

  $('#nothing_blog-details').html(output);
  var nothingBlogTemplateString = $('#nothing_blog-template').html();

  var nothingBlogTemplateRenderer = Handlebars.compile(nothingBlogTemplateString);

  var output = nothingBlogTemplateRenderer(response)

  $('#nothing_blog-details').html(output);

  });
});
