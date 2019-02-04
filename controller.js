const dictionary=require("oxford-dictionary");
const readline=require("readline");

var id="4c26b461";
var key="3279bd34fd2cf8e5c9ec096b10432439";

var config = {
    app_id : id,
    app_key : key,
    source_lang : "en"
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const word=['largesse','portend','senescence','handsel','rapporteur','mayhem','circumvent','verbose','sinew','mordant',
			'valorous','ghost','alien','memento','susurrous','chapel','henchman','impromptu','occlusion','yahoo','ritzy',
			'portend','abominable','sciential','perspicacious','connive','giridiron','cloister','intestine','coeval','ingratiate',
			'mentor','symposium','agog','slimsy','pacify','canicular','regardless','protechnics','ingenue','opportune','proficient'
			];
const playWords=['actor','artist','builder','chef','cashier','dentist','developer','doctor','barber'];

var dict=new dictionary(config);


function synonyms(req,res){
var lookup = dict.synonyms(req.params.word);

  lookup.then(function(res) {
      console.log("Synonyms:");
      var synonyms=res.results["0"].lexicalEntries["0"].entries["0"].senses["0"].synonyms;
      
      synonyms.forEach((ob)=>{
      	console.log(ob.text);
      });



  },
  function(err) {
      console.log(err);
  });

}

function definition(req,res){
	var defi=dict.definitions(req.params.word);
	 defi.then(function(res) {
      console.log("Definition:");
      var defini=res.results["0"].lexicalEntries["0"].entries["0"].senses["0"];
      
        defini.definitions.forEach((ob)=>{
        console.log(ob);
      });

 	 },
 	 function(err) {
      console.log(err);
  });

}


function antonyms(req,res){
	var ant=dict.antonyms(req.params.word);
	ant.then(function(res) {
      var ant=res.results["0"].lexicalEntries["0"].entries["0"].senses["0"];
      console.log("Antonyms :" + ant.antonyms["0"].text);
    },
    function(err)
    {console.log(err);});
}


function example(req,res){
	var ex=dict.sentences(req.params.word);
	ex.then(function(res){
		
    console.log("Example Sentence:");
		var sent=res.results["0"].lexicalEntries["0"].sentences;
		sent.forEach(function(ob){
			console.log(ob.text);
		})
	},function (err){console.log(err)});
}

function wordOfDay(req,res)
{
	var index=Math.floor(Math.random()*40)+1;
	console.log("Word Of The Day: "+ word[index]);
  req.params.word = word[index];
  definition(req, res);
  synonyms(req, res);
  antonyms(req, res);
  example(req, res);
}

function wordAllDetails(req, res){
  console.log("All Word Details:");
  definition(req, res);
  synonyms(req, res);
  antonyms(req, res);
  example(req, res);
}

var ch;
function wordPlay(req,res){
	console.log("Word Play:");
	var index=Math.floor(Math.random()*8)+1;
	req.params.word=playWords[index];
	var c=0;
	definition(req,res);
	while(c==0){
	c=hello(req,res);
	}
		
}
function hello(req,res)
{	var c=0;
	
	rl.on('line', (input) => {
		
  	if(input==req.params.word)
  	{
  		console.log("Correct answer");
  		rl.close();
  		return 1;
  	}
  	else{
  	
  	 if(input==1)
  	{	console.log("Enter again");
  		return 0;
  	}
  	else if (input==2)
  	{
  		console.log("Hint:");
  		synonyms(req,res);
  		
  		return 0;
  	}
  	else if(input==3)
  	{
      console.log("Word: "+req.params.word);
  		wordAllDetails(req,res);
  		rl.close();
  		return 1;
  	}
  	else
  		{console.log("Wrong Answer enter a choice");return 0;}
}
  	rl.close();
	});

	
	
}


module.exports={synonyms,definition,antonyms,example,wordOfDay,wordAllDetails,wordPlay}