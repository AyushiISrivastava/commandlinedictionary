const controller=require('./controller.js');
var synonyms=controller.synonyms;
var definition = controller.definition;
var antonyms=controller.antonyms;
var example=controller.example;
var randomWord=controller.wordOfDay;
var wordAllDetails=controller.wordAllDetails;
var wordplay=controller.wordPlay;

module.exports =function endpoints(app){
	app.route("/dictsyn/:word")
		.get(synonyms);
	app.route("/dictdef/:word")
		.get(definition);
	app.route("/dictant/:word")
		.get(antonyms);
	app.route("/dictex/:word")
		.get(example);
	app.route("/dict")
		.get(randomWord);
	app.route("/dict/:word")
		.get(wordAllDetails);
	app.route("/dictplay")
		.get(wordplay);
}


