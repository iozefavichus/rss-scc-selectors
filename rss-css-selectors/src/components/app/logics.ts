// import { Leveltype } from '../../../src/types/index';

// let level: Leveltype;
// let currentLevel =  0;
// const levelTimeout = 1000;
// let finished = false;
// const blankProgress = {
//     totalCorrect : 0,
//     percentComplete : 0,
//     lastPercentEvent : 0,
//     guessHistory : {}
//   }

// function loadLevel(){

//   if(currentLevel < 0 || currentLevel >= levels.length) {
//     currentLevel = 0;
//   }

//   hideTooltip();

//   level = levels[currentLevel];

//   // Show the help link only for the first three levels
//   if(currentLevel < 3) {
//     document.querySelector(".note-toggle").show();
//   } else {
//     document.querySelector(".note-toggle").hide();
//   }

//   $(".level-menu .current").removeClass("current");
//   $(".level-menu div a").eq(currentLevel).addClass("current");

//   var percent = (currentLevel+1)/levels.length * 100;
//   $(".progress").css("width",percent + "%");

//   localStorage.setItem("currentLevel",currentLevel);

//   loadBoard();
//   resetTable();

//   $(".level-header .level-text").html("Level " + (currentLevel+1) + " of " + levels.length);

//   updateProgressUI(currentLevel, checkCompleted(currentLevel));

//   $(".order").text(level.doThis);
//   $("input").val("").focus();

//   $(".input-wrapper").css("opacity",1);
//   $(".result").text("");

//   //Strobe what's supposed to be selected
//   setTimeout(function(){
//     $(".table " + level.selector).addClass("strobe");
//     $(".pop").removeClass("pop");
//   },200);

// }