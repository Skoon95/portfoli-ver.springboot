window.addEventListener("load", function() {
    document.querySelector(".toggle").addEventListener("click", function() {
        document.querySelector(".container").classList.toggle("collapse");
    });
});

// window.addEventListener('scroll', function() {
//     var sections = document.querySelectorAll('.contents > section');
//     var projectSection = document.getElementById('project');
//
//     sections.forEach(function(section) {
//         if (isElementInViewport(section)) {
//             section.classList.add('show');
//         }
//     });
//
//     if (isElementInViewport(projectSection)) {
//         projectSection.classList.add('show');
//     }
// });
//
// function isElementInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }