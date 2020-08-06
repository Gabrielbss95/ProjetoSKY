$( async function(){
    
    //$('body').css("font-size","8pt");

    const dados = await $.get("https://sky-frontend.herokuapp.com/movies");

    const highlights = dados[0].items;
   
    var selected = 2;
    highlights.forEach((highlight, index)=> {
        var conteudo =  $("#highlights").html(); 
        $("#highlights").html(conteudo + "<img width='500px' class="+(index==selected?"'imgselected'":'') +" height='300px' src='" + highlight.images[0].url + "'/>");
    });
   
    let acaoaventura = []
    let terror = []
    let comedia = []

    dados[2].movies.forEach(element => {
        
        if(element.categories.includes('Terror'))
            terror.push(element);
        if(element.categories.includes('Ação e Aventura'))
            acaoaventura.push(element);
        if(element.categories.includes('Comédia'))
            comedia.push(element);
    
    });

    acaoaventura.forEach(filme=>{
        var conteudo =  $("#acaoeaventura").html(); 
        $("#acaoeaventura").html(conteudo + "<div class='box'><img width='190px' height='240px' src='" + filme.images[0].url + "'/></div>");
    });

    comedia.forEach(filme=>{
        var conteudo =  $("#comedia").html(); 
        $("#comedia").html(conteudo + "<div class='box'><img width='190px' height='240px' src='" + filme.images[0].url + "'/></div>");
    });

    terror.forEach(filme=>{
        var conteudo =  $("#terror").html(); 
        $("#terror").html(conteudo + "<div class='box'><img width='190px' height='240px' src='" + filme.images[0].url + "'/></div>");
    });

    
});

function scrollRightSlide(id) {
    $(id).animate({scrollLeft: $(id).scrollLeft()+500});
}

function scrollLeftSlide(id) {
    $(id).animate({scrollLeft: $(id).scrollLeft()-500});
}
