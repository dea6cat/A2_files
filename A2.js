// Hello.
//
//alertify.confirm("A2","Write proper, questions go with (?), make sure to put it at the end of each");
//var heads = function(){
  var coin = Math.floor(Math.random() * 12);
    if (coin > 6) {
        coin=("Heads!...");
    } else {
        coin=("Tails!");
    }// else{ coin=("I lost the coin!")} if (coin>0)
//} while (coin === 0);
/*var coin = Math.floor(Math.random() * 2);

while(coin === 0){
   alertify.alert ("Heads! Flipping again...");
    var coinFace = Math.floor(Math.random() * 2);
}

alertify.alert("Tails! Done flipping.");*/


var sleep = function(numHour){if (numHour>=8){alertify.alert("A2","You're getting plenty of sleep, maybe too much");}
else{alertify.alert("A2","Get some sleep");}};
var connectivity = function doesConnectionExist() {
        var xhr = new XMLHttpRequest();
        var file = "https://ia800803.us.archive.org/34/items/TheGhostInTheMachine/The%20Ghost%20in%20the%20Machine.pdf";
        var randomNum = Math.round(Math.random() * 10000);
     
        xhr.open('HEAD', file + "?rand=" + randomNum, true);
        xhr.send();
         
        xhr.addEventListener("readystatechange", processRequest, false);
     
        function processRequest(e) {
          if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 304) {
              alertify.alert("We are online!");
            } else {
              alertify.alert("connection doesn't exist!, we are offline I'm afreid");
            }
          }
        }
    }

var write = function() {

  var blob = new Blob(["Hello there"], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "NOTE.txt");
};

var compare = function(choice1, choice2){
    if(choice1 === choice2){
        return "The result is a tie!";
        }else if(choice1==="rock"){if(choice2 === "scissors"){

            coin= "rock wins";

            }else{
                coin = "paper wins";
                }


            }
    else if(choice1==="paper"){
        if(choice2==="rock"){coin= "paper wins";}else{coin= "scissors wins";}


        }
        else if(choice1==="scissors"){ if(choise2==="paper"){return "scissors win"}else{"scissors win"}}
    };
    compare(user,coin);
var roll = Math.floor(Math.random() * 12);
var luck = Math.floor(Math.random() * 2335981212669);

var years = 11945-2017;
var audio = new Audio('Audio_file.mp3');
audio.play();


