$(document).ready(function(){
  // $('#work-details').on("load",function(){
    // alert("test");
    $.ajax({
      url:"js/json/my_work.json",
      method:'GET',
      data:{},
      dataType:'json'
    }).done(function(response){

// // // 1.Get the html from template in a string
      var workTemplateString = $('#work-template').html();
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

});
