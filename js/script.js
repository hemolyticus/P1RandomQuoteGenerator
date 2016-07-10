
/*
Variable name: randomQuote
Type: Array
About: This will hold the index of the quote from the quoteList 
*/ 
var randomQuote;

/*
Variable name: delayTime
Type: int
About: This will hold the 30 second delay
*/ 
var delayTime=30000;


var previouslydisplayedQuotes;
/*
Variable name: quoteList
Type: Array
Properties: quote, source, citation, year
About: Contains the list of quotes to be used in the application
*/
var quoteList= [
{quote:"A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort", source: "Herm Albright", citation: "Reader's Digest", year:"1995", tags: "#Attitude"}, 
{quote:"Wherever you go, no matter what the weather, always bring your own sunshine. ", source:"Anthony J. D' Angelo", source: "The College Blue Book", tags: "#Attitude"}, 
{quote:"To find someone who will love you for no reason, and to shower that person with reasons, that is the ultimate happiness.", source:"Robert Brault", tags: "#Love"}, 
{quote:"It is never too late to be what you might have been", source:"George Eloit", tags: "#Action"}, 
{quote:"If opportunity doesn't knock build a door", source:"Milton Berle", tags: "#Opportunity"},
{quote: "Jumping at several small opportunities may get us there more quickly than waiting for one big one to come along.", source: "Hugh Allen", tags: "#Opportunity"},
{quote: "Opportunities fly by while we sit regretting the chances we have lost, and the happiness that comes to us we heed not, because of the happiness that is gone.", source:"Jerome K. Jerome", citation: "The Idle Thoughts of an Idle Fellow", year: "1889",  tags: "#Opportunities"},
{quote: "You've got a lot of choices. If getting out of bed in the morning is a chore and you're not smiling on a regular basis, try another choice.", source: "Steven D. Woodhull",  year: "1999", tags: "#Choices"},
{quote: "Shoot for the moon. Even if you miss, you'll land among the stars.", source: "Les Brown", tags: "#Goals"},
{quote: "In response to those who say to stop dreaming and face reality, I say keep dreaming and make reality.", source: "Kristian Kan", citation: "Rich By 25", tags: "#Dreams"},
{quote: "Don't let anyone steal your dream. It's your dream, not theirs.", source: "Dan Zadra", tags: "#Dream"},
{quote: "To the question of your life, you are the only answer. To the problems of your life, you are the only solution.", source: "Jo Coudert", citation: "Advice From A Failure", tags: "#Failure"},
{quote: "We are keenly aware of the faults of our friends, but if they like us enough it doesn’t matter.", source: "Mignon McLaughlin",  year: "1960", tags: "#Friendship"},
{quote: "Success is 10% inspiration, 90% last-minute changes.", source: "From a billboard advertisement", tags: "#Success"},
{quote: "I don't care how much power, brilliance or energy you have, if you don't harness it and focus it on a specific target, and hold it there you're never going to accomplish as much as your ability warrants.", source: "Zig Ziglar", tags: "#Determination"},
{quote: "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.", source: "Henry David Thoreau", year: "1854", tags: "#Goals"}
];


/*
Function name: getRandomQuote
Parameters: None
Returns?: randomQuote
About: Calculates  a random number using the length of the array.
       Uses the random number generated  as  the index of the  quoteList to generate a random quote.
       Assigns the generated quote to a variable  called randomQuote and return the variable.
*/
function getRandomQuote()
{
	randomQuote= quoteList[Math.floor(Math.random() * quoteList.length) ];
	return randomQuote;
}

/*
Function name: printQuote()
Parameters: None
Returns?: None
About: Calls the getRandomQuote() method which returns a randomQuote object
       The return random quote object  gets assigned to a variable called generated quote
       Concatenates  strings and object properties which is assigned to a variable called message
       Checks whether quote has citation or year property and if does add it to the message variable
       Calls the getElementById() method that uses the ID attribute  called "quote-box" and asssigns the returned element to a variable called div
       Sets the innerHTML property  with the message
       Calls the generateRandomBackgroundColour() method
*/

function printQuote()
{

	var generatedQuote  = getRandomQuote();

	previouslydisplayedQuotes=generatedQuote;
	console.log(previouslydisplayedQuotes);
	
    var message = '<p class="quote">' + generatedQuote.quote + '</p>';
       message +='<p class="source">' + generatedQuote.source ;
       if (generatedQuote.hasOwnProperty("citation"))
        {
        	message+='<span class="citation">' + generatedQuote.citation + '</span>';
        };
        if (generatedQuote.hasOwnProperty("year"))
        {
        	message+='<span class="year">' + generatedQuote.year + '</span>';
        };
        if (generatedQuote.hasOwnProperty("tags"))
        {
        	message+='<span class="tag">' + generatedQuote.tags + '</span>';
        };
        message +="</p>";
           
    var div= document.getElementById("quote-box");
    div.innerHTML = message;
    generateRandomBackgroundColour();

    
}

/*
Function name: generateRandomBackgroundColour()
Parameters: None
Returns?: None
About: Generates a random hexadecimal string and assigns it to a variable color
       Assigns the colour to the style background property of the attribute called body-box
*/


function generateRandomBackgroundColour()
{
	
    color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.getElementById('body-box').style.background = color;

}



setInterval(printQuote, delayTime);



// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

