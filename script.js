var questionToLoad = 0;
var questions = [
  {
    question: "What are the commom english phrases used in online meetings?",
    answers: [
      "Hello!",
      "Am I audible?",
      "Good Morning!",
      "I can't hear you",
      "Is my screen visible?",
      "How are you?",
      "My internet is slow",
      "Your screen is stuck",
    ],
  },
  {
    question: "What are the most common reasons to apply leave?",
    answers: [
      "Sick Leave",
      "To attend marriage",
      "Planning a trip",
      "To attend an interview",
      "Need to visit bank",
      "Going to home town",
      "Birthday event",
      "Family Event",
    ],
  },
  {
    question: "What are the most common job locations in india?",
    answers: [
      "Bangalore",
      "Chenni",
      "Hyderabad",
      "Pune",
      "Mumbai",
      "Kolkata",
      "Gurgaon",
      "Noida",
    ],
  },
  {
    question:
      "What are the major mode of transport used for travelling to office?",
    answers: [
      "Car",
      "Motorbike",
      "Bicycle",
      "Bus",
      "Auto Rickshaw",
      "Metro",
      "Train",
      "Walk",
    ],
  },
  {
    question: "What are the mostly used Acronyms in IT Sector?",
    answers: ["WFH", "OOO", "BRB", "QC", "ASAP", "FYI", "IDK", "EOD"],
  },
  {
    question: "What are the sports with biggest indian fan base?",
    answers: [
      "Cricket",
      "Hockey",
      "Football/soccer",
      "Kabaddi",
      "Javelin Throw",
      "Kho-Kho",
      "Wresling",
      "Badminton",
    ],
  },
  {
    question: "What are the most suggested tourism places in india?",
    answers: [
      "Manali, Himachal Pradesh",
      "Leh-Ladakh, Jammu & Ladakh",
      "Ooty, Tamil Nadu",
      "Lonavala, Maharashtra",
      "Coorg, Karnataka",
      "Munnar, Kerala",
      "Dhanushkodi,Tamil Nadu",
      "Gangtok, Sikkim",
    ],
  },
  {
    question: "What do you do after you wake up in the morning?",
    answers: [
      "Brush your teeth",
      "Drink Coffee/Tea",
      "Check your phone",
      "Take a shower",
      "Make the bed",
      "Turn off alarm",
      "Drink water",
      "Nature call",
    ],
  },
  {
    question: "What do people usually lose or misplace?",
    answers: [
      "Keys",
      "Phone",
      "Glasses",
      "Wallets/Purses",
      "Remote",
      "Documents/papers",
      "Ear phones/Head phones",
      "Charger/powerbank",
    ],
  },
  {
    question: "Name something you might break?",
    answers: [
      "Bones",
      "Glasses",
      "Rules",
      "Promises",
      "Hearts",
      "Phone screen",
      "Window",
      "Pimple",
    ],
  },
];

function showAnswer(ele, index) {
  $(ele).html(
    `<div class="answer-text show animate__animated animate__zoomInDown">${questions[questionToLoad].answers[index]}</div>`
  );
}

function changeQuestion(questionIndex, side) {
  if (questions[questionIndex]) {
    let question = `${questionIndex + 1}.${questions[questionIndex].question}`;
    if (side && side === "right") {
      $(".question-container .question").addClass(
        "animate__animated animate__fadeOutLeft"
      );

      setTimeout(() => {
        $(".question-container .question").text(question);
        $(".question-container .question").removeClass(
          "animate__animated animate__fadeOutLeft"
        );
        $(".question-container .question").addClass(
          "animate__animated animate__fadeInRight"
        );
      }, 950);

      setTimeout(() => {
        $(".question-container .question").removeClass(
          "animate__animated animate__fadeInRight"
        );
      }, 1900);
    } else if (side && side === "left") {
      $(".question-container .question").addClass(
        "animate__animated animate__fadeOutRight"
      );

      setTimeout(() => {
        $(".question-container .question").text(question);
        $(".question-container .question").removeClass(
          "animate__animated animate__fadeOutRight"
        );
        $(".question-container .question").addClass(
          "animate__animated animate__fadeInLeft"
        );
      }, 950);

      setTimeout(() => {
        $(".question-container .question").removeClass(
          "animate__animated animate__fadeInLeft"
        );
      }, 1900);
    } else {
      $(".question-container .question").text(question);
    }
  }
  if (questionIndex === 0) {
    $(".left-question").hide();
  } else {
    $(".left-question").show();
  }
  if (questionIndex === questions.length - 1) {
    $(".right-question").hide();
  } else {
    $(".right-question").show();
  }

  $(".answer").each(function (index) {
    let currentAnswer = this;
    $(currentAnswer).html(
      `<div class="answer-text animate__animated animate__fadeInDown">${
        index + 1
      }.</div>`
    );
    setTimeout(() => {
      $(currentAnswer).html(`<div class="answer-text">${index + 1}.</div>`);
    }, 800);
  });
}

function nextQuestion() {
  questionToLoad++;
  changeQuestion(questionToLoad, "right");
  $(".right-question").addClass("animate__animated animate__shakeX");
  setTimeout(() => {
    $(".right-question").removeClass("animate__animated animate__shakeX");
  }, 1000);
}

function prevQuestion() {
  questionToLoad--;
  changeQuestion(questionToLoad, "left");
  $(".left-question").addClass("animate__animated animate__shakeX");
  setTimeout(() => {
    $(".left-question").removeClass("animate__animated animate__shakeX");
  }, 1000);
}

$("document").ready(function () {
  changeQuestion(0);
});

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});

/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);
