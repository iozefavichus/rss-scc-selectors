export const levels = [
    {
      helpTitle : "Select elements by their type",
      selectorName : "Type Selector",
      doThis : "Select the plates",
      selector : "plate",
      syntax : "A",
      help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
      examples : [
        '<strong>div</strong> selects all <tag>div</tag> elements.',
        '<strong>p</strong> selects all <tag>p</tag> elements.',
      ],
      boardMarkup: `
      <plate/>
      <plate/>
      `
    },
  {
    helpTitle : "Select elements by their type",
    selectorName : "Type Selector",
    doThis : "Select the bento boxes",
    selector : "bento",
    syntax : "A",
    help : "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples : [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Select elements with an ID",
    selectorName: "ID Selector",
    doThis : "Select the fancy plate",
    selector : "#fancy",
    syntax: "#id",
    help : 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples : [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "Select an element inside another element",
    selectorName : "Descendant Selector",
    doThis : "Select the apple on the plate",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    helpTitle: "Combine the Descendant & ID Selectors",
    selectorName : "",
    doThis : "Select the pickle on the fancy plate",
    selector : "#fancy pickle",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'You can combine any selector with the descendent selector.',
    examples : [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    helpTitle: "Select elements by their class",
    selectorName: "Class Selector",
    doThis : "Select the small apples",
    selector : ".small",
    syntax: ".classname",
    help : 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples : [
    '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    helpTitle: "Combine the Class Selector",
    selectorName: "",
    doThis : "Select the small oranges",
    selector : "orange.small",
    syntax: "A.className",
    help : 'You can combine the class selector with other selectors, like the type selector.',
    examples : [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    helpTitle: "You can do it...",
    selectorName: "",
    doThis : "Select the small oranges in the bentos",
    selector : "bento orange.small",
    syntax: "Put your back into it!",
    help : 'Combine what you learned in the last few levels to solve this one!',
    examples : [],
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  }
]