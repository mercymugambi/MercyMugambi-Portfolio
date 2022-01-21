/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

    {
        "particles": {
            "number": {
                "value": 5,
                "density": {
                    "enable": true,
                    "value_area": 300
                }
            },
            "color": {
                "value": "#5a5b5b"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 3,
                    "color": "#5a5b5b"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 30,
                    "height": 30
                }
            },
            "opacity": {
                "value": .001,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed":2,
                    "opacity_min": .000001,
                    "sync": false
                }
            },
            "size": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 5,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 300,
                "color": "#5a5b5b",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": .001
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": .003,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#5a5b5b",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    }

);