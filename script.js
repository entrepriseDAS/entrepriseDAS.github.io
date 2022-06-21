//CHECK SLIDES 
var divQuestion = document.getElementById("question");
var easyArray=["q1Easy", "q2Easy", "q3Easy", "q4Easy", "q5Easy"];
var hardArray=["q1Hard", "q2Hard", "q3Hard", "q4Hard","q5Hard"];
var score = 0;
var strike = 0;

function start(){
  easyArray=["q1Easy", "q2Easy", "q3Easy", "q4Easy", "q5Easy"];
  hardArray=["q1Hard", "q2Hard", "q3Hard", "q4Hard","q5Hard"];
  score = 0;
  strike = 0;
  scoreDiv.innerHTML = "<h5>Score: 0</h5>"
  strikeDiv.innerHTML = "<h5>0/3 Strike(s)</h5>"
  question.innerHTML="<p id=\"bienvenue\"><strong>Bienvenue a Daedal!</strong><br>Un jeu éducatif pour les musiciens du secondaire de tout niveau.<br>Pour jouer cliquer 'Commencer'. Vous auriez des questions a choix multiples. Reponder correctement votre score augmente de 1, incorrectement vous receviez un 'strike'.<br><strong>Bon succes!</strong></p><div id=\"btnCommencer\"><input type=\"button\" id=\"start\" onclick=\"easyQuestion()\" value=\"Commencer\"></div>"
}


function easyQuestion(){
  console.log(easyArray)
  var random = Math.floor(Math.random() * easyArray.length);
  var check = easyArray[random];
  console.log(random)
  console.log(check)
  switch (check){
    case "q1Easy":
      question.innerHTML = "<h2>Est-ce que ces notes montent our descendent?</h2> <audio controls> <source src = \"player/monter.mp3\"></audio> <div class=\"choixReponse\"><input type=\"button\" onclick=\"correctEasy(0)\" value=\"Montent\"> <input type=\"button\" onclick=\"wrongEasy(0)\" value=\"Descendent\"> </div>";
      break;
    case "q2Easy":
      question.innerHTML = "<h2>Combien y a-t-il de cordes sur une contrebasse?</h2> <div class=\"choixReponse\"> <input type=\"button\" onclick=\"wrongEasy(1)\" value=\"3\"> <input type=\"button\" onclick=\"correctEasy(1)\" value=\"4\"> <input type=\"button\" onclick=\"wrongEasy(1)\" value=\"6\"> <input type=\"button\" onclick=\"wrongEasy(1)\" value=\"12\"> </div>";
      break;
    case "q3Easy":
      question.innerHTML = "<h2>Lequel de ces instruments à vent joue le plus aigu? </h2> <img src =\"images/piccolo.png\" height = 100> <div class=\"choixReponse\"><input type=\"button\" onclick=\"correctEasy(2)\" value=\"Piccolo\"> <input type=\"button\" onclick=\"wrongEasy(2)\" value=\"Clarinette\"> <input type=\"button\" onclick=\"wrongEasy(2)\" value=\"Basson\"> <input type=\"button\" onclick=\"wrongEasy(2)\" value=\"Saxophone Alto\"></div>";
      break;
    case "q4Easy":
      question.innerHTML = "<h2>Lequel de ces instruments à cordes joue le plus grave ? </h2> <img src =\"images/contrebasse.png\" height = 100> <div class=\"choixReponse\"> <input type=\"button\" onclick=\"wrongEasy(3)\" value=\"Violon\"> <input type=\"button\" onclick=\"wrongEasy(3)\" value=\"Violoncelle\"> <input type=\"button\" onclick=\"correctEasy(3)\" value=\"Contrebasse\"> <input type=\"button\" onclick=\"wrongEasy(3)\" value=\"Alto\"></div>"
      break;
    case "q5Easy":
      question.innerHTML = "<h2>Combien y a-t-il d'instruments dans un quintette à cordes ?</h2> <div class=\"choixReponse\"><input type=\"button\" onclick=\"wrongEasy(4)\" value=\"3\"> <input type=\"button\" onclick=\"wrongEasy(4)\" value=\"2\"> <input type=\"button\" onclick=\"correctEasy(4)\" value=\"5\"> <input type=\"button\" onclick=\"wrongEasy(4)\" value=\"4\"></div>"
      break;
    default:
      easyQuestion();
    }
}

