import { Leveltype } from '../../../src/types/index';
import { levels } from './levels';
import ElementCreator from '../../components/utility/element-creator';
import { ElementsParams } from '../../types/index';
import { openMenu, closeMenu } from './menu';

const CssClasses = {
    EXAMPLES: 'example',
};

let level: Leveltype;
let currentLevel = parseInt(localStorage.currentLevel,10) || 0;
const levelTimeout = 1000;
const blankProgress = {
    totalCorrect : 0,
    percentComplete : 0,
    lastPercentEvent : 0,
    guessHistory : {}
  }
const local = localStorage.getItem("progress");
const progress = JSON.parse(`${local}`) || blankProgress;

export function loadLevel() {
    if (currentLevel < 0 || currentLevel >= levels.length) {
        currentLevel = 0;
    }
      hideTooltip();

    level = levels[currentLevel];

      if(currentLevel < 3) {
        document.querySelector(".note-toggle")?.setAttribute('style', 'display: block');
      } else {
        document.querySelector(".note-toggle")?.setAttribute('style', 'display: none');
      }

    const currentremove = document.querySelector('.level-menu .current');
    if (currentremove) {
        currentremove.classList.remove('current');
    }
    const current =
        document.querySelectorAll('.level-menu div a')[currentLevel];
    if (current) {
        current.classList.add('current');
    }

    const percent = ((currentLevel + 1) / levels.length) * 100;
    const progressbar = document.querySelector('.progress');
    if (progressbar) {
        progressbar.setAttribute('style', `width:${percent} + %`);
    }

    localStorage.setItem('currentLevel', currentLevel.toString());

    const leveltext = document.querySelector('.level-header .level-text');
    if (leveltext) {
        leveltext.innerHTML =
            'Level ' + (currentLevel + 1) + ' of ' + levels.length;
    }

    const orderheader = document.querySelector('.order');
    if (orderheader) {
        orderheader.innerHTML = level.doThis;
    }

    loadBoard();
    resetTable();

    updateProgressUI(currentLevel, checkCompleted(currentLevel));

    //
    //   $("input").val("").focus();

    const inputwrap = document.querySelector('.input-wrapper');
    if (inputwrap) {
        inputwrap.setAttribute('opacity', '1');
    }

    const result = document.querySelector('.result');
    if (result) {
        result.innerHTML = '';
    }

    setTimeout(function () {
        const sel = document.querySelectorAll('.table ' + level.selector);
        sel?.forEach(el => el.classList.add('strobe'));
        const pop = document.querySelector('.pop');
        pop?.classList.remove('pop');
    }, 200);
}

function loadBoard() {
    showHelp();
    const markuparray = level.boardMarkup.split('\n');
    let result = '';
    markuparray.forEach((el)=>{
        for(let i=0; i< el.length; i++){
            if(el[i] =='<'){
                result = result + '&lt';
            }
            else if(el[i] =='>'){
                result = result + '&gt'+ '<br>';
            } else {
                result = result + el[i];
            }
        }
    })

    const table = document.querySelector('.table');
    if (table) {
        table.innerHTML = level.boardMarkup;
    }

    addNametags();

    const inputwrap = document.querySelector('.table *');
    if (inputwrap) {
        inputwrap.classList.add('pop');
    }

    const markup = document.querySelector('.markup');
    if (markup) {
        markup.innerHTML = '<div>&ltdiv class="table"&gt' + '<br>'+ result + '&lt/div&gt</div>';
    }
}

function addNametags() {
    const nametags = document.querySelector('.nametags *');
    if (nametags) {
        nametags.remove();
    }

    const tablewrap = document.querySelector('.table-wrapper');
    if (tablewrap) {
        tablewrap.setAttribute('style', 'transform: rotateX(0)');
    }

    const table = document.querySelectorAll('.table *');
    table.forEach((el) => {
        if(el.hasAttribute("for")){
              const pos = el.getAttribute('position');
              const width = el.getAttribute('width');
              console.log(pos, width)
            }
    });

    if (tablewrap) {
        tablewrap.setAttribute('style', 'transform: rotateX(20deg)');
    }
}

