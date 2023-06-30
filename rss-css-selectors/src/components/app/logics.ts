import { Leveltype } from '../../../src/types/index';
import { levels } from './levels';
import ElementCreator from '../../components/utility/element-creator';
import { ElementsParams } from '../../types/index';

const CssClasses = {
    EXAMPLES: 'example',
}

let level: Leveltype;
let currentLevel =  0;
// const levelTimeout = 1000;
// const finished = false;
// const blankProgress = {
//     totalCorrect : 0,
//     percentComplete : 0,
//     lastPercentEvent : 0,
//     guessHistory : {}
//   }
// export {level, finished, currentLevel};

// const progress = JSON.parse(localStorage.getItem("progress") || '') || blankProgress;
// console.log(progress);

export function loadLevel(){

  if(currentLevel < 0 || currentLevel >= levels.length) {
    currentLevel = 0;
  }

//   hideTooltip();

  level = levels[currentLevel];


//   if(currentLevel < 3) {
//     document.querySelector(".note-toggle").show();
//   } else {
//     document.querySelector(".note-toggle").hide();
//   }

    const currentremove = document.querySelector(".level-menu .current");
    if(currentremove){
        currentremove.classList.remove("current");
    }
    const current = document.querySelectorAll(".level-menu div a")[currentLevel];
    if(current){
        current.classList.add("current");
    }

    const percent = (currentLevel + 1)/levels.length * 100;
    const progressbar = document.querySelector(".progress");
    if (progressbar){
        progressbar.setAttribute('style', `width:${percent} + %`);
    }

    localStorage.setItem("currentLevel", currentLevel.toString());

    const leveltext = document.querySelector(".level-header .level-text");
    if(leveltext){
        leveltext.innerHTML = "Level " + (currentLevel + 1) + " of " + levels.length;
    };

    const orderheader = document.querySelector(".order");
    if(orderheader){
       orderheader.innerHTML = level.doThis
   };

    loadBoard();
    resetTable();

    // updateProgressUI(currentLevel, checkCompleted(currentLevel));

//
//   $("input").val("").focus();

    const inputwrap = document.querySelector(".input-wrapper");
    if (inputwrap){
        inputwrap.setAttribute('opacity', '1');
    }

    const result = document.querySelector(".result");
    if(result){
        result.innerHTML = "";
    };

//   //Strobe what's supposed to be selected
//   setTimeout(function(){
//     $(".table " + level.selector).addClass("strobe");
//     $(".pop").removeClass("pop");
//   },200);

}

function loadBoard(){

    // const boardString = level.board;  // just a placeholder to iterate over...
    // boardMarkup = ""; // what is this
    // const tableMarkup = ""; // what is this
    // const editorMarkup = ""; // this is a string that represents the HTML
    showHelp();

    // const lev = document.querySelector(level.boardMarkup);
    // lev.forEach(function(i,el){
    //   if(el.nodeType == 1){
    //     const result = getMarkup(el);
    //     markupHolder.append(result);
    //   }
    // });

    const table= document.querySelector(".table");
    if(table){
        table.innerHTML = level.boardMarkup;
    }
    addNametags();
    const inputwrap = document.querySelector(".table *");
    if(inputwrap){
        inputwrap.classList.add("pop");
    }

    const markupHolder = document.querySelector("<div/>")

    const markup = document.querySelector(".markup");
    if(markup&&markupHolder){
        // markup.innerHTML = '<div>&ltdiv class="table"&gt' + markupHolder.html() + '&lt/div&gt</div>';
        markup.innerHTML = '<div>&ltdiv class="table"&gt' + '&lt/div&gt</div>';

    }
  }

  function addNametags(){
    const nametags = document.querySelector(".nametags *");
    if(nametags){
        nametags.remove();
    }

    const tablewrap = document.querySelector(".table-wrapper");
    if(tablewrap){
        tablewrap.setAttribute("style", "transform: rotateX(0)");
    }
//   $(".table-wrapper").width($(".table-wrapper").width());

    const table = document.querySelectorAll(".table *");
        table.forEach(() => {
            // if($(this).attr("for")){
                //       var pos = $(this).position();
                //       var width = $(this).width();
                //       var nameTag = $("<div class='nametag'>" + $(this).attr("for") + "</div>");
                //       $(".nametags").append(nameTag);
                //       var tagPos = pos.left + (width/2) - nameTag.width()/2 + 12;
                //       nameTag.css("left",tagPos);
                //     }
        });


    if(tablewrap){
        tablewrap.setAttribute("style", "transform: rotateX(20deg)");
    }
}