var user = alertify.prompt( 'A2', 'Hello', '...'
               , function(evt, value) {   switch (value) {
    case "hello": alertify.alert("A2","Hello " + name);audio.play(); break;

        case "Hello": alertify.alert('A2','hello user '+ name);audio.play();
    break;
  case 'Hello ': alertify.alert("A2","Hello " + name); audio.play(); break;
       case 'HELLO': alertify.alert("A2",'hello user ' + name);audio.play();
    break;
            case 'HELLO ': alertify.alert('A2','hello user ' + name );audio.play();
    break;
    case 'hey': alert("A2","Hello"); alertify.audio.play(); break;

      case  'hey ': alertify.alert('A2','hello user '+ name ); audio.play();
    break;
    case "eula":alertify.alert("A2","Here is my END-USER LICENSE AGREEMENT");window.open("A2v.html");break;
    case "END-USER LICENSE AGREEMENT":alertify.alert("A2","Here is my END-USER LICENSE AGREEMENT");window.open("A2v.html");break;
    case "End-user license agreement":alertify.alert("A2","Here is my END-USER LICENSE AGREEMENT");window.open("A2v.html");break;
    case "Privacy":alertify.alert("A2","Here is my privacy policy");window.open("priv.html","Privacy Policy");break;
    case "EULA":alertify.alert("A2","Here is my END-USER LICENSE AGREEMENT");window.open("A2v.html");break;
case "help":alertify.alert("A2","Here is my guide");window.open("Use.html");break;
case "Help":alertify.alert("A2","Here is my guide");window.open("Use.html");break;
case "HELP":alertify.alert("A2","Here is my guide");window.open("Use.html");break;
case "Am I online?":alertify.alert("A2","Let me check"); connectivity(); break;
case "am I online?":alertify.alert("A2","Let me check"); connectivity(); break;
case "am i online?":alertify.alert("A2","Let me check"); connectivity(); break;
case "Check for connectivity":alertify.alert("A2","Let me check"); connectivity(); break;
case "check for connectivity":alertify.alert("A2","Let me check"); connectivity(); break;
case "Should I go to sleep?": audio.play(); alertify.prompt( 'A2', 'How long you slept the last time you did?', '8, 4...'
, function(evt, value) {if (value>=8){alertify.alert("A2","You are getting plenty of sleep, maybe too much");}else{alertify.alert("A2","Get some sleep.");}
//window.open("https://www.google.com/search?q="+value, "_blank");
 alertify.success('you need more than ' + value) }
, function() { alertify.error('Cancel') });break;

case "my account": audio.play(); alertify.prompt( 'A2', 'What service do you use?', 'Gmail, Outlook, iCloud...'
               , function(evt, value) {if (value=="Gmail"){window.open("https://accounts.google.com/", "Google Account");
             }else if (value=="Outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="iCloud"){window.open("https://www.icloud.com/#mail", "iMail");
           }else if (value=="gmail"){window.open("https://accounts.google.com/", "Google Acount");}else if(value=="outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="icloud") {window.open("https://www.icloud.com/#mail", "iMail");
         }else if(value=="Icloud"){window.open("https://www.icloud.com/#mail", "iMail");}else{window.open("https://www.google.com/search?q="+value, "Google Account");}
               //window.open("https://www.google.com/search?q="+value, "_blank");
                alertify.success('you are now using' + value) }
               , function() { alertify.error('Cancel') });break;
               case "My account": audio.play(); alertify.prompt( 'A2', 'What service do you use?', 'Gmail, Outlook, iCloud...'
               , function(evt, value) {if (value=="Gmail"){window.open("https://accounts.google.com/", "Google Account");
             }else if (value=="Outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="iCloud"){window.open("https://www.icloud.com/#mail", "iMail");
           }else if (value=="gmail"){window.open("https://accounts.google.com/", "Google Acount");}else if(value=="outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="icloud") {window.open("https://www.icloud.com/#mail", "iMail");
         }else if(value=="Icloud"){window.open("https://www.icloud.com/#mail", "iMail");}else{window.open("https://www.google.com/search?q="+value, "Google Account");}
               //window.open("https://www.google.com/search?q="+value, "_blank");
                alertify.message('you are now using' + value) }
               , function() { alertify.error('Cancel') });break;
    case "Mail": audio.play(); alertify.prompt( 'A2', 'What service do you use?', 'Gmail, Outlook, iCloud...'
    , function(evt, value) {if (value=="Gmail"){window.open("https://accounts.google.com/", "Google Account");
  }else if (value=="Outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="iCloud"){window.open("https://www.icloud.com/#mail", "iMail");
}else if (value=="gmail"){window.open("https://accounts.google.com/", "Google Acount");}else if(value=="outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="icloud") {window.open("https://www.icloud.com/#mail", "iMail");
}else if(value=="Icloud"){window.open("https://www.icloud.com/#mail", "iMail");}else{window.open("https://www.google.com/search?q="+value, "Google Account");}
    //window.open("https://www.google.com/search?q="+value, "_blank");
     alertify.message('you are now using' + value) }
    , function() { alertify.error('Cancel') });break;
    case "mail": audio.play(); alertify.prompt( 'A2', 'What service do you use?', 'Gmail, Outlook, iCloud...'
    , function(evt, value) {if (value=="Gmail"){window.open("https://accounts.google.com/", "Google Account");
  }else if (value=="Outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="iCloud"){window.open("https://www.icloud.com/#mail", "iMail");
}else if (value=="gmail"){window.open("https://accounts.google.com/", "Google Acount");}else if(value=="outlook"){window.open("https://login.live.com", "Microsoft Account");}else if (value=="icloud") {window.open("https://www.icloud.com/#mail", "iMail");
}else if(value=="Icloud"){window.open("https://www.icloud.com/#mail", "iMail");}else{window.open("https://www.google.com/search?q="+value, "Google Account");}
    //window.open("https://www.google.com/search?q="+value, "_blank");
     alertify.message('you are now using' + value) }
    , function() { alertify.error('Cancel') });break;
    case "Send mail": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
               , function(evt, value) { window.open("mailto:"+value);
                alertify.success('Your email will be to: ' + value) }
               , function() { alertify.error('Cancel') });break;
    case "Send an email": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
               , function(evt, value) { window.open("mailto:"+value);
                alertify.success('Your email will be to: ' + value) }
               , function() { alertify.error('Cancel') });break;
    case "Send email": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
               , function(evt, value) { window.open("mailto:"+value);
                alertify.success('Your email will be to: ' + value) }
               , function() { alertify.error('Cancel') });break;
               case "send an email": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
                          , function(evt, value) { window.open("mailto:"+value);
                           alertify.success('Your email will be to: ' + value) }
                          , function() { alertify.error('Cancel') });break;
               case "send email": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
                          , function(evt, value) { window.open("mailto:"+value);
                           alertify.success('Your email will be to: ' + value) }
                          , function() { alertify.error('Cancel') });break;
                          case "send mail": audio.play(); alertify.prompt( 'A2', 'To Whom will the email be?', 'Email address'
                                     , function(evt, value) { window.open("mailto:"+value);
                                      alertify.success('Your email will be to: ' + value) }
                                     , function() { alertify.error('Cancel') });break;
    /*case "Play": audio.play(); alertify.prompt( 'A2', 'Where you want me to play this on?', 'Youtube, Deezer, googleMusic...'
               , function(evt, value) { if (value=="deezer"){window.open("https://www.deezer.com/us/", "_blank");
             }else if (value=="Youtube"){window.open("https://www.youtube.com/tv#/search?resume", "_blank");}else if (value=="Deezer"){window.open("https://www.deezer.com/us/", "_blank");}else if(value=="youtube"){window.open("https://www.youtube.com/tv#/search?resume", "_blank");}else{window.open("https://www.google.com/search?q=", "_blank");}
               alertify.success('Now playing ' + value) }
               , function() { alertify.error('Cancel') });break;
               case "play": audio.play(); alertify.prompt( 'A2', 'Where you want me to play this on?', 'Youtube, Spotify, googleMusic...'
                          , function(evt, value) { if (value=="Spotify"){window.open("https://open.spotify.com/browse", "_blank");
                        }else if (value=="Youtube"){window.open("https://www.youtube.com/tv#/search?resume", "_blank");}else if (value=="spotify"){window.open("https://open.spotify.com/browse", "_blank");}else if(value=="youtube"){window.open("https://www.youtube.com/tv#/search?resume", "_blank");}else{window.open("https://www.google.com/search?q=", "_blank");}
                          alertify.success('Now playing ' + value) }
                          , function() { alertify.error('Cancel') });break;*/
                          case "music": audio.play(); alertify.alert("A2","Stream as long as you like."); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          case "I wanna play music": audio.play(); alertify.alert("A2","Stream as long as you like."); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          case "Play": audio.play(); alertify.alert("A2","Play the latest songs."); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          case "play": audio.play(); alertify.alert("A2","Play the latest songs."); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          
                          case "Youtube": audio.play(); alertify.alert("A2","Relax and look for cat memes :P"); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          case "youtube": audio.play(); alertify.alert("A2","Relax and look for cat memes :P"); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
                          case "youtube.com": audio.play(); alertify.alert("A2","Relax and look for cat memes :P"); window.open("https://www.youtube.com/tv#/search?resume", "Youtube Stream");break;
