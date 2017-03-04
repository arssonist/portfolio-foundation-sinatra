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

// ALL FILMS
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
    // console.log(filmResponse.film_posts)


      // $('.film-image-wrap').on('mouseover',function(event){

      $('.film-image-wrap').on('click',function(event){
      // event.preventDefault();

      $('.film-show-image').removeClass('film-show-image')

      $(this).toggleClass('film-show-image')




      var filmUrl = $(this).attr('href');
      console.log(filmUrl)

      var image = $('img', this).attr("src")
      console.log(image)

    // $('.film-image-url').empty().append(image)


    // var p = $(filmUrl).text()
    // console.log(p)

    // var filmString = $(p).append(filmUrl)
    // console.log(filmString)
    // $(filmString).appendTo('#film-blog-details')


    // console.log(filmResponse.film_posts.this)
      //
      // $.ajax({
      //   url:$(this).attr('href'),
      //   method:'GET',
      //   dataType:'JSON'
      // }).done(function(response){
      //   alert('test')
      //
      // //   var second_container = container.append(response)
      // //   ('#film-blog-details')
      // //
      // });
      // var priceParagraph = $('<p>').html('Price: ').append(priceStrong);

  });
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
