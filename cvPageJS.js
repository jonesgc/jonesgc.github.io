//Author: Gregory Jones
//This file will contain the various javascript functions required to make the cv page display properly and add elements of interactability if needed.


//Purpose: Make an ajax call to the php script for the content, then append it ot the html of the page.
function deliverContent() 
{
    var request = new XMLHttpRequest;
    request.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            //console.log(this.responseText);
            document.getElementById("content").innerHTML = this.responseText;

            //Run function to hide the loaded content.
            hideContentBlocs();
        }
    }
    request.open('GET', 'lib/cvPagePhp.php', true);
    request.send();
}

//Purpose: Hide and show the content on the main page according to which button on the navbar is pressed.
function displayContentToggle(contentToDisplay)
{
    var currentVisibile = "none";
    
    document.getElementById("splash").style.display = "none";
    switch (contentToDisplay) 
    {
        case education:
            //console.log("Education pressed.");
            if(document.getElementById("education").style.display === "none")
            {
                document.getElementById("education").style.display = "block";
                //Hide the other content to prevent too much scrolling, which would look strange with the photo.
                hideEduContent();
                hideUWEyrsContent();
                currentVisibile = "education";
            }
            break;

        case experience:
            //console.log("Experience pressed.");
            if(document.getElementById("experience").style.display === "none")
            {
                document.getElementById("experience").style.display = "block";
                currentVisibile = "experience";
            }
            break;
        
        case about:
            //console.log("About me pressed.");
            if(document.getElementById("about").style.display === "none")
            {
                document.getElementById("about").style.display = "block";
                currentVisibile = "about";
            }
            break;
        default:
            console.log("Error in displayContentToggle: default value.");
            break;
    }

    //Hide everything that is not meant to be visibile.
    document.querySelectorAll(".contentBloc").forEach(function(element)
    {
        if(element.id == currentVisibile)
        {   
            //console.log(element);
        }
        else
        {
            //console.log(element);
            element.style.display = "none";
        }
    });
}

//Purpose: This function will hide the elements with the class of contentBloc to fit with the display mechanics of the page.
function hideContentBlocs()
{
    console.log("Hiding blocs");
    
    document.querySelectorAll(".contentBloc").forEach( e => e.style.display = "none");
    
}

//Purpose: Hide the content of the education section but display the nav.
function hideEduContent()
{
    document.getElementById("UWE").style.display = "none";
    document.getElementById("Solent").style.display = "none";
    document.getElementById("Deanclose").style.display = "none";
}

//Purpose: Add functionality of displaying and hiding content to the education nav.
function eduNav(contentToDisplay)
{
    //console.log(contentToDisplay);
    visible = "";
    switch (contentToDisplay)
    {
        case "UWE":
            if(document.getElementById("UWE").style.display === "none")
            {   
                //console.log("Trying to display UWE");
                document.getElementById("UWE").style.display = "block";
                visible = "UWE";
            }
            break;
        
        case "Solent":
            if(document.getElementById("Solent").style.display === "none")
            {
                document.getElementById("Solent").style.display = "block";
                visible = "Solent";
            }
            break;
        
        case "Deanclose":
            if(document.getElementById("Deanclose").style.display === "none")
            {
                document.getElementById("Deanclose").style.display = "block";
                visible = "Deanclose";
            }
            break;

        default:
            console.log("Error in education nav function to display content");
            break;
    }
    
    //Hide everything that is not meant to be visibile.
    document.querySelectorAll(".eduSec").forEach(function(element)
    {
        if(element.id == visible)
        {   
            //console.log(element);
        }
        else
        {
            //console.log(element);
            element.style.display = "none";
        }
    });
}

//Purpose: Hide the content of the years in the UWE section of education but display the nav.
function hideUWEyrsContent()
{
    document.getElementById("yr1").style.display = "none";
    document.getElementById("yr2").style.display = "none";
    document.getElementById("yr3").style.display = "none";
}

//Purpose: Hide parts of year content and add the functionality for the uwe nav menu for selector years.
function uweNav(year)
{
    visible = "";

    switch (year) {
        case "yr1":
            if(document.getElementById("yr1").style.display === "none")
            {
                document.getElementById("yr1").style.display = "block";
                visible = "yr1";
            }
            break;

        case "yr2":
            if(document.getElementById("yr2").style.display === "none")
            {
                document.getElementById("yr2").style.display = "block";
                visible = "yr2";
            }
            break;

        case "yr3":
            if(document.getElementById("yr3").style.display === "none")
            {
                document.getElementById("yr3").style.display = "block";
                visible = "yr3";
            }
            break;

        default:
            console.log("Error in Uwe nav function, default value");
            break;
    }

    //Hide everything that is not meant to be visibile.
    document.querySelectorAll(".eduYr").forEach(function(element)
    {
        if(element.id == visible)
        {   
            //console.log(element);
        }
        else
        {
            //console.log(element);
            element.style.display = "none";
        }
    });
}