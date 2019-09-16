$("#search").on("click", function(e){
    e.preventDefault()

    var num = $(".form-control").val();

    var search = $("#searchbox").val().trim();
    var apiKey = "iF5eTmwXXmZNmdiHukJAtAZ3VOdB2OXW"

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +"&api-key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response.response.docs[0].headline)
        var results = response.response.docs;
        $(".articles-here").html("");

        for (var i = 0; i < num; i++){
            var head = $("<h4>")
            head.text(results[i].headline.main)
            $(".articles-here").prepend(head);
            $(".articles-here").prepend("<br></br>")
        };
    })

})


