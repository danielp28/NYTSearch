$("#search").on("click", function(e){
    e.preventDefault()
    console.log("click")

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

        for (var i = 0; i < results.length; i++){
            // var newDiv = $("<div>");
            var head = $("<h1>")
            head.text(results[i].headline.main)

            // newDiv.append(head);
            $(".articles-here").prepend(head);

        }




    })

})


