const controller=require('./controller.js');
var synonyms=controller.synonyms;
var definition = controller.definition;
var antonyms=controller.antonyms;
var example=controller.example;
var randomWord=controller.wordOfDay;
var wordAllDetails=controller.wordAllDetails;


module.exports =function endpoints(app){
	app.route("/dictsynonym/:word")
		.get(synonyms);
	app.route("/dictdefinition/:word")
		.get(definition);
	app.route("/dictantonym/:word")
		.get(antonyms);
	app.route("/dictexample/:word")
		.get(example);
	app.route("/dict")
		.get(randomWord);
	app.route("/dictall/:word")
		.get(wordAllDetails);
}


