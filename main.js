
// Login Function


// Logout Function


// coding Function

// math Function

// back Function

// reload Function







function submitAnswers(){
    var total=2;
    var score=0;
    var j=0;
    var k=0;
    var a=[];
    /* Get user Input*/
    q1 = document.forms['quiz']['q1'].value;
    q2 = document.forms['quiz']['q2'].value;
      var a= [q1,q2];
       // Validation

    for(i=0; i < total; i++){
        j=i+1;
       if(a[i]==''){
          
      alert('You missed Question '+j);
      return false;
    }}    

    // Set Correct Answers

    var answers=["c","c"];

    // Check Answers
    for(i=0; i < a.length; i++){
      j=i+1,
      k="ans"+j

    if(a[i] == answers[i]){
       
     score++;
      document.getElementById(k).style.color="Green";
      document.getElementById(k).innerHTML= "The Correct Answer is :&quot;"+ answers[i]+ "&quot;"; 
      
    }
    else{
        document.getElementById(k).style.color="red";
        document.getElementById(k).innerHTML= "Wrong!! The Correct answer is &quot;"+ answers[i]+"&quot;"; 
    }
}
    
    //Display Results
    document.getElementById('results').innerHTML ='<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>'
    return false;
  }
  