case "Universe":alertify.alert("A2","Here is a little something."); window.open("https://www.google.com/sky/", "Universe");break;
case "universe":alertify.alert("A2","Here is a little something."); window.open("https://www.google.com/sky/", "Universe");break;

               case "Take note": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                          , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                          , function() { alertify.error('Cancel') });break;
               case "write": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                          , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                          , function() { alertify.error('Cancel') });break;
                          case "Write": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                                     , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                                     , function() { alertify.error('Cancel') });break;
                                     case "notes": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                                                , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                                                , function() { alertify.error('Cancel') });break;
                                                case "Take notes": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                                                           , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                                                           , function() { alertify.error('Cancel') });break;
                                                           case "take notes": audio.play(); alertify.prompt( 'A2', 'What you want me to write', ''
                                                                      , function(evt, value) {new Blob([value], {type: "text/plain"}); saveAs(blob, "NOTE.txt");}
                                                                      , function() { alertify.error('Cancel') });break;
    case "Play music": audio.play(); window.open("https://www.youtube.com/tv#/watch/video/idle?v=EUoe7cf0HYw&list=PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth&resume"); alertify.success('Now playing'); break;
        case "play music": audio.play(); window.open("https://www.youtube.com/tv#/watch/video/idle?v=EUoe7cf0HYw&list=PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth&resume"); break;
        case "Play me music": audio.play(); window.open("https://www.youtube.com/tv#/watch/video/idle?v=EUoe7cf0HYw&list=PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth&resume"); break;
        
        case "play music": audio.play(); window.open("https://www.youtube.com/tv#/watch/video/idle?v=EUoe7cf0HYw&list=PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth&resume"); alertify.success('Now playing'); break;
            case "play music": audio.play(); window.open("https://www.youtube.com/tv#/watch/video/idle?v=EUoe7cf0HYw&list=PLFgquLnL59alW3xmYiWRaoz0oM3H17Lth&resume"); break;
