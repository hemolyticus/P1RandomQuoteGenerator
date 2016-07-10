
//quote list variable

var randomQuote;
var quoteList= [
{quote:"If you do not make mistakes", source: "Frank Wilczek"}, 
{quote:"Be yourself everyone else is already taken.", source:"Oscar Wilde"}, 
{quote:"The dictionary is the only place that success comes before work", source:"Vince Lombardi"}, 
{quote:"It is never too late to be what you might have been", source:"George Eloit" }, 
{quote:"If opportunity doesn't knock build a door", source:"Milton Berle"}
];

function getRandomQuote()
{
	randomQuote= quoteList[Math.floor(Math.random() * 4) + 1];
	
    return randomQuote;
    

	
}

function printQuote()
{
	var generatedQuote  = getRandomQuote();
    var message = '<p class="quote">' + generatedQuote.quote + '</p>';
       message +='<p class="source">' + generatedQuote.source + '</p>';
       message += '<br><br>';
    var div= document.getElementById("quote-box");
    div.innerHTML = message;
    
}



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

