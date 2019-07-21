<?php
//Author: Gregory Jones
//This file will serve content to the front end of the cvPage, there are no plans current for cookie or sessioning for this project at this time.

include_once "config.php";

//Need to find a way of passing the content around without using this global, should use a function with a return.
global $content;

//Find and load content files, then serve them to the frontend.
if(file_exists($eduPath))
{
    //Education content.
    $eduContent = file_get_contents($eduPath);
    $content .= $eduContent;

    //Work experience content.
    $workExperienceContent = file_get_contents($workExperiencePath);
    $content .= $workExperienceContent;

    //About me content.
    $aboutContent = file_get_contents($aboutPath);
    $content .= $aboutContent;
};

echo $content;

?>