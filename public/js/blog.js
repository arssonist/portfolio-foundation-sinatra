$(document).ready(function(){

  $.ajax({
    url:"js/json/blog_posts.json",
    method:'GET',
    data:{},
    dataType:'json'
  }).done(function(response){

  var blogTemplateString = $('#blog-template').html();
  // console.log(workTemplateString)
// // // 2.Compile the string into a function
  var blogTemplateRenderer = Handlebars.compile(blogTemplateString);
//       // console.log(workTemplate)
// // // 3.Input response into the function
  var output = blogTemplateRenderer(response)
  //   // console.log(output)
// //
// 4.append to page
  $('#blog-details').html(output);
  });
});
