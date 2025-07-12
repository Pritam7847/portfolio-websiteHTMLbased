const spans = document.querySelectorAll('.content span');
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`; // Stagger each letter by 0.1s
});

document.getElementById('cssbuttons-io-button').onclick = function() {
    window.location.href = "about.html";
};

document.getElementById('logo-1').onclick = function() {
    window.location.href = "https://www.linkedin.com/in/pritam-anand-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
};

document.getElementById('logo-2').onclick = function() {
    window.location.href = "https://github.com/Pritam7847";
};

document.getElementById('logo-3').onclick = function() {
    window.location.href = "https://www.instagram.com/himanshu..singh_?igsh=djNyc2k1aGpuOXBo";
};

document.getElementById('cssbuttons-io-button').onclick= function() {
    window.location.href ='about.html'
};