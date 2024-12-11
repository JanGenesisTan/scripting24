function write(){

    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var base = document.getElementById('base').value;
    var sibling = document.getElementById('sibling').value;
    var dog = document.getElementById('dog').value;
    var car = document.getElementById('car').value;
    var food = document.getElementById('food').value;
    var dream = document.getElementById('dream').value;
    var place = document.getElementById('place').value;
    var show = document.getElementById('show').value;


    if (name == "" || name == null || city == "" || city == null || base == "" || base == null || sibling == "" || sibling == null || dog == "" || dog == null || car == "" || car == null || food == "" || food == null || dream == "" || dream == null || place == "" || place == null || show == "" || show == null) {
        alert("Please answer all input fields.");
        
    } else {

        document.getElementById("choice").style.display = 'block';

        document.getElementById("synopsis").style.display = 'none';

        document.getElementById("inputFields").style.display = 'none';

        document.getElementById("firstHR").style.display = 'none';

        document.getElementById("output3").style.display = 'block';

        document.getElementById('output3').innerHTML = "<p>You are "+name+", a survivor in the sudden snow storm that devastated "+city+" city. You have been holding up in the "+base+" in the past month. Your rations are getting thin and you need to go out and get some supplies to avoid dying from starvation and dehydration. <br><br> Your sibling, "+sibling+" has also been missing for more than a week now. You set forth in the cold endless night to find your lost sibling and to gather some supplies along the way. You only have your dog, "+dog+" to guide you outside in the dark. <br><br> You also have a car, a "+car+" that's been sitting outside ever since but you're worried that the heavy snow might have damaged it. Your tummy grumbles as you remember your favourite food which is "+food+". Your dream on becoming a "+dream+" is what also gives you strength to survive this snowstorm. You'll be going to the "+place+" once you find your sibling and watch "+show+" when everything settles down. <br><br> With a flashlight on hand and your guide dog "+dog+", by your side. <b>What happens next will determine if you will die or survive this cold endless night.</b></p>";
    }
}


function write2(){

    var name = document.getElementById('name').value;
    var city = document.getElementById('city').value;
    var base = document.getElementById('base').value;
    var sibling = document.getElementById('sibling').value;
    var dog = document.getElementById('dog').value;

    var choice = document.querySelector('input[name="choice"]:checked').value;

    var choiceMessage;

    
   if(choice=="goOut"){
        choiceMessage = "you survived!";
        document.getElementById("theEnding").style.display = 'block';
        document.getElementById("output2").style.display = 'block';
        document.getElementById('output2').innerHTML = "<img src=\"images/you-win-img.jpg\" alt="You win"> <br><br> <p><b>Congratulations "+name+", "+choiceMessage+"</b> <br> You managed to find a settlement and get reunited with your sibling, "+sibling+".</p>";
    }else if(choice=="dontGoOut"){
        choiceMessage = "you died.";
        document.getElementById("theEnding").style.display = 'block';
        document.getElementById("output2").style.display = 'block';
        document.getElementById('output2').innerHTML = "<img src=\"images/you-died-img.jpg\" alt="You died"> <br><br> <p><b>I'm sorry "+name+", "+choiceMessage+"</b> <br> You ran out of ration and supplies and died from the cold winter.</p>";
    }

    document.getElementById("inputFields").style.display = 'none';

    document.getElementById("output3").style.display = 'none';

    document.getElementById("theStory").style.display = 'none';

    document.getElementById("secondHR").style.display = 'none';

    document.getElementById("theChoice").style.display = 'none';

    document.getElementById("radioButtonChoice").style.display = 'none';
                                                                                                                                                                                           
}

// Images and video were downloaded from unsplash.com