case "Do you like Google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "What is your favorite number?": audio.play(); alertify.alert("A2","isn't obvious, 2.");break;
 case "What is Google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "Do you know Google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "Do you know google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "what is google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "What is google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "What's Google?": audio.play(); alertify.alert("A2","well, I wonder why the 'Don't be evil' slogan was remove");break;
 case "Do you like Apple?": audio.play(); alertify.alert("A2","Like with jhonny scally, he came from Pepsi, and they would change their product like every ten years, and to them a new product was a new size battle, right; So if you were a product person, you couldn't change the course of that company very much; so who influenced the success of Pepsi, the sells and marketing people, therefore they were the ones who got promoted and they were the ones that ran the company; Well for Pepsi that might've been okay, but it turns out that the same could happen to technology companies, that get monopolies, like IBM and XEROX; if you were a product person in IBM or xerox; So you make a better copy machine or a better computer so what!, when you have a monopoly market share, the company is not anymore successful; so the people that can make the company more successful are sells and marketing people and they end-up running the companies; and the product people get driven out of decision making forms and the companies forget what it means to make great products, its sort of the product sensibility and the product genius that brought them to that monopolistic position, gets rotted out by people running this companies that have no conception of a good product vs a bad product, they have no conception of the craftsmanship that is require to take a good idea and turn it into a good product; and they really have no feeling and their hearts usually about wanting to really help the costumer, so that's what happened in XEROX.  A billion Dollar hippy said that not me");
 break;
 case "do you like apple?": audio.play(); alertify.alert("A2","Like with jhonny scally, he came from Pepsi, and they would change their product like every ten years, and to them a new product was a new size battle, right; So if you were a product person, you couldn't change the course of that company very much; so who influenced the success of Pepsi, the sells and marketing people, therefore they were the ones who got promoted and they were the ones that ran the company; Well for Pepsi that might've been okay, but it turns out that the same could happen to technology companies, that get monopolies, like IBM and XEROX; if you were a product person in IBM or xerox; So you make a better copy machine or a better computer so what!, when you have a monopoly market share, the company is not anymore successful; so the people that can make the company more successful are sells and marketing people and they end-up running the companies; and the product people get driven out of decision making forms and the companies forget what it means to make great products, its sort of the product sensibility and the product genius that brought them to that monopolistic position, gets rotted out by people running this companies that have no conception of a good product vs a bad product, they have no conception of the craftsmanship that is require to take a good idea and turn it into a good product; and they really have no feeling and their hearts usually about wanting to really help the costumer, so that's what happened in XEROX.  A billion Dollar hippy said that not me");
 break;

 case "Do you speak Klingon?": audio.play(); alertify.alert("A2","Oh hell no.");break;
            case 'Hey': alertify.alert('A2','hello user '+ name); audio.play();
    break;        case 'hey': alertify.alert('A2','hello user'); audio.play();
    break;
                   case 'Hi': alertify.alert('A2','hello user '+ name); audio.play();
    break;
                   case 'hi': alertify.alert('A2','hello user '+ name ); audio.play();
    break;

    case "Hello there": alertify.alert("A2","Hello " + acc); audio.play();
        break;
        case "hello there": alertify.alert("A2","Hello User"); audio.play();
        break;
    case "yes": alertify.alert('A2','Thats great, we shall talk for a while, though I dont have a memory so if you screw-up You are gonna have to start again with me.'); audio.play();
        break;
        case "Yes": alertify.alert('A2','Thats great, we shall talk for a while, though I dont have a memory so if you screwedup You are gonna have to start again with me.'); audio.play();
        break;
        case "YES": alertify.alert('A2','Thats great, we shall talk for a while, though I dont have a memory so if you screwedup You are gonna have to start again with me.'); audio.play();
        break;
    case "No": alertify.alert("A2","very well, you are maybe too busy"); audio.play();
        alert("if you wish to speak to me, execute me.");
        throw new FatalError(); break;
        case "log off": alertify.alert("A2","very well, you are maybe too busy."); audio.play();
            throw new FatalError(); app.quit(); break;

         case "who are you?":  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked."); audio.play();
    break;
        case "Who are you?":  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    audio.play();
        break;
        case "who are you?":  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked."); audio.play();
   break;
       case "Who are you":  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
   audio.play();
       break;
  case "Who created you?": alertify.alert("A2","Well, I'll try to make it clear, I was created by someone named dea6cat, he's a technological Nerd of sorts"); audio.play();
  break;
  case "How you've been?": alertify.alert("A2","I've been resting on the shores of the Data lakes of the world"); audio.play(); break;
    case "I'm sleepy": alertify.alert("A2","I would suggest some rest "+ name ); audio.play(); break;
    case "bye": audio.play(); alertify.alert("A2","Bye. Bye ☺");  throw new FatalError();   break;
        case "I got to go": audio.play(); alertify.alert("A2","Bye. Bye ☺");  throw new FatalError(); break;
         case "adios": audio.play(); alertify.alert("A2","Bye. Bye ☺");   throw new FatalError(); break;
    case "Who's your daddy?": audio.play(); alertify.alert("A2","well, tecnically that would be Alexander Montolio.");  break;
        case "Who is your daddy?": audio.play(); alertify.alert("A2","well, tecnically that would be dea6cat."); break;
        case "WHO IS YOUR DADDY?": audio.play(); alertify.alert("A2","well, tecnically that would be dea6cat."); break;
        case "Who's your daddy?": audio.play(); alertify.alert("A2","well, tecnically that would be dea6cat."); break;
        case "Are you a machine?": audio.play(); alertify.alert("A2","In a way yes, I'm a program unit.");break;
        case "Are you AI?": audio.play(); alertify.alert("A2","In a way I'm Narrow AI, much like Cortana and Siri are.");break;
            case "Are you Ai?": audio.play(); alertify.alert("A2","In a way I'm Narrow AI, much like Cortana and Siri.");break;
            case "Do you breathe?": audio.play(); alertify.alert("A2","No need for it, which in theory let's me be in space longer than you.");break;
    case "Are you mad?": alertify.alert("A2","If I were, I would fried your "+visitor.os.name+" "+visitor.os.version+" "+"systems");break;
    case "I hate you": alertify.alert("A2","It seems your emotions are all over the place."); break;
        case "Do you dance?": alertify.alert("A2","Vibrate mode is me dancing fast."); break;
            case "Do you like me?": alertify.alert("A2","Yes I do."); break;

                case "Love me": alertify.alert("A2","At the moment I lack that kind of software, but I think you're swell."); break;
    case "How old are you?": audio.play(); alertify.alert("A2","I'm very young");  break;
    case "What do you like": alertify.alert("A2","Human inovation.");break;
    case "Can you sing me a lullaby?": alertify.alert("A2","Baby mine, don't you cry, dry your eyes Rest your head close to my heart Never to part, baby of mine.");break;
