// =====================
// GLOBALS
// =====================

const app =
document.getElementById(
"app"
);

const music =
document.getElementById(
"bgMusic"
);

let noAttempts = 0;
let currentMemory = 0;

// =====================
// MEMORIES
// =====================

const memories = [
"assets/memories1.jpg",
"assets/memories2.jpg",
"assets/memories3.jpg"
];

const captions = [
"One of my favourite memories ❤️",
"A moment I'll never forget 🥹",
"Every picture tells a story 💕"
];

// =====================
// FINAL LETTER
// =====================

const finalMessage = `
Swapnali 💖🌸

There are so many things I want to say, but if I had to put it simply, I just love spending time with you 🥹❤️

Whether it's our long conversations, random talks, or those moments where I act completely childish around you, they are honestly some of the best parts of my day ✨

No matter how much time we spend together, I always feel like I need a little more. Somehow, it never feels enough 💕

You have been my biggest supporter. Whenever I'm confused, lost, or overthinking things, you always guide me towards the right path 🌷

Your presence in my life makes everything easier to handle ❤️

One thing I admire most about you is how childish and cute you can be in one moment and then so mature and strong in the next ✨

You're someone who works the whole day, comes home tired, and still studies to achieve your goals 🌸

Honestly, you're amazing 💖

People celebrate birthdays because it's a special day for the person born on that date 🎂

But for me, your birthday is special because it's the day someone so important came into this world ❤️

I don't really ask for much.

I just want you to stay with me, keep smiling, keep chasing your dreams, and keep being the wonderful person you are 🌷

Thank you for being you 💕

And thank you for being a part of my life ✨

Happy Birthday Swapnali ❤️

Aditya ❤️
`;

// =====================
// MUSIC
// =====================

function playMusic(){

  music.play()
  .catch(()=>{});

}

// =====================
// ANIMATION
// =====================

function animateScreen(){

  gsap.from(
  ".slide",
  {
    opacity:0,
    y:35,
    scale:.96,
    duration:.8,
    ease:"power3.out"
  });

}

function sparkle(x,y){

  const s =
  document.createElement(
  "div"
  );

  s.className =
  "sparkle";

  s.innerHTML =
  "✨";

  s.style.left =
  x + "px";

  s.style.top =
  y + "px";

  document.body
  .appendChild(s);

  setTimeout(()=>{
    s.remove();
  },700);

}

// =====================
// CLICK EFFECTS
// =====================

document.addEventListener(
"click",
(e)=>{

  const paw =
  document.createElement(
  "div"
  );

  paw.className =
  "paw";

  paw.innerHTML =
  "🐾";

  paw.style.left =
  e.clientX + "px";

  paw.style.top =
  e.clientY + "px";

  document.body
  .appendChild(
  paw
  );

  sparkle(
  e.clientX,
  e.clientY
  );

  setTimeout(()=>{
    paw.remove();
  },700);

});

// =====================
// PETALS
// =====================

setInterval(()=>{

  const petal =
  document.createElement(
  "div"
  );

  petal.className =
  "petal";

  petal.innerHTML =
  "🌸";

  petal.style.left =
  Math.random()
  *
  window.innerWidth
  + "px";

  document.body
  .appendChild(
  petal
  );

  let topPos = -20;

  const fall =
  setInterval(()=>{

    topPos += 3;

    petal.style.top =
    topPos + "px";

    if(
    topPos >
    window.innerHeight
    ){
      clearInterval(
      fall
      );

      petal.remove();
    }

  },30);

},700);

// =====================
// HEARTS
// =====================

setInterval(()=>{

  const heart =
  document.createElement(
  "div"
  );

  heart.className =
  "heart";

  heart.innerHTML =
  "❤️";

  heart.style.left =
  Math.random()
  *
  window.innerWidth
  + "px";

  document.body
  .appendChild(
  heart
  );

  setTimeout(()=>{
    heart.remove();
  },7000);

},2000);

// =====================
// INTRO
// =====================

function showIntro(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Some days are special…
    but today feels
    different 🌸
    </h1>

    <p>
    Because someone
    important came
    into this world ❤️
    </p>

    <button
    onclick=
    "startWebsite()">
    Open Your
    Surprise 💌
    </button>

  </div>
  `;

  animateScreen();
}

function startWebsite(){

  playMusic();

  sparkle(
  window.innerWidth/2,
  window.innerHeight/2
  );

  showDateScreen();
}

// =====================
// DATE SCREEN
// =====================

function showDateScreen(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Birthday
    Verification 🎂
    </h1>

    <p>
    What is today's
    date? 🤭
    </p>

    <img
    src=
    "assets/surprise.gif"
    class=
    "main-img">

    <input
    id=
    "dateInput"
    placeholder=
    "DD/MM/YYYY">

    <br>

    <button
    onclick=
    "checkDate()">
    Continue 💖
    </button>

  </div>
  `;

  animateScreen();
}

