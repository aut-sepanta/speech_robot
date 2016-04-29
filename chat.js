// Initially check that we are on a Chrome web browser, and redirect to error page if not
var google_chrome_not_used = false;
if (!('webkitSpeechRecognition' in window)) {
	google_chrome_not_used = true;
	}
if (google_chrome_not_used) {
	$('#chrome_required_popup').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
}

// Make reset button clickable
$('.reload_page').click( function() {
	location.reload();
})

// Make the 'about' button clickable
$('.nav_about').click( function() {
	$('#about_popup').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
})

// Make the 'about' popup clickable (it removes the popup)
$('#about_popup').click( function() {
	$('#about_popup').css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0});
})

function increaseChat(idOfClicked) {
			// append another speech bubble
			function botChatOptions() {

					latestIdString+='b';
					var string_without_spans = conversationData[latestIdString]
					var words = string_without_spans.split(' ')
					//console.log("Words: ", words)
					var string_with_spans = "";

					var code = '<div class = "speechBlock" id="speechBlock_' 
					+ chat_number 
					+ '" style="visibility: hidden"><p>&nbsp</p><div class="bubble bubbleBot" id="' 
					+ latestIdString 
					+ '"><p class="speech popper" data-popbox="pop_'
					+ latestIdString
					+ '">'
					+ string_without_spans
					+ '</p></div></div>'
					+ '<div id="pop_'
					+ latestIdString
					+ '" class="popbox"><p>'
					+ conversationDataTranslated[latestIdString]
					+ '</p></div>';


					var the_id = "#speechBlock_"+chat_number;
				
					$('.chatArea').append(code);

					audio_load(soundPrefix+'_'+latestIdString, latestIdString, 1);

					$(the_id).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});

					chat_number += 1

					$(document).scrollTop($(document).height());
				}


			function humanChatOptions() {

					var string_without_spans_1 = conversationData[latestIdString+'1']
					var words_1 = string_without_spans_1.split(' ')
					var string_with_spans_1 = "";
					for (var i=0; i<words_1.length; i++) {
						var span_word_span = '<span class="' + words_1[i].toLowerCase().replace(/[\.,-\/#!?\'$%\^&\*;:{}=\-_`~()]/g,"") + '_' + latestIdString+ '">' + words_1[i] + '</span>';
						
						string_with_spans_1 += span_word_span;
						string_with_spans_1 += " ";
					}

					var string_without_spans_2 = conversationData[latestIdString+'2']
					var words_2 = string_without_spans_2.split(' ')
					var string_with_spans_2 = "";
					for (var i=0; i<words_2.length; i++) {
						var span_word_span = '<span class="' + words_2[i].toLowerCase().replace(/[\.,-\/#!?\'$%\^&\*;:{}=\-_`~()]/g,"") + '_' + latestIdString+ '">' + words_2[i] + '</span>';
						
						string_with_spans_2 += span_word_span;
						string_with_spans_2 += " ";
					}

					var string_without_spans_3 = conversationData[latestIdString+'3']
					var words_3 = string_without_spans_3.split(' ')
					var string_with_spans_3 = "";
					for (var i=0; i<words_3.length; i++) {
						var span_word_span = '<span class="' + words_3[i].toLowerCase().replace(/[\.,-\/#!?\'$%\^&\*;:{}=\-_`~()]/g,"") + '_' + latestIdString+ '">' + words_3[i] + '</span>';
						
						string_with_spans_3 += span_word_span;
						string_with_spans_3 += " ";
					}

					// Determine widths of human speech bubbles
					var numberOfOptions;
					if (string_without_spans_2 == "") {
						numberOfOptions = 1;
						var class1 = "bubbleHumanOneFit";
						var class2 = "bubbleHumanHidden";
						var class3 = "bubbleHumanHidden";
					}
					else if (string_without_spans_3 == "") {
						numberOfOptions = 2;
						var class1 = "bubbleHumanTwoFit";
						var class2 = "bubbleHumanTwoFit";
						var class3 = "bubbleHumanHidden";
					}
					else {
						numberOfOptions = 3;
						var class1 = "bubbleHumanThreeFit";
						var class2 = "bubbleHumanThreeFit";
						var class3 = "bubbleHumanThreeFit";
					}

					var code = '<div class = "speechBlock" id="speechBlock_' 
					+ chat_number 
					+ '" style="visibility: hidden, float: left"><p>'
					
					+ '</p><div class="bubble bubbleHuman '+class1+'" id="' 
					+ latestIdString+'1' 
					+ '"><p class="speech popper" data-popbox="pop_'
					+ latestIdString+'1' 
					+ '">'
					+ string_with_spans_1
					
					+ '</p></div><div class="bubble bubbleHuman '+class2+'" id="' 
					+ latestIdString+'2' 
					+ '"><p class="speech popper" data-popbox="pop_'
					+ latestIdString+'2' 
					+ '">'
					+ string_with_spans_2
					
					+ '</p></div><div class="bubble bubbleHuman '+class3+'" id="' 
					+ latestIdString+'3' 
					+ '"><p class="speech popper" data-popbox="pop_'
					+ latestIdString+'3' 
					+ '">'
					+ string_with_spans_3
					+ '</p></div><p>&nbsp</div>'
					
					+ '<div id="pop_'
					+ latestIdString+'1' 
					+ '" class="popbox"><p>'
					+ conversationDataTranslated[latestIdString+'1']
					+ '</p></div>'

					+ '<div id="pop_'
					+ latestIdString+'2' 
					+ '" class="popbox"><p>'
					+ conversationDataTranslated[latestIdString+'2']
					+ '</p></div>'

					+ '<div id="pop_'
					+ latestIdString+'3' 
					+ '" class="popbox"><p>'
					+ conversationDataTranslated[latestIdString+'3']
					+ '</p></div>'

					;

					var the_id = "#speechBlock_"+chat_number;

					$('.chatArea').append(code);

					audio_load(soundPrefix+'_'+latestIdString+1, latestIdString+1, 0);
					audio_load(soundPrefix+'_'+latestIdString+2, latestIdString+2, 0);
					audio_load(soundPrefix+'_'+latestIdString+3, latestIdString+3, 0);

					$(the_id).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
					//console.log("Added in the speech bubble (human)")

					chat_number += 1
					//console.log("Increased chat number = ", chat_number)

					$(document).scrollTop($(document).height());
				}

				//Show bot chat speech bubble
				botChatOptions()

				//Hide the 'start recording' button
				$("#start_button").animate({opacity:'0'});

				// Check if chat is finished
				if (chat_number == chat_limit) {
					// The chat is finished, load the finish screen
					setTimeout( function() {
						finishChat()
					} ,5000);
				}
				
				else {
					// Load the human's chat options, and initialise the 'popper' popup code
					setTimeout( function() {
						humanChatOptions();
						popperInit();
					} ,3500);

					// Show the 'start recording' button
					setTimeout( function() {
						$("#start_button").animate({opacity:'1'});
					} ,3800);
					
				}
				

			};

// When chat is finished
function finishChat() {
	playOneSound('chime_big');
	$('#congratulations_popup').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
	$(document).scrollBottom($(document).height());	

}

// This is called from google_speech once the user has entered their voice
function continueChat() {
		  	
		  	if (chat_number == chat_limit) finishChat();

			else {
					var correct_options_array = [];
					var idOfClicked;  // will be the id of the option selected by the user's voice (not actually clicked..)
					
					for (var i=1; i<=3; i++) {
						// remove punctuation from actual speech bubbles
						var spoken_clean_string = conversationData[latestIdString+i].toLowerCase().replace(/[\.,-\/#!?$%\^&\*;:{}=\-_`~()]/g,"");
						
						// compare to final_transcript (what the user actually said) to see if identical
						if (spoken_clean_string == final_transcript) {
							idOfClicked = i;
							playOneSound('chime');
							latest_score = increaseScore(latest_score, 10);

							// If whole paragraph is correct, select all spans inside it, and add the class of 'correct'
							$('#'+latestIdString+idOfClicked+' span').addClass('correct');

						}
						correct_options_array.push(spoken_clean_string.split(' '));
						
					}

					if (typeof idOfClicked === "undefined")  // i.e. if the user didn't have a PERFECT match of their voice to an option
					{ 
						var final_transcript_array = final_transcript.split(' ');
						var scores = [0,0,0]

						function include(arr,obj) {
    						return (arr.indexOf(obj) != -1);
    					}

    					var score_index = 0;
						correct_options_array.forEach( function(sentence) {
						    sentence.forEach( function(word) {
						    	if (include(final_transcript_array, word)) {
						    		scores[score_index] += 1;

						    		// Word is given the class of 'correct'
						    		$('.' + word.replace(/[\.,-\/#!?\'$%\^&\*;:{}=\-_`~()]/g,"") + '_' + latestIdString).addClass('correct');
						    		//console.log("The selector was:",'#' + word + '_' + latestIdString + ' span')

						    	}
						    })
							// Normalise score according to how many words in the original
						    scores[score_index] = scores[score_index]/correct_options_array[score_index].length
						    score_index += 1;
						});

						//console.log("The scores for each index are:", scores)
						//console.log("The chosen index is: ",scores.indexOf(Math.max.apply(window,scores)))
						idOfClicked = scores.indexOf(Math.max.apply(window,scores))+1;
						playOneSound('chime');
						latest_score = increaseScore(latest_score, 5);

					}
					
					latestIdString+=idOfClicked;

					// Turn an element green here
					$("#"+latestIdString).animate({opacity:'1'});

					// Leave a one second gap, before showing the next Bot bubble, followed by the next human bubble
					setTimeout ( function () { increaseChat(latestIdString); }, 1000 );
			}
		}