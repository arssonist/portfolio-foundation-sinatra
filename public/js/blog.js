$(document).ready(function(){

  var blogTemplateString = $('#blog-template').html();
  // console.log(workTemplateString)
// // // 2.Compile the string into a function
  var workTemplate = Handlebars.compile(workTemplateString);
//       // console.log(workTemplate)
// // // 3.Input response into the function
  var output = workTemplate(response)
  // console.log(output)
//
// //4.append to page
  $('#work-details').html(output);

});