function showHelp() {
    const helpTitle = level.helpTitle || '';
    const help = level.help || '';
    const examples = level.examples || [];
    const selector = level.selector || '';
    const syntax = level.syntax || '';
    const selectorName = level.selectorName || '';

    const displaysyntax = document.querySelector('.display-help .syntax');
    if (displaysyntax) {
        displaysyntax.innerHTML = syntax;
    }

    const displayselector = document.querySelector(
        '.display-help .selector-name'
    );
    if (displayselector) {
        displayselector.innerHTML = selectorName;
    }

    const displaytitle = document.querySelector('.display-help .title');
    if (displaytitle) {
        displaytitle.innerHTML = helpTitle;
    }

    const displayexamples = document.querySelector('.display-help .examples');
    if (displayexamples) {
        displayexamples.innerHTML = '';
    }

    const displayexamplestitles = document.querySelector(
        '.display-help .examples-title'
    );
    if (displayexamplestitles) {
        displayexamplestitles?.setAttribute('style', 'display: none');
    }

    for (let i = 0; i < examples.length; i++) {
        const examparams: ElementsParams = {
            tag: 'div',
            classNames: [CssClasses.EXAMPLES],
            textContent: '',
        };
        const element = new ElementCreator(examparams);
        document.querySelector('.display-help .examples')?.append(element.getElement());
        element.addInnerHTML(examples[i]);
        document.querySelector(
            '.display-help .examples-title'
        )?.setAttribute('style', 'display: block');
    }

    const displayhint = document.querySelector('.display-help .hint');
    if (displayhint) {
        displayhint.innerHTML = help;
    }

    const displaysel = document.querySelector('.display-help .selector');
    if (displaysel) {
        displaysel.innerHTML = selector;
    }
}

function resetTable() {
    document.querySelector('.display-help')?.classList.remove('open-help');
    document.querySelector('.clean,.strobe')?.classList.remove('clean,strobe');
    document.querySelector('input')?.classList.add('input-strobe');
    document.querySelector('.table-surface')?.setAttribute("style",`width: ${level.width}px`);
    document.querySelector('.table-wrapper')?.setAttribute('style', `width: ${level.width}px`);
    document.querySelector('.table-edge')?.setAttribute('style', `width: ${level.width}px`);
}

 export function checkCompleted(levelNumber: number){
if(progress.guessHistory[levelNumber]){
  if(progress.guessHistory[levelNumber].correct){
    return true;
  } else {
    return false;
  }
} else {
  return false;
}
  }

  function updateProgressUI(levelNumber: number, completed: boolean){
    if(completed) {
      const levelnumb = document.querySelector(".levels a:nth-child("+ (levelNumber+1) + ")");
      levelnumb?.classList.add("completed");
      const compl = document.querySelector(".level-header");
      compl?.classList.add("completed");
    } else {
      const compl = document.querySelector(".level-header");
      compl?.classList.remove("completed");
    }
  }

export function buildLevelmenu() {
    for (let i = 0; i < levels.length; i++) {
        const level = levels[i];
        const item = document.createElement('a');

        item.innerHTML =
            "<span class='checkmark'></span><span class='level-number'>" +
            (i + 1) +
            '</span>' +
            level.syntax;
        const levelmenu = document.querySelector('.level-menu .levels');
        levelmenu?.append(item);


          if(checkCompleted(i)){
            item.classList.add("completed");
          }

        item.addEventListener('click', function () {
            loadLevel(), closeMenu();
        });
    }
}

function enterHit() {
    const enter = document.querySelector('.enter-button');
    enter?.classList.remove('enterhit');
    enter?.setAttribute('style', 'width: ');

    enter?.classList.add('enterhit');

    const valinput = document.querySelector('input');
    const par = valinput?.value
    handleInput(par||'');
}

function handleInput(text: string){
    if(parseInt(text,10) > 0 && parseInt(text,10) < levels.length+1) {
      currentLevel = parseInt(text,10) - 1;
      loadLevel();
      return;
    }
    fireRule(text);
  }

