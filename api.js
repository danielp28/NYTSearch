$("#SEARCHBUTTON").on("click", function(){

    var search = $("#SEARCHBOX").val().trim();
    var apiKey = "iF5eTmwXXmZNmdiHukJAtAZ3VOdB2OXW"

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search +" &api-key=" + apiKey;

   


    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        var results = response.data;

        for (var i = 0; i < results.length; i++){
            var newDiv = $("<div>");
            var head = $("<h1>").text(results.headline)

            newDiv.append(head);
            $("#AREAOFPAGETOAPPEND").prepend(newDiv);

        }




    })

})


