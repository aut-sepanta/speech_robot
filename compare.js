function continueChat()
 {
	var stringArraydemo = [
	"command undefine",
	"kitchen bring coke",
	"Could please answer some question",
	"Would you find my drill please",
	"Please bring coffee mate",
	"whatever want"
	];
	var stringArraydemoResult = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5"
	];
	
	var correct_options_array = [];
	var idOfClicked;  // will be the id of the option selected by the user's voice (not actually clicked..)
	var QstringArray = [ "please repeate agian",
						"Which highest mountain: Earth Mars?",
						"What small indentations golf ball called?",
						"Which city largest population?",
						"Which country claims world tallest building?",
						"With which device earthquakes recorded?",
						"Who was once known  King Soul, now the Godfather Soul?",
						"Name Yellow Teletubby.",
						"What Tiger Woods first name?",
						"What Alpha Centauri Sirius?",
						"Which actress starred  High Society ?",
						"which war was Operation Desert Storm?",
						"Which 60s rock group recorded Lighter Shade  Pale?" ,
						"Clean, Jerk, Snatch terms used which activity?",
						"Which country bordered by both Atlantic Indian Oceans?",
						"Which insect accurately indicates air temperature?",
						"which business richest man  world?" ,
						"How many men have walked  moon?", 
						"which country would one find 8 world 10 highest mountain?",
						"Which world second-largest country land area?",
						"What most common blood type humans?",
						"first television set was sold which year?" , 
						"name which area Pacific means many islands?",
						"What only word English ending letters mt?",
						"There only four words English language which end dous. Two tremendous stupendous. Name other two.",
						],
						result;
						
						
						var QstringArrayResult = [ "0",
						"your question is Which has the highest mountain: Earth or Mars? and answer is Mars",
						"your question is What are the small indentations on a golf ball called? and answer is dimples",
						"your question is Which city has the largest population? and answer is Tokyo",
						"your question is Which country claims the world's tallest building? and answer is Malaysia, the twin Petronas Towers at 1,483 feet.",
						"your question is With which device are earthquakes recorded? and answer is seismograph",
						"your question is Who was once known as the King of Soul, and now as the Godfather of Soul? and answer is James Brown",
						"your question is Name the Yellow Telly Tubby. and answer is La La",
						"your question is What is 'Tiger' Woods's first name? and answer is Eldrick",
						"your question is What are Alpha Centauri and Sirius? and answer is stars",
						"your question is Which actress starred in High Society ? and answer is Grace Kelly",
						"your question is In which war was Operation Desert Storm? and answer is Gulf War",
						"your question is Which 60s rock group recorded Lighter Shade of Pale? and answer is Procol Harum" ,
						"your question is Clean, Jerk, and Snatch are terms used in which activity? and answer is weight lifting",
						"your question is Which country is bordered by both the Atlantic and Indian Oceans? and answer is Republic of South Africa",
						"your question is Which insect accurately indicates the air temperature? and answer is cricket",
						"your question is In which business is the richest man in the world? and answer is computer software" ,
						"your question is How many men have walked on the moon? and answer is four", 
						"your question is In which country would one find 8 of the world's 10 highest mountain? and answer is Nepal",
						"your question is Which is the world's second-largest country in land area? and answer is Canada",
						"your question is What is the most common blood type in humans? and answer is Type O",
						"your question is The first television set was sold in which year? and answer is 1928" , 
						"your question is The name of which area in the Pacific means many islands? and answer is Polynesia",
						"your question is What is the only word in English ending in the letters mt? and answer is dreamt",
						"your question is There are only four words in the English language which end in dous. Two are tremendous and stupendous. Name the other two. and answer is horrendous or hazardous",
						];
						
						
						if(mode=='qstart'){
							stringArray=QstringArray;
							stringArrayResult=QstringArrayResult;
							//mode='idle';
							}
							else
							{
							stringArray=stringArraydemo;
							stringArrayResult=stringArraydemoResult;
							//mode='idle';
							}
							
					var wordString=	finalTranscript1 ;
					var wordString = wordString.toLowerCase().replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
					//console.log("wordString:"+wordString);
					
						for (var i=0; i<=(stringArray.length)-1; i++) 
						{
						// remove punctuation from actual speech bubbles
						var spoken_clean_string = stringArray[i].toLowerCase().replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"");;
						//console.log("spoken_clean_string:"+spoken_clean_string+ i);
						if (spoken_clean_string[i] == wordString) 
							{	
						idOfClicked = i;
						//console.log("idOfClicked:"+idOfClicked);
							}
						correct_options_array.push(spoken_clean_string.split(' '));
						//console.log("correct_options_array:"+correct_options_array);
						}
									if (typeof idOfClicked === "undefined")  // i.e. if the user didn't have a PERFECT match of their voice to an option
									{ 
									//console.log("idOfClicked:"+idOfClicked);
									var final_transcript_array = wordString.split(' ');
									var scores = [];
									for (var i=0; i<=(stringArray.length)-1; i++)
									{
									scores[i]=0;
									}
										//console.log(scores);
										//console.log("final_transcript_array:"+final_transcript_array);
										function include(arr,obj) {
									
											return (arr.indexOf(obj) != -1);
										}
										
										var score_index = 0;
										correct_options_array.forEach( function(sentence) {
											sentence.forEach( function(word) {
												if (include(final_transcript_array, word)) {
													scores[score_index] += 1;
												}
											})
											// Normalise score according to how many words in the original
											scores[score_index] = scores[score_index]/correct_options_array[score_index].length
											score_index += 1;
										});

										console.log("The scores for each index are:", scores);
										//console.log("The chosen index is: ",scores.indexOf(Math.max.apply(window,scores)));
										if(Math.max.apply(window,scores)>0.2)
										{
										Math.max.apply(window,scores)
										idOfClicked = scores.indexOf(Math.max.apply(window,scores))+1;
										//console.log("idOfClicked:", idOfClicked);
										$('#alireza').html(idOfClicked +"    " +stringArrayResult[idOfClicked-1] );
										finalTranscriptcmd = stringArrayResult[idOfClicked-1];
										//finalTranscriptcmd = idOfClicked-1;
										//console.log("finalTranscriptcmd:", finalTranscriptcmd);
										}
									}		

								
///////////////////////////////////////////////////////			
	} 
						  
