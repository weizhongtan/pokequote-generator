// RANDOM QUOTE GENERATOR
var newQuoteIndex = 0;
var clickCount = 0;
var quotesLibrarySize = generateQuotes()[0];
var quotes = generateQuotes()[1];
var usedQuotes = {};

// generate a random number and return the html markup as a string
function getNewQuote() {
  newQuoteIndex = Math.floor(Math.random()*quotesLibrarySize)
  var quote = quotes[newQuoteIndex];
  var quoteString = '<p>"'+quote.quote+'"</p>'+"<p></p><p><em>"+quote.person+"</em></p><p><a id='tweet' href='http://twitter.com/home/?status="+quote.quote+" -"+quote.person+" from http://codepen.io/wztan/full/MaxbjE/"+"' target='blank'>Tweet This Quote<a/></p>";
  return quoteString;
}

// when document is ready, generate a quote
$(document).ready(function() {
  $("#quote1").html(getNewQuote());
  // log quote
  usedQuotes[newQuoteIndex] = quotes[newQuoteIndex];
});

$("#quote2").hide();

// when the button is clicked, generate a different quote from the previous one
$("#quote-changer").click(function() {
  // reset usedQuotes if all available quotes have been used
  if (Object.keys(usedQuotes).length === quotesLibrarySize) {
    usedQuotes = {};
  }

  // keep randomising until a new quote is found, that hasn't been used yet
  while (usedQuotes.hasOwnProperty(newQuoteIndex)) {
    var quote = getNewQuote();
  }  

  // every other click will alternate between the two elements to produce a fading effect
  clickCount++;
  if (clickCount%2==1) {
    $("#quote2").html(quote);
    $("#quote2").fadeIn(500);
    $("#quote1").fadeOut(500);
  } else {
    $("#quote1").html(quote);
    $("#quote1").fadeIn(500);
    $("#quote2").fadeOut(500);
  }
  usedQuotes[newQuoteIndex] = quotes[newQuoteIndex];
});

// quote library
function generateQuotes() {
  var quotes = [
  {quote: "I’ve been pondering lately...how much longer will I be wearing shorts?", person: "Youngster"},
  {quote: "Are you a boy? Or are you a girl?", person: "Professor Oak"},
  {quote: "Don't try anything funny in the dark!", person: "A lass in dark cave"},
  {quote: "Those whose memories fade seek to carve them in their hearts...", person: "Signpost"},
  {quote: "If you need to make a difficult decision and you let someone else decide for you, you will regret it, no matter how it turns out.", person: "Pokemon Trainer"},
  {quote: "Technology is incredible! You can now store and recall items and Pokemon as data via PC!", person: "Fat guy"},
  {quote: "I like feisty kids like you", person: "Sailor"},
  {quote: "My Rattata is the top percentage of all Rattata!", person: "Youngster Joey"},
  {quote: "I choose you!", person: "Ash Ketchum, probably"},
  {quote: "Smell you Later!", person: "Gary Oak"},
  {quote: "Hehehe! This gym is full of women!", person: "Perverted old man"},
  {quote: "This is my grandson. He’s been your rival since you were a baby. …Erm, what is his name again?", person: "Professor Oak"},
  {quote: "We hope to see you again!" , person: "Nurse Joy"},
  {quote: "I like shorts! They’re comfy and easy to wear!", person: "Youngster"},
  {quote: "Develop amnesia conveniently and forget everything you heard!", person: "Team Rocket Grunt"},
  {quote: "Mostly I breathe fire, but want to exchange numbers?", person: "Firebreather Wait"},
  {quote: "May I please have your phone number? We should chat about Professor Oak. I’m sure it will be loads of fun!", person: "School Kid Chad"},
  {quote: "If the Pokemon I liked were there, I’d go anywhere. That’s what a real trainer does.", person: "Cool Trainer Emma"},
  {quote: "I’m sure that you will be dazzled by my mentor’s breathtakingly elegant battle style.", person: "Wallace"},
  {quote: "We need Poké balls! P-O-K-accent E balls!", person: "Barry"},
  {quote: "This brat’s tough. Tougher than I can put into words, and I know a lot of words.", person: "Team Galactic Grunt"},
  {quote: "Please make sure the bed is empty before getting in it!", person: "Sign in Team Galactic HQ"},
  {quote: "Getting wrapped up in worries is bad for your body and spirit. That’s when you must short out your logic circuits and reboot your heart.", person: "Elesa"},
  {quote: "They’re not here. Let’s ride the Ferris wheel and see if we can spot them. I love Ferris wheels… The circular motion… The mechanics… They’re like collections of elegant formulas.", person: "N"},
  {quote: "Many different values mix together, and the world becomes gray… That is unforgivable! I will separate Pokémon and people, and black and white will be clearly distinct! Only then will Pokémon become perfect beings!", person: "N"},
  {quote: "You can say whatever you want. A Pokémon, even if it’s revered as a deity, is still just a Pokémon.", person: "Ghetsis"},
  {quote: "Like uncooked dough, my Pokémon are sticky!", person: "Trainer in Battle Subway"},
  {quote: "These are not shorts! These are half-pants!", person: "Youngster Kevin"},
  {quote: "You're not wearing shorts! What's wrong with you?", person: "Youngster"},
  {quote: "Don't touch the poster at the Game Corner! There's no secret switch behind it!", person: "Rocket Grunt"},
  {quote: "Dream your dream! Follow the path of truth to make that dream a reality, and someday you will achieve all that you dreamed of! Well, then... Farewell!", person: "N"},
  {quote: "Dream your dream! Then, pursue the ideals to make that dream a reality, and someday you will achieve all that you dreamed of! Well then... Farewell!", person: "N"},
  {quote: "Wobbuffet!", person: "Wobbuffet"}
  ];

  // convert array to hashtable
  var q = {};
  for (var i = 0; i < quotes.length; i++) {
    q[i] = quotes[i]
  }

  return [quotes.length, q];
}

//twitter button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');