function hardQuestion(){
  var random = Math.floor(Math.random() * hardArray.length)
  var check = hardArray[random]
  switch (check){
    case "q1Hard":
      question.innerHTML = "<h2>Quelles sont les notes situées sur les lignes d’une portée avec une clé de sol?</h2> <img src =\"images/portee.png\" height = 100><div class=\"choixReponse\"><input type=\"button\" onclick=\"wrongHard(0)\" value=\"La/A Si/B Sol/C Ré/D Mi/E\"> <input type=\"button\" onclick=\"wrongHard(0)\" value=\"Do/C Ré/D Mi/E Fa/F Sol/G\"> <input type=\"button\" onclick=\"correctHard(0)\" value=\"Mi/E Sol/G Si/B Ré/D Fa/F\"> <input type=\"button\" onclick=\"wrongHard(0)\" value=\"Fa/F La/A Do/C Mi/E Sol/G\"></div>";
      break;
    case "q2Hard":
      question.innerHTML = "<h2> Quelles sont les notes situées sur les interlignes d’une portée avec une clé de fa?</h2> <img src =\"images/cleFa.png\" height = 100> <div class=\"choixReponse\"><input type=\"button\" onclick=\"wrongHard(1)\" value=\"Si/B Ré/D Fa/F La/A\"><input type=\"button\" onclick=\"correctHard(1)\" value=\"La/A Do/C Mi/E Sol/G\"><input type=\"button\" onclick=\"wrongHard(1)\" value=\"Ré/D Mi/E Fa/F Sol/G\"> <input type=\"button\" onclick=\"wrongHard(1)\" value=\"Fa/F La/A Do/C Mi/E\"></div>";
      break;
    case "q3Hard":
      question.innerHTML = "<h2>Quelle tonalité a seulement un dièse dans sa clé de sol.</h2><div class=\"choixReponse\"><input type=\"button\" onclick=\"correctHard(2)\" value=\"Sol Majeur/G Major\"> <input type=\"button\" onclick=\"wrongHard(2)\" value=\"Do Majeur/C Major\"><input type=\"button\"onclick=\"wrongHard(2)\" value=\"Si Mineur/B Minor\"><input type=\"button\" onclick=\"wrongHard(2)\" value=\"La Mineur/A Minor\"></div>";
      break;
    case "q4Hard":
      question.innerHTML = "<h2>C'est quoi le genre d'origine du Rock?</h2><div class=\"choixReponse\"><input type=\"button\" onclick=\"wrongHard(3)\" value=\"Country\"><input type=\"button\" onclick=\"wrongHard(3)\"value=\"Disco\"><input type=\"button\" onclick=\"correctHard(3)\"value=\"Blues\"><input type=\"button\" onclick=\"wrongHard(3)\"value=\"Pop\"></div>";
      break;
    case "q5Hard":
      question.innerHTML = "<h2>C'est quoi la signature temporelle de cette pièce?</h2> <audio controls> <source src=\"player/fivefour.m4a\"> </audio> <div class=\"choixReponse\"><input type=\"button\" onclick=\"wrongHard(4)\" value=\"4/4\"><input type=\"button\" onclick=\"wrongHard(4)\"value=\"3/4\"><input type=\"button\" onclick=\"wrongHard(4)\"value=\"7/8\"><input type=\"button\" onclick=\"correctHard(4)\"value=\"5/4\"></div>";
      break;
    default:
      hardQuestion();
    }   
}

function correctEasy(n){
  easyArray.splice(n,1,"awa")
  console.log(easyArray)
  score++
  scoreDiv.innerHTML = "<h5>Score: " + score + "</h5>"
  if (score<3){
    question.innerHTML = "<br>Bonne réponse! <br> <input type=\"button\" onclick=\"easyQuestion()\" value=\"Prochaine question\" class=\"btnProchaine\">"
  }else{
    strike = 0
    strikeDiv.innerHTML = "<h5>" + strike + "/3 Strike(s)</h5>"
    question.innerHTML = "<br>Bonne réponse! La difficulté a augmenté! Vos strikes sont retourné à zéro!<br> <input type=\"button\" onclick=\"hardQuestion()\" value=\"Prochaine question\" class=\"btnProchaine\">"
  }   
}

function correctHard(n){
  hardArray.splice(n,1,"awa")
  console.log(hardArray)
  score++
  scoreDiv.innerHTML = "<h5>Score: " + score + "</h5>"
  if (score<7){
    question.innerHTML = "<br>Bonne réponse! <br> <input type=\"button\" onclick=\"hardQuestion()\" value=\"Prochaine question\" class=\"btnProchaine\">"
  }else
    question.innerHTML = "<br>Bonne réponse! Tu as gagné!<br> <img src = \"images/win.gif\"> <br> <input type=\"button\" onclick=\"easyQuestion()\" value=\"Recommencer?\"> &emsp; <input type=\"button\" onclick=\"start()\" value=\"Terminer\" class=\"btnProchaine\">"
}

function wrongEasy(n){
  easyArray.splice(n,1,"awa")
  console.log(easyArray)
  strike++
  strikeDiv.innerHTML = "<h5>" + strike + "/3 Strike(s)</h5>"
  console.log(strike)
  if(strike==3){
    strike = 0
    score = 0
    question.innerHTML = "<br>Mauvaise réponse \:\( Vous avez eu trois strikes.<br> <input type=\"button\" onclick=\"easyQuestion()\" value=\"Recommencer?\" class=\"btnProchaine\"> &emsp; <input type=\"button\" onclick=\"start()\" value=\"Terminer\" class=\"btnProchaine\">"
  }else{
    question.innerHTML = "<br>Mauvaise réponse \:\( Vous avez eu un strike. <br> <input type=\"button\" onclick=\"easyQuestion()\" value=\"Prochaine question\" class=\"btnProchaine\">"
  }
}

function wrongHard(n){
  hardArray.splice(n,1,"awa")
  console.log(hardArray)
  strike++
  strikeDiv.innerHTML = "<h5>" + strike + "/3 Strike(s)</h5>"
  console.log(strike)
  if(strike==3){
    strike=0
    score=0
    question.innerHTML = "<br>Mauvaise réponse \:\( Vous avez eu trois strikes.<br> <input type=\"button\" onclick=\"easyQuestion()\" value=\"Recommencer?\" class=\"btnProchaine\"> &emsp; <input type=\"button\" onclick=\"start()\" value=\"Terminer\" class=\"btnProchaine\">"
  }else{
    question.innerHTML = "<br>Mauvaise réponse \:\( Vous avez eu un strike.<br> <input type=\"button\" onclick=\"hardQuestion()\" value=\"Prochaine question\" class=\"btnProchaine\">"
  }
}