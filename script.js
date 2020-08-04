$( function(){
    $("#filmes").css("color","red");
    $("#assistir").css("color","red");
    $.get("https://sky-frontend.herokuapp.com/movies",function(dados){
             /*console.log(dados);  */
        dados[2].movies.forEach(element => {
            console.log(element.images[0]);
              var conteudo =  $("#container").html(); 
              $("#container").html(conteudo + "<div class='box'><img width='190px' height='240px' src='" + element.images[0].url + "'/></div>");
            

            
       
        });
       /*dados[2].movies.forEach(element => {
                 console.log(element.categories);
                    var genero = $("#generos").html();
                    $("#generos").html(genero + "<div class='box'><img width='190px' height='240px' src='"+ element.images[0].url + "'/></div>");
        });*/
    });
    
});