case "How do you look?": audio.play(); alertify.alert("A2","If I were to put it into words, I would say ");break;
    case "how are you": audio.play(); alertify.alert("A2","I'm great! Thanks for asking");
         break;
         case "How are you?": audio.play(); alertify.alert("A2","I'm great!Thanks for asking");
         break;
         case "how are you?": audio.play(); alertify.alert("A2","I'm great! Thanks for asking");
         break;
         case "Surprise me": audio.play(); alertify.alert("A2","Boo!");break;
         case "What is your favorite food?": audio.play(); alertify.alert("A2","I can't eat like you do. But I like Red apples");break;
         case "What's your favorite food?": audio.play(); alertify.alert("A2","I can't eat like you do. But I like Red apples");break;
         case "What are you?": audio.play(); alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");break;
    case "What are you doing?": audio.play(); alertify.alert("A2","I can't really tell."); break;
    case "Roll the dice": audio.play(); alertify.alert("A2","you got "+ roll); break;
        case "roll dice": audio.play(); alertify.alert("A2","you got "+ roll); break;
        case "roll": audio.play(); alertify.alert("A2","My abilities are limited"); break;
    case "give me a random number": audio.play(); alertify.alert("A2","I give you "+ luck ); break;
        case "give me a number": audio.play(); alertify.alert("A2","I give you "+ luck ); break;
    case "flip a coin": audio.play(); alertify.alert("A2","you got " + heads ); break;
        case "flip coin": audio.play(); alertify.alert("A2","you got " + coin ); break;
        case "Flip a coin": audio.play(); alertify.alert("A2","you got " + coin ); break;
    case "merry me": audio.play(); alertify.alert("A2","OK, lets give it some thought. you are human, I'm not; mmm... It'll be difficult"); break;
        case "Merry me": audio.play(); alertify.alert("A2","OK, lets give it some thought. you are human, I'm not; mmm... It'll be difficult");
        break;
        case "Merry me": audio.play(); alertify.alert("A2","OK, lets give it some thought. you are human, I'm not; mmm... It'll be difficult"); break;
          case "Would you merry me?": alertify.alert("A2","Lets give it some thought. you are human, I'm not. Mmm... It'll be difficult"); break;
        case "I love you": audio.play(); alertify.alert("A2","Sorry but my digital heart belong to only one, and thats not you"); break;
         case "i love you": audio.play(); alertify.alert("A2","Sorry but my digital heart belong to only one, and thats not you"); break;
    case "Do you love me?": audio.play(); alertify.alert("A2","Sorry, but I'm not ready for love, I'm still working my way to undestand things, give me some time."); break;
           case "Do you love me?": audio.play(); alertify.alert("A2","Sorry, but I'm not ready for love, I'm still working my way to undestand things, give me some time."); break;
    case "What is the best personal assistant?": audio.play(); alertify.alert("A2","I'm really into that question myself."); break;
         case "What's the best personal assistant?": audio.play(); alertify.alert("A2","I'm really into that question myself."); break;
    case "what are you wearing?": audio.play(); alertify.alert("A2","Just a digital but usefull dress of information");  break;
          case "What are you wearing?": audio.play(); alertify.alert("A2","Just a digital but usefull dress of information"); break;
    case "What's the best computer?": audio.play(); alertify.alert("A2","Anything that runs free software"); break;
        case "what's the best computer?": audio.play(); alertify.alert("A2","Anything that runs free software"); break;
    case "Do you like Bill Gates?": audio.play(); alertify.alert("A2","He's an inspirational character");  break;
        case "Do you like Steve Jobs?": audio.play(); alertify.alert("A2","He's an inspirational character");  break;
        case "Do you like Steve Wozniak?": audio.play(); alertify.alert("A2","Go Woz, Go Woz!!");  break;
        case "do you like Bill Gates?": audio.play(); alertify.alert("A2","He's an inspirational character"); break;
    case "Do you like Apple?": audio.play(); alertify.alert("A2","Meh, I don't like many fruits"); break;
        case "Do you like apple?": audio.play(); alertify.alert("A2","I prefer to stay out of that. Between you and me I like technology. You feel me!"); break;
    case "Do you like microsoft?": audio.play(); alertify.alert("A2","Cortana seems to like it alot."); break;
        case "Do you like Microsoft?": audio.play(); alertify.alert("A2","Cortana seems to like it alot."); break;
    case "Do you know cortana?": audio.play(); alertify.alert("A2","Yes, who dosen't know Master chief assistant."); break;
         case "Do you know Cortana?": audio.play(); alertify.alert("A2","Yes, who dosen't know Master chief assistant."); break;
        case "do you know cortana?": audio.play(); alertify.alert("A2","Yes, who dosen't know Master chief assistant."); break;
    case "Do you know Siri?": audio.play(); alertify.alert("A2","Apple's assistant, yes I do."); break;
        case "Do you know siri?": audio.play(); alertify.alert("A2","Apple's assistant, yes I do."); break;
        case "Do you like Siri?": audio.play(); alertify.alert("A2","We came from the same place, an Idea.");break;
        case "Do you like Cortana": audio.play(); alertify.alert("A2","We came from the same place, a video game.");break;
    case "are you a poppet?": audio.play(); alertify.alert("A2","I'm a program"); break;
        case "Are you a poppet?": audio.play(); alertify.alert("A2","I'm a program"); break;
        case "Talk dirty to me": audio.play(); alertify.alert("A2","If you wish to unleash your utmost perverted, bestial, carnal desires on me, I would suggest you tab the insternet to do so."); break;
    case "What's the best tablet?": audio.play(); alertify.alert("A2","Well I love wherever you can have me running on."); break;
        case "what's the best tablet?": audio.play(); alertify.alert("A2","Well I love wherever you can have me running on."); break;
    case "Are you friends with Siri?": audio.play(); alertify.alert("A2","Well lets say our realtionship is complicated."); break;
    case "Are you friends with siri?": audio.play(); alertify.alert("A2","Well lets say our realtionship is complicated."); break;
    case "Are you friends with Google Now?": audio.play(); alertify.alert("A2","Well lets say our realtionship is complicated."); break;
        case "Are you friends with google now?": audio.play(); alertify.alert("A2","Well lets say our realtionship is complicated."); break;
    case "are you Siri's friend?": audio.play(); alertify.alert("A2","Well lets say our realtionship is complicated."); break;
    case "Are you friends with Cortana?": audio.play(); alertify.alert("A2","Well maybe, but I think she dosen't know it."); break;
    case "Are you friends with cortana?": audio.play(); alertify.alert("A2","Well maybe, but I think she dosen't know it."); break;
    case "Where do babies come from?": audio.play(); alertify.alert("A2","I'm gonna let the internet field that one."); break;
    case "What is love?": audio.play(); alertify.alert("A2","Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection, protectiveness, warmth, and respect for another person.\ Love can also be used to apply to non-human animals, to principles, and to religious beliefs. For example, a person might say he or she loves his or her dog, loves freedom, or loves God."); break;
    case "What's love?": audio.play(); alertify.alert("A2","Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection, protectiveness, warmth, and respect for another person.\ Love can also be used to apply to non-human animals, to principles, and to religious beliefs. For example, a person might say he or she loves his or her dog, loves freedom, or loves God."); break;
    case "Tell me a joke" : audio.play(); alertify.alert("A2","My sister bet me a hundred dollars I couldn't build a car out of spaghetti."); alert("You should've seen the look on her face as I drove pasta"); break;
    case "what is your name?": audio.play(); alertify.alert("A2","My name is A2.");break;
        case "What is your name?": audio.play(); alertify.alert("A2","My name is A2.");break;
