var quizMatrix = [
    ["What does CSS stand for?", "Cascading Style Sheets", "Creative Style Symbols", "Computer Style Sheets", "Colorful Style Scripts"],
    ["Which programming language is most actively used for web development?", "JavaScript", "Java", "Python", "C++"],
    ["What is the latest version of HTML as of 2023?", "HTML5", "HTMLX", "HTML2023", "HTMLNext"],
    ["Which company developed the first graphical web browser?", "Netscape", "Microsoft", "Google", "Mozilla"],
    ["In JavaScript, what is the 'NaN' value?", "Not a Number", "Null and Negative", "No Action Needed", "Newly Assigned Number"],
    ["What does the 'HTTP' stand for in a website address?", "Hypertext Transfer Protocol", "Hyperlink Text Tracking", "HTML Text Translation Process", "High-Traffic Testing Platform"],
    ["What does the term 'DRY' mean in programming?", "Don't Repeat Yourself", "Do Repeat Yourself", "Define Readable YAML", "Deploy Remote Yarn"],
    ["Which company developed the programming language 'Swift'?", "Apple", "Microsoft", "Google", "Adobe"],
    ["Which programming language is most commonly used for machine learning and data analysis?", "Python", "JavaScript", "C++", "Ruby"],
    ["Which protocol is used to secure data transmission over the internet?", "HTTPS", "HTTP", "FTP", "SMTP"],
];  

var controller = document.getElementById("inp");
var bar = document.getElementById("selectBar");
var numbOfQ = document.getElementById("numbOfQuestions");
numbOfQ.textContent = controller.value + " questions";
proportion = (+controller.value / +controller.max * 100)
bar.style.width = proportion+"%";


var proportion=0;
controller.addEventListener("input", function(){
    proportion = (+controller.value / +controller.max * 100)
    bar.style.width = proportion+"%";
    numbOfQ.textContent = controller.value + " questions";
});

document.getElementById("start").addEventListener("click", () => {
    if(document.getElementById("NameInput").value==""){
        alert("Please enter your name and surname")
    }
    else{
    document.getElementById("startcont").style.bottom = "-19rem";

    var order = [];
    while(order.length < controller.value){
        var r = Math.floor(Math.random() * 10);
        if(order.indexOf(r) === -1){
            order.push(r);
            console.log(r)
        } 
    }

    var i = -1;
    var rightOne;
    var selection;
    var score = -1;

    varselected();

    function changeLabels(){
        document.getElementById("progb").innerHTML = "Question "+(i+1)+" out of "+order.length;
        document.getElementById("sp").innerHTML = quizMatrix[order[i]][0];

        rightOne = Math.floor(Math.random() * 4);
        if(rightOne==0){
            document.getElementById("aa").innerHTML = quizMatrix[order[i]][1];
            document.getElementById("bb").innerHTML = quizMatrix[order[i]][2];
            document.getElementById("ee").innerHTML = quizMatrix[order[i]][3];
            document.getElementById("cc").innerHTML = quizMatrix[order[i]][4];
        }
        if(rightOne==1){
            document.getElementById("aa").innerHTML = quizMatrix[order[i]][2];
            document.getElementById("bb").innerHTML = quizMatrix[order[i]][1];
            document.getElementById("ee").innerHTML = quizMatrix[order[i]][4];
            document.getElementById("cc").innerHTML = quizMatrix[order[i]][3];
        }
        if(rightOne==2){
            document.getElementById("aa").innerHTML = quizMatrix[order[i]][4];
            document.getElementById("bb").innerHTML = quizMatrix[order[i]][3];
            document.getElementById("ee").innerHTML = quizMatrix[order[i]][1];
            document.getElementById("cc").innerHTML = quizMatrix[order[i]][2];
        }
        if(rightOne==3){
            document.getElementById("aa").innerHTML = quizMatrix[order[i]][4];
            document.getElementById("bb").innerHTML = quizMatrix[order[i]][2];
            document.getElementById("ee").innerHTML = quizMatrix[order[i]][3];
            document.getElementById("cc").innerHTML = quizMatrix[order[i]][1];
        }
    }

    function varselected(){
        if(selection == rightOne) score++;
        console.log("score = " + score);

        document.getElementById("cont").style.bottom = "-22rem";
        document.getElementById("question").style.transform = "scale(0)";
        document.getElementById("question").style.opacity = "0%";
        if((i+1)<order.length){
            setTimeout(() => {
                document.getElementById("cont").style.bottom = "3rem";
                document.getElementById("topper").style.top = "3rem";
                document.getElementById("question").style.transform = "scale(1)";
                document.getElementById("question").style.opacity = "100%";
                document.getElementById("htxt").innerHTML = "";
                i++
                changeLabels();
            }, 1000);
        }
        else{
            document.getElementById("topper").style.top = "-10rem";
            setTimeout(() => {
                document.getElementById("question").style.transform = "scale(1)";
                document.getElementById("question").style.opacity = "100%";
                document.getElementById("sp").innerHTML = "Your score: " + score + " / " + order.length + "  (" + Math.trunc((score/order.length)*100) + "%)";
                document.getElementById("restartcont").style.bottom = "3rem";      
            }, 1100);
        }
    }

    document.getElementById("a").addEventListener("click", () => {
        selection=0;
        varselected();
    });
    document.getElementById("b").addEventListener("click", () => {
        selection=1;
        varselected();
    });
    document.getElementById("e").addEventListener("click", () => {
        selection=2;
        varselected();
    });
    document.getElementById("c").addEventListener("click", () => {
        selection=3;
        varselected();
    });
    }
});

document.getElementById("restart").addEventListener("click", () => {
    location.reload();
});
