// on scroll add class code
function Scroll() {
  const top = document.getElementById('top-nav');
  const X = document.getElementById('gtt-btn');
  const ypos = window.pageYOffset;
  if (ypos > 350) {
    top.classList.add('navbar-reduce');
    X.classList.add('display');
  } else {
    top.classList.remove('navbar-reduce');
    X.classList.remove('display');
  }
}
window.addEventListener('scroll', Scroll);
// ############

// cool scrolling effect
// $(() => {
//   const topoffset = 0; // variable for menu height

//   // Use smooth scrolling when clicking on navigation
//   $('.gtt-btn').click(function () {
//     if (
//       location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
//       location.hostname === this.hostname
//     ) {
//       let target = $(this.hash);
//       target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
//       if (target.length) {
//         $('html,body').animate(
//           {
//             scrollTop: target.offset().top - topoffset,
//           },
//           500
//         );
//         return false;
//       } // target.length
//     } // click function
//   }); // smooth scrolling
// });

//   ###################

// on scroll add class code end

// search box collapse
// $('.search-icon-btn').click(() => {
//   $('.search-box-wrapper').addClass('search-box');
// });

// $('#btn-close').click(() => {
//   $('.search-box-wrapper').removeClass('search-box');
// });