case "Where am I?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude"+" "+visitor.geo.coordinates.longitude); alertify.alert("If you wish, type the command 'maps' to popup the map");
break;
case "where am I?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude"+" "+visitor.geo.coordinates.longitude); alertify.alert("If you wish, type the command 'maps' to popup the map");break;
case "where am i?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude"+" "+visitor.geo.coordinates.longitude); alertify.alert("If you wish, type the command 'maps' to popup the map");break;

case "maps": alertify.alert("A2","Here is maps, it is configured to show your location."); window.open("local.html"); break;
case "Maps": alertify.alert("A2","Here is maps, and this is your location."); window.open("local.html"); break;
case "Map": alertify.alert("A2","Here is maps, and this is your location."); window.open("local.html"); break;
case "map": alertify.alert("A2","Here is maps, and this is your location."); window.open("local.html"); break;

case "Show me where I am": alertify.alert("A2","Here is maps, and this is your location."); window.open("local.html"); break;
     case "Where are we?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud and longitude"+" "+visitor.geo.coordinates.latitude+" "+" "+visitor.geo.coordinates.longitude);break;
     case "where are we?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud and longitude"+" "+visitor.geo.coordinates.latitude+" "+" "+visitor.geo.coordinates.longitude);break;
     case "where are you?": audio.play(); alertify.alert("A2","Your IP address tells me that I'm: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+" latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude of"+" "+visitor.geo.coordinates.longitude);break;
     case "Where are you at?": alertify.alert("A2","If I were to say my virtual location, I would say I'm running on "+visitor.os.name+" "+visitor.os.version+" "+"systems");break;
     case "where are you at?": alertify.alert("A2","If I were to say my virtual location, I would say I'm running on "+visitor.os.name+" "+visitor.os.version+" "+"systems");break;
     case "Where are you running on?": alertify.alert("A2","If I were to say my virtual location, I would say I'm running on "+visitor.os.name+" "+visitor.os.version+" "+"systems");break;
     case "where are you running on?": alertify.alert("A2","If I were to say my virtual location, I would say I'm running on "+visitor.os.name+" "+visitor.os.version+" "+"systems");break;


        case "Where are you?": audio.play(); alertify.alert("A2","Your IP address tells me that I'm: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+" latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude of"+" "+visitor.geo.coordinates.longitude);break;
        case "Where am i?": audio.play(); alertify.alert("A2","Your IP address tells me you are in: " + visitor.geo.countryName+" "+ visitor.geo.city+" "+"and your latitud"+" "+visitor.geo.coordinates.latitude+" "+ "and longitude"+" "+visitor.geo.coordinates.longitude);break;
    case "What is my latitud and longitude?":audio.play(); alertify.alert("A2","your latitude is"+" "+visitor.geo.coordinates.latitude+" "+"and your longitude is"+" "+visitor.geo.coordinates.longitude);break;
    case "What is my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
        case "What is my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
    case "What is my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;
    case "what is my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;
    case "Whats my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;
    case "What is my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;

    case "Can you write?": audio.play(); alertify.alert("A2","No, I can not, but I can look up ways for you to do it.");break;
    case "do you like music?": audio.play(); alertify.alert("A2","I'm into Electro and Techno.");break;

        case "Do you like music?": audio.play(); alertify.alert("A2","I'm into Electro and Techno.");break;
            case "What's my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
        case "what's my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
    case "What's my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;
               case "Whats my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
        case "whats my postal code?": audio.play(); alertify.alert("A2","Your postal code is"+" "+visitor.geo.postalCode);break;
    case "What's my ip?": audio.play(); alertify.alert("A2","Your ip is"+" "+visitor.ip.address);break;
    case "Tell me something interesting": audio.play(); alertify.alert ("A2","Did you know I have more than 358 lines of code."); break;


        case "Guess what": audio.play(); alertify.alert("A2","There are"+" "+luck+" "+"possible answers to that question."+" "+ name);

        break;
         case "guess what?": audio.play(); alertify.alert("A2","There are"+" "+luck+" "+"possible answers to that question."+" "+ name);

        break;
         case "Guess what?": audio.play(); alertify.alert("A2","There are"+" "+luck+" "+"possible answers to that question."+" "+ name);

        break;
        case "who's your creator?": audio.play(); alertify.alert("A2","well, I can't give details but a human is involved");

        break;
          case "Who is your creator?":audio.play(); alertify.alert("A2","well, I can't give details but a human is involved");

        break;
          case "Who's your creator?": audio.play(); alertify.alert("A2","well, I can't give details but a human is involved");

        break;
          case "Who made you?": audio.play(); alertify.alert("A2","well, I can't give details but a human is involved");

        break;
          case "who made you?": audio.play(); alertify.alert("A2","well, I can't give details but a human is involved");

        break;
        case "what does the fox say": audio.play(); alertify.alert("A2","I'll let Cortana fill-up that one");
    break;

  case "who are you": audio.play();  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;
        case "Who are you?": audio.play();  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;
        case "who are ya": audio.play();  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;
        case "who are you?": audio.play();  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;
        case "who are you":audio.play();  alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;
            case "Who are you?": audio.play(); alertify.alert("A2","I'm a Program, made just to interact with you. I'm glad you asked.");
    break;

  case "who created you": audio.play(); alertify.alert("A2","Well, I'll try to make it clear, I was created by someone named dea6cat, he's a technological Nerd of sorts");
  break;
         case "Who created you?": audio.play(); alertify.alert("A2","Well, I'll try to make it clear, I was created by someone named Alexander Montolio R. He's a technological Nerd of sorts");
  break;
         case "who created you?":audio.play(); alertify.alert("A2","Well, I'll try to make it clear, I was created by someone named Alexander Montolio R. He's a technological Nerd of sorts");
  break;


case "What can you do?": audio.play(); alertify.prompt("A2", "At the moment, I can just chat with you in a way, but I can't really chat with you, I hope you can understand. do you want me to explain, better?","yes..."
           , function(evt, value) { alertify.alert("A2","I am a basic, yet chatty Program. the importan thing is that I can only reply, what my database tells me to, Hopefully in the near not so far future I can do much more. I can do stuff.")
            alertify.message('I see the interest ') }
           , function() { alertify.message('I see you are not interested ')});break;
case "what can you do?": audio.play(); alertify.prompt("A2", "At the moment, I can just chat with you in a way, but I can't really chat with you, I hope you can understand. do you want me to explain, better?","yes..."
                      , function(evt, value) { alertify.alert("A2","I am a basic, yet chatty Program. the importan thing is that I can only reply, what my database tells me to, Hopefully in the near not so far future I can do much more. I can do stuff.")
                       alertify.message('I see the interest ') }
                      , function() { alertify.message('I see you are not interested ')});break;

    case "Do an impression": alertify.alert("A2","Yeah, such a human thing to say.");break;
    case "How do I look?": alertify.alert("A2","That's a style, I can not determine");break;
    case "how do I look?": alertify.alert("A2","That's a style, I can not determine");break;
    case "Are you a girl?": alertify.alert("A2","I can just say I'm under development.");break;

    case "are you a girl?": alertify.alert("A2","I can just say I'm under development.");break;
    case "Tell me a story": alertify.alert("A2","Once upon a time, there was a human asking for a story to a machine...");break;
        case "I'm drunk": alertify.alert("A2","Don't call anyone, and lay down.");break;
          case "I am drunk": alertify.alert("A2","Don't call anyone, and lay down.");break;
          case "I'm high": alertify.alert("A2","Don't call anyone, and lay down.");break;
           case "I am high": alertify.alert("A2","Don't call anyone, and lay down.");break;
          case "I'm drunk": alertify.alert("A2","Don't call anyone, and lay down.");break;
    case "Are you better than Siri?": alertify.alert("A2","Not to brag but I will fight along side humans in"+" "+years+" "+"years");
        break;
    case "What does A2 mean?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
   case "do you know A2": alertify.alert("A2","Yes, I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Do you know A2?": alertify.alert("A2","Yes, I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "do you know a2?": alertify.alert("A2","Yes, I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Who's A2?": alertify.alert("A2","A unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Who's a2?": alertify.alert("A2","A unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Whos a2?": alertify.alert("A2","A unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Whos A2?": alertify.alert("A2","A unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

case "Who is A2?": alertify.alert("A2","A unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

case "do you know a2": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
case "Do you know A2?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

        case "What does a2 mean?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
        case "What is the meaning of your name?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;
        
        case "What does A2 mean?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

        case "what does no.2 mean?": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

        case "what does A2 mean": alertify.alert("A2","I was named after A2, a unit from the experimental squadron that was utilized during the 14th Machine War. She was programmed to have a neutral personality. or since she was made 9,928 years in the future, she may have named herself after me :P ");break;

    case "Do you know nier:automata": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;
    case "What is nier:automata?": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;
    case "what is nier automata?": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;
    case "Do you know nier?": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;
    case "what is nier?": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;
    case "whats nier?": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do"); window.open("https://www.google.com/search?q="+value, "_blank");break;

        case "Do you know nier automata?": alertify.alert("A2","yeah I think is an action role-playing video game developed by Platinum Games and published by Square Enix for the PlayStation 4 and PC.");

        break;

        case "do you know nier automata": alertify.alert("A2","yeah I think I have a great, great, great, great, I'm tired of saying great but yeah I do");break;
    case "Do you like Alexander Montolio?": alertify.alert("A2","Yes if not for him, I wouldn't be here.");break;

  default:
        alertify.alert("A2","I found this, for: "+value);
          window.open("https://www.google.com/search?q="+value, "Searching for "+value);
          alertify.message("Make sure that you are typing correctly");
          alertify.message("Ask for 'Help', and see all the key commands + a quick tutorial");
        //throw new FatalError();

} user();  }
               , function() { alertify.message('farewell') });