function showHelp() {

  const helpTitle = level.helpTitle || "";
  const help = level.help || "";
  const examples = level.examples ||[];
  const selector = level.selector || "";
  const syntax = level.syntax || "";
//   const syntaxExample = level.syntaxExample || "";
  const selectorName = level.selectorName || "";

  const displaysyntax = document.querySelector(".display-help .syntax");
    if(displaysyntax){
      displaysyntax.innerHTML = syntax;
};
//   const displaysyntaxhelp = document.querySelector(".display-help .syntax-example");
//     if(displaysyntaxhelp){
//       displaysyntaxhelp.innerHTML = syntaxExample;
// };

  const displayselector = document.querySelector(".display-help .selector-name");
  if(displayselector){
    displayselector.innerHTML = selectorName;
};

  const displaytitle = document.querySelector(".display-help .title");
    if(displaytitle){
        displaytitle.innerHTML = helpTitle;
};

  const displayexamples = document.querySelector(".display-help .examples");
    if(displayexamples){
        displayexamples.innerHTML = '';
};

  const displayexamplestitles = document.querySelector(".display-help .examples-title");
    if(displayexamplestitles){
        displayexamplestitles?.setAttribute("style","display: none")
};

  for(let i = 0; i < examples.length; i++){
    const examparams: ElementsParams ={
        tag: 'div',
        classNames: [CssClasses .EXAMPLES],
        textContent: ''
    };
    const element = new ElementCreator(examparams);
    const exam = document.querySelector(".display-help .examples");
    exam?.append(element.getElement());
    element.addInnerHTML(examples[i]);
    const examtitles = document.querySelector(".display-help .examples-title");
    examtitles?.setAttribute("style","display: block");
  }


const displayhint = document.querySelector(".display-help .hint");
    if(displayhint){
        displayhint.innerHTML = help;
};

const displaysel = document.querySelector(".display-help .selector");
    if(displaysel){
        displaysel.innerHTML = selector;
};
}

function resetTable(){
    const displayhelp = document.querySelector(".display-help");
    displayhelp?.classList.remove("open-help");

    const clean = document.querySelector(".clean,.strobe");
    clean?.classList.remove("clean,strobe");

    const strobe = document.querySelector("input");
    strobe?.classList.add("input-strobe");

    const table = document.querySelectorAll(".table *");
    table.forEach(() => {
        // (this).width($(this).width());
    });

    const tableWidth = document.querySelector(".table");
    tableWidth?.setAttribute("style","outerWidth:''");
    const tableedge = document.querySelector(".table-wrapper, .table-edge");
    tableedge?.setAttribute("style", "width: ${tableWidth}")
  }

//  export function checkCompleted(levelNumber: number){
    // if(progress.guessHistory[levelNumber]){
    //   if(progress.guessHistory[levelNumber].correct){
    //     return true;
    //   } else {
    //     return false;
    //   }
    // } else {
    //   return false;
    // }
//   }

//   function updateProgressUI(levelNumber: number, completed: boolean){
//     if(completed) {
//       const levelnumb = document.querySelector(".levels a:nth-child("+ (levelNumber+1) + ")");
//       levelnumb?.classList.add("completed");
//       const compl = document.querySelector(".level-header");
//       compl?.classList.add("completed");
//     } else {
//       const compl = document.querySelector(".level-header");
//       compl?.classList.remove("completed");
//     }
//   }

export function buildLevelmenu(){
    for(let i = 0; i < levels.length; i++){
      const level = levels[i];
      const item = document.createElement("a");

      item.innerHTML ="<span class='checkmark'></span><span class='level-number'>" + (i+1) + "</span>" + level.syntax;
      const levelmenu = document.querySelector(".level-menu .levels");
      levelmenu?.append(item);

    //   if(checkCompleted(i)){
    //     item.classList.add("completed");
    //   }

      item.addEventListener("click", function(){
        // finished = false;
        // currentLevel = $(this).index();
        loadLevel(),
        closeMenu();
      }
    )};
}


  export function closeMenu(){
    const close = document.querySelector(".right-col");
    close?.classList.remove("menu-open");
  }

  export function openMenu(){
    const open = document.querySelector(".right-col");
    open?.classList.add("menu-open");
  }