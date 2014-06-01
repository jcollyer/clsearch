
  // Parses returned response and extracts
  // the title, links, and text of each news story.
    function get_items(o){
      var items = o.query.results.RDF.item;
      var output = '';
      var number_of_items=items.length;
      for(var i=0;i<number_of_items;i++){
        var title = items[i].title;
        var link = items[i].link;
        var desc = items[i].description;
        output += "<h3><a href='" + link + "'>link</a>"+title+"</h3>" + desc + "<hr/>";
      }
      // Place news stories in div tag
      document.getElementById('results').innerHTML = output;
    }

$(document).ready(function(){
  $("#query").click(function(){
    var query = "bike"
    var query_code = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20craigslist.search%20where%20location%3D%22sfbay%22%20and%20type%3D%22sss%22%20and%20query%3D%22"+query+"%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=get_items"
    $("#scrip_code").attr({ src: query_code });
  });

});
