$(document).ready(function(){
  $('#work-details').click(function(){
    // alert("test");
    $.ajax({
      url:"js/my_work.json",
      method:'GET',
      data:{},
      dataType:'json'
    }).done(function(response){
      // console.log(response)
// // Get the html from template in a string
      var workTemplateString = $('#work-template').html();
      console.log(workTemplateString)
// // Compile the string into a function
      var workTemplate = Handlebars.compile(workTemplateString);
      console.log(workTemplate)
// // Input response into the function
      var output = workTemplate(response)
      console.log(output)

//
//       $('#work-details').html(output);
    });

  });

});
