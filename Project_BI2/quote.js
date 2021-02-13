const quotes = [
    'I only write when I’m inspired, so I see to it that I’m inspired every morning at nine o’clock.',
    'Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work',
    'If you want to be a writer, you must do two things above all others: read a lot and write a lot.',
    'There is no greater agony than bearing an untold story inside you.',
    'I love deadlines. I love the whooshing noise they make as they go by',
    'Just write every day of your life. Read intensely. Then see what happens. Most of my friends who are put on that diet have very pleasant careers',
    'Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you; figure out what you have to say. It’s the one and only thing you have to offer',
    'The English language is an arsenal of weapons. If you are going to brandish them without checking to see whether or not they are loaded, you must expect to have them explode in your face from time to time',
    'If my doctor told me I had only six minutes to live, I wouldn’t brood. I’d type a little faster',
    'Good writing is remembering detail. Most people want to forget. Don’t forget things that were painful or embarrassing or silly. Turn them into a story that tells the truth'

]
const colors = ['blue','red','gray','navy','darkcyan','DarkMagenta','coral','blueViolet','indigo'];
const daytime = ['morning','afternoon','night']
const author = ['Peter De Vries','Steven King','Stephen King','Maya Angelou','Burton Rascoe','Ray Bradbury','Barbara Kingsolver','Stephen Fry','Isaac Asimov','Ernest Hemingway' ]
document.body.style.backgroundColor = "DarkMagenta";
document.getElementById("btn1").style.backgroundColor = "DarkMagenta";
document.getElementById("main-div").style.color = "DarkMagenta";
function colorchange(){
    var y = Math.floor((Math.random() * 10) );
    let color = colors[y];
    var quot = quotes[y];
    var authors = author[y]; 
    document.body.style.backgroundColor = color;
    document.getElementById("btn1").style.backgroundColor = color;
    document.getElementById("main-div").style.color = color;
    document.getElementById("text1").innerText = quot;
    document.getElementById("auth").innerText = "-"+authors;
}

document.getElementById("btn1").onclick = colorchange;

function main(){
var x = Math.floor((Math.random() * 10) );
console.log(x);
let tet = quotes[x];
var today = new Date();
var time = today.getHours();
    if(time<12){
      var dayt= daytime[0];
    }
    else if(time>=12 && time<5){
        var dayt= daytime[1];
    }
    else{
        var dayt= daytime[2];
    }
    document.getElementById("idh1").innerText="let's start our " +dayt+ " with a new quote";
}
main();
