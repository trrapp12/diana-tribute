# diana-tribute


##### Contributors: Trevor Rapp

 ---
 
<br>


[![Button60](https://user-images.githubusercontent.com/11747875/145134031-63e505b6-c009-4e4b-8bd6-bc160c52c3f1.png)](https://www.dianarapp.com)

<br>



https://user-images.githubusercontent.com/11747875/148154029-a0bdf10f-a730-42ea-ad05-9a5c4b4c3f33.mp4

<br/>
<br/>

---

<img align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" />
<img align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" />
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

---

### DESCRIPTION:

> "I found the one my heart loves."
>
> -- Song of Solomon 3:4.

*This is a passion project for me.  When I took on the assignment to create a tribute page I knew immediately who I needed to give tribute to.  My wife of only two years so far is the best, kindest, sweetest person I know.  She is perpetually kind and eternally forgiving.  She is smart and capable and accomplished.  She is the person I want to become some day.*

*As you can see the project as evolved.  The original project only met the requirements of the Free Code Camp Tribute assignment.  Immediately below, you can see what the new improvements included.  Or, if you like, you can see the original requirements [here](#version1) Then step down to the next level to checkout what the version 1.0 started out as!*

<br>
<br>

---

### NEW PROJECT (v2.0) DEMONSTRATES:🆕


🆕 **Content is king**, and this version does a deep dive into content, bringing 1<sup>st</sup> person stories, secondary news sources, timelines, and photographs to turn an over-night, check-the-box effort into a serious journalistic endeavor.

🆕 Utilizes custom subdomain and serves it up with TSL certificate for secure https:// routing.

🆕 Demonstrates IntersectionObserver API with a callback function to control animations based on screen position.

🆕 Use of JavaScript for DOM manipulation and to invent engaging animations which enhance UX/UI.

🆕 Adds a super slick SVG animation.

🆕 Use of JavaScript to dynamically create and place internal hyperlinks. 

🆕 Creative use of CSS to create an intriguing and visually appealing timeline effect. 

🆕 Use of flexbox to create responsive layout.

🆕 Really awesome pulsing effect.  Tip my hat off to [Florin Pop](https://www.florin-pop.com/blog/2019/03/css-pulse-effect/) for a great tutorial on how to create it.

🆕 Use of HTML/CSS to fix a known Github error that serves the page up zoomed in at 150%. 

---

### <a name="version1">ORIGINAL PROJECT (v1.0) DEMONSTRATES:</a>


![Original Project](https://user-images.githubusercontent.com/11747875/145134811-b1988778-44ab-43fd-b194-07041f0fb393.gif)

- [X] **User Story #1:** My tribute page should have an element with a corresponding id="main", which contains all other elements.

- [X] **User Story #2:** I should see an element with a corresponding id="title", which contains a string (i.e. text) that describes the subject of the tribute page (e.g. "Dr. Norman Borlaug").

- [X] **User Story #3:** I should see either a figure or a div element with a corresponding id="img-div".

- [X] **User Story #4:** Within the img-div element, I should see an img element with a corresponding id="image".

- [X] **User Story #5:** Within the img-div element, I should see an element with a corresponding id="img-caption" that contains textual content describing the image shown in img-div.

- [X] **User Story #6:** I should see an element with a corresponding id="tribute-info", which contains textual content describing the subject of the tribute page.

- [X] **User Story #7:** I should see an a element with a corresponding id="tribute-link", which links to an outside site that contains additional information about the subject of the tribute page. HINT: You must give your element an attribute of target and set it to _blank in order for your link to open in a new tab (i.e. target="_blank").

- [X] **User Story #8:** The img element should responsively resize, relative to the width of its parent element, without exceeding its original size.

- [X] **User Story #9:** The img element should be centered within its parent element.

---

### CHALLENGES I OVERCAME...

* This was one of my first web sites, so a lot of it was still new to me.  But especially interesting challenges were 

* creating an SVG animation

```javascript  

(function () {
let j = 0;
const parent = document.getElementById('logo').children;

// console.log(parent);
    document.addEventListener('animationend', function(evt) {setTimeout( () => {
      if (evt.target.nodeName === 'path' && j === 0) {
        j++;
        console.log(parent);

        for (let i = 0; i < parent.length; i++) {
          // console.log(parent[i]);
          if (parent[i].nodeName === 'path') {

            parent[i].style.strokeDashArray = 'inherit';
            parent[i].style.strokeDashoffset = 'inherit';
            parent[i].style.animationName = 'goldtowhite';
            parent[i].style.animationDuration = '10s !important';
            parent[i].style.animationDirection = 'forwards !important';
            parent[i].style.animationTimingFunction = 'ease !important';
            parent[i].style.animationDelay = '500ms';
          } else {
            console.log('not');
          }
        }


        document.removeEventListener('animationend', function(evt) {
          return;
        });
      }
    }, 3300);
  });
})();
    
```
* making a button that would automatically take you to the next section, with each section having different sizes and end points, then when it got to the end of the page it would know to turn right side up and the next click would take you all the way back to the top+

```javascript

(() => {

let observer = new IntersectionObserver(myObserverCallback, {threshold: 0.3});

function myObserverCallback(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('javascript-card-visibility');
      observer.unobserve(entry.target);
    }
  });
}

document.querySelectorAll('.card:nth-child(even)').forEach(element => {observer.observe(element); });

let observer2 = new IntersectionObserver(myObserverCallback2, {threshold: 1});

function myObserverCallback2(entries, observer2) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      let count = 0;
      document.getElementById('button').classList.add('spin');
      window.location.href = `#event_${count}`;
      observer2.unobserve(entry.target);
    }
  });
}

document.querySelectorAll('.event_32').forEach(element => {observer2.observe(element); });

})();

```

---

### MY OWN PERSONAL CONTRIBUTIONS INCLUDED 

- [X] all work is my own.  All contributions are my own as well.

---

### ATTRIBUTIONS

No attributions applicable for this project.

---

### FREE CODE CAMP RESPONSIVE WEB DESIGN CERTIFICATE:

![freeCodeCampResponsiveWebDesign.png](https://user-images.githubusercontent.com/11747875/257409023-964325b1-9779-48c7-bc0a-a9852a93d0cb.png)

---

### YOU CAN FIND ME AT:

*For more information see my [LinkedIn](https://www.linkedin.com/in/trevor-rapp-042a1037) or return to my [Github](https://github.com/trrapp12)*



