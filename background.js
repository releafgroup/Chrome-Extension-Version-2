/*THIS CODE IS FOR GETTING THE NUMBER OF IMAGES FROM PHP*/

   // INCLUDE JQUERY LIBRARY: OTHERWISE THIS WON'T WORK...
   // SURE YOU CAN ALSO DO ALL THIS IN PURE JAVASCRIPT, BUT WHY RE-INVENT THE WHEEL? :-)

  /* var quotes = [["Peace is costly but it is worth the expense.","Kenyan proverb"],
                 ["War has no eyes.", "Swahili saying"],
                 ["When a king has good counselors, his reign is peaceful.", "Ashanti proverb"],
                 ["Peace does not make a good ruler.", "Botswana proverb"],
                 ["There can be no peace without understanding.", "Senegalese proverb"],
                 ["Milk and honey have different colors, but they share the same house peacefully.", "African proverb"],
                 ["If you can't resolve your problems in peace, you can't solve them with war.", "Somalian proverb"],

                 ["When there is peace in the country, the chief does not carry a shield.","Ugandan proverb"],
                 ["Speak softly and carry a big stick; you will go far.", "West African proverb"],
                 ["He who thinks he is leading and has no one following him is only taking a walk.", "Malawian proverb"],
                 ["An army of sheep led by a lion can defeat an army of lions led by a sheep.", "Ghanaian proverb"],
                 ["He who refuses to obey cannot command.", "Kenyan proverb"],
                 ["A large chair does not make a king.", "Sudanese proverb"],
                 ["A leader who does not take advice is not a leader.", "Kenyan proverb"],

               ];*/

   (function ($) {
       $(document).ready(function(e) {
           $.ajax({
               url: 'http://ahansabharwal.com/numberOfImages.php',     // <== CHANGE URL
               dataType: "HTML",
               cache: false,
               type: "POST",

               //HANDLE THE SUCCESS CASE FOR THE AJAX CALL
               success: function (data, textStatus, jqXHR) {
                   if(data){
                       localStorage.numberOfImages = data;
                       gotNumberOfImages = true;
                       //showNewImage();
                      /* var str = document.getElementById("greet").innerHTML;
                       var res = str.replace("\'\'", " " + localStorage.name); // replace with name
                       document.getElementById("greet").innerHTML = res;*/


                          /*var randomQuoteNumber=Math.floor(Math.random()*7);
                          var strQuote = document.getElementById("quote").innerHTML;
                          var resQuote = strQuote.replace("quote", quotes[randomQuoteNumber][0]);
                          document.getElementById("quote").innerHTML = resQuote;

                          var strBy = document.getElementById("byLink").innerHTML;
                          var resBy = strBy.replace("by", quotes[randomQuoteNumber][1]);
                          document.getElementById("byLink").innerHTML = resBy;*/

                        /*  var byLink = document.getElementById("byLink"); //replacing the wikipedia link of the person the quote is by
                          byLink.setAttribute('href', quotes[randomQuoteNumber][2]);*/


                   }
               },

               //HANDLE THE FAILURE CASE FOR THE AJAX CALL
               error: function (jqXHR, textStatus, errorThrown) {
                   console.log('The following error occurred: ' + textStatus, errorThrown);
               },

               //HANDLE THE EVENT-COMPLETE CASE FOR THE AJAX CALL
               complete: function (jqXHR, textStatus) {
               }
           });
       });
   })(jQuery);