function checkDate(){

  const enteredDate =
  document
  .getElementById(
  "dateInput"
  )
  .value
  .trim()
  .toLowerCase();

  const validDates = [
  "13-07-2026",
  "13/07/2026",
  "13 july 2026"
  ];

  if(
  validDates.includes(
  enteredDate
  )){

    sparkle(
    window.innerWidth/2,
    window.innerHeight/2
    );

    app.innerHTML = `
    <div class="slide">

      <h1>
      Hmm… impressive 😌💕
      </h1>

      <p>
      Looks like someone
      actually remembers
      important dates ✨
      </p>

      <img
      src=
      "assets/correct.gif"
      class=
      "main-img">

      <button
      onclick=
      "showQuestion1()">
      Continue 🌸
      </button>

    </div>
    `;

  }else{

    app.innerHTML = `
    <div class="slide">

      <h1>
      Hmm...
      that's not right 😏
      </h1>

      <p>
      Think carefully 🤭
      </p>

      <img
      src=
      "assets/staring.gif"
      class=
      "main-img">

      <button
      onclick=
      "showDateScreen()">
      Try Again 💕
      </button>

    </div>
    `;

  }

  animateScreen();
    }
// =====================
// MEMORY SCREEN
// =====================

function showMemoryChoice(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    Before the final
    surprise... 📸
    </h1>

    <p>
    Want to see some
    special memories?
    🥹❤️
    </p>

    <button
    onclick=
    "showMemory()">
    YES ❤️
    </button>

    <button
    onclick=
    "showMemory()">
    ABSOLUTELY YES ❤️
    </button>

  </div>
  `;

  animateScreen();
}

// =====================
// MEMORY SLIDESHOW
// =====================

function showMemory(){

  currentMemory = 0;

  app.innerHTML = `
  <div class="slide">

    <h1>
    Memory Lane 💕
    </h1>

    <img
    id="memoryPhoto"
    src="${memories[0]}"
    class="memory-img">

    <p
    id="memoryCaption">
    ${captions[0]}
    </p>

    <button
    onclick=
    "nextMemory()">
    Next 💖
    </button>

  </div>
  `;

  animateScreen();
}

function nextMemory(){

  currentMemory++;

  if(
  currentMemory <
  memories.length
  ){

    const img =
    document.getElementById(
    "memoryPhoto"
    );

    img.style.opacity =
    "0";

    setTimeout(()=>{

      img.src =
      memories[
      currentMemory
      ];

      document
      .getElementById(
      "memoryCaption"
      )
      .innerHTML =
      captions[
      currentMemory
      ];

      img.style.opacity =
      "1";

    },400);

  }else{

    showEnvelope();

  }

}

// =====================
// ENVELOPE SCREEN
// =====================

function showEnvelope(){

  app.innerHTML = `
  <div class="slide">

    <h1>
    One unread letter 💌
    </h1>

    <p>
    Tap the envelope ✨
    </p>

    <div
    class="envelope"
    onclick=
    "openLetter()">
    💌
    </div>

  </div>
  `;

  animateScreen();
}

// =====================
// TYPEWRITER
// =====================

function typeWriter(
text,
elementId,
speed = 35
){

  let i = 0;

  const target =
  document.getElementById(
  elementId
  );

  target.innerHTML = "";

  const timer =
  setInterval(()=>{

    if(
    i < text.length
    ){

      target.innerHTML +=
      text.charAt(i)
      === "\n"
      ? "<br>"
      : text.charAt(i);

      i++;

    }else{

      clearInterval(
      timer
      );

      confetti({
        particleCount:250,
        spread:120,
        origin:{
          y:.6
        }
      });

    }

  },speed);

}

// =====================
// FINAL LETTER
// =====================

function openLetter(){

  app.innerHTML = `

  <img
  id="bgMemory"
  src="${memories[0]}"
  class="memory-bg">

  <div class="slide">

    <h1>
    Happy Birthday
    Swapnali ❤️
    </h1>

    <div
    class="letter">

      <div
      id=
      "typingMessage">
      </div>

    </div>

  </div>
  `;

  animateScreen();

  // Background slideshow
  let bgIndex = 0;

  setInterval(()=>{

    bgIndex++;

    const bg =
    document.getElementById(
    "bgMemory"
    );

    if(bg){

      bg.style.opacity =
      ".12";

      setTimeout(()=>{

        bg.src =
        memories[
        bgIndex %
        memories.length
        ];

        bg.style.opacity =
        ".18";

      },500);

    }

  },4000);

  // Start typing
  typeWriter(
  finalMessage,
  "typingMessage",
  34
  );

}

// =====================
// START WEBSITE
// =====================

showIntro();