function fireRule(rule: string) {
  document.querySelector(".shake")?.classList.remove("shake");
  document.querySelectorAll(".strobe,.clean,.shake").forEach((el) => {
    el.removeAttribute("style");
  });

  const ruleSelectedtext = document.getElementsByTagName("input")[0].value;
  const ruleSelected = document.querySelector(".table")?.querySelector(rule);

  const levelSelected = level.selector;

  let win = false;
 if (ruleSelectedtext === levelSelected){
    win = true
 } else {
    document.querySelector(".editor")?.classList.add("shake");
 }

  if(win){
    ruleSelected?.classList.remove("strobe");
    ruleSelected?.classList.add("clean");
    document.getElementsByTagName("input")[0].value = '';

    const wrap = document.querySelector(".input-wrapper");
    wrap?.setAttribute("style", "opacity: 0.2");
    updateProgressUI(currentLevel, true);
    currentLevel++;

    if(currentLevel >= levels.length) {
      winGame();
    } else {
      setTimeout(function(){
        loadLevel();
      },levelTimeout);
    }
  } else {
    ruleSelected?.classList.remove("strobe");
    ruleSelected?.classList.add("shake");

    setTimeout(function(){
      document.querySelector(".shake")?.classList.remove("shake");
      document.querySelector(".strobe")?.classList.remove("strobe");
    //   levelSelected?.classList.add("strobe");
    },500);

    const result = document.querySelector(".result");
    for(let i = 1; i >= 0; i = i - 0.1)
    setTimeout( function(){
        result?.setAttribute("style","opacity:${i}")
    },1000)
  }

  if(win){
    trackProgress(currentLevel-1, "correct");
  } else {
    trackProgress(currentLevel, "incorrect");
  }
}

function hideTooltip(){
    document.querySelector(".enhance")?.classList.remove("enhance");
    document.querySelector("[data-hovered]")?.removeAttribute("data-hovered");
    document.querySelector(".helper")?.setAttribute("style","display:none");
  }

function trackProgress(levelNumber: number, type: string){
  if(!progress.guessHistory[levelNumber]) {
    progress.guessHistory[levelNumber] = {
      correct : false,
      incorrectCount : 0,
      gaSent : false
    };
  }

  const levelStats = progress.guessHistory[levelNumber];

  if(type == "incorrect"){
    if(levelStats.correct == false) {
      levelStats.incorrectCount++;
    }
  } else {
    if(levelStats.correct == false) {
      levelStats.correct = true;
      progress.totalCorrect++;
      progress.percentComplete = progress.totalCorrect / levels.length;
      levelStats.gaSent = true;
    //   sendEvent("guess", "correct", levelNumber + 1);
    }
  }

//   const increment = .1;
//   if(progress.percentComplete >= progress.lastPercentEvent + increment) {
//     progress.lastPercentEvent = progress.lastPercentEvent + increment;
//     sendEvent("progress","percent", Math.round(progress.lastPercentEvent * 100));
//   }

  localStorage.setItem("progress",JSON.stringify(progress));
}

function winGame(){
    const win = document.querySelector(".table");
    if(win){
        win.innerHTML ='<span class="winner"><strong>You did it!</strong><br>You rock at CSS.</span>';
    }
    addNametags();
    resetTable();
  }

function addAnimation(el: HTMLElement|null){
    if(el){
        el.classList.add("link-jiggle");
        el.addEventListener("animationend",function(){
          el.classList.remove("link-jiggle");
        })
    }
  }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector(".level-menu-toggle-wrapper")?.addEventListener("click",function(){
        if(!document.querySelector(".menu-open")) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      document.querySelector(".next")?.addEventListener("click", function(){
        addAnimation(document.querySelector(".level-nav"));
        currentLevel++;
            if(currentLevel >= levels.length) {
                currentLevel = levels.length - 1;
            }
            loadLevel();
            return false;
      })
      document.querySelector(".previous")?.addEventListener("click", function(){
        addAnimation(document.querySelector(".level-nav"));
        currentLevel--;
            if(currentLevel < 0) {
                currentLevel = 0;
            }
            loadLevel();
            return false;
      })

      document.querySelector(".enter-button")?.addEventListener("click",function(){
        enterHit();
      })
      buildLevelmenu();

      const input = document.querySelector('input');
      input?.addEventListener("keypress",function(e){
        e.stopPropagation();
        if(e.keyCode ==  13){
          enterHit();
          return false;
        }
      });

})

