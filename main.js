
// document.querySelectorAll('.c_taiko3-instance',).forEach(image => {
//     image.addEventListener('mouseover', () => {
//       document.getElementById('exclude').classList.add('.rotate');
//     });
  
//     image.addEventListener('mouseout', () => {
//       document.getElementById('exclude').classList.remove('.rotate');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const hoverImage = document.querySelector('.c_taiko3-instance');
    const hoverImage2 = document.querySelector('.c_photo2-instance');
    const hoverImage3 = document.querySelector('.c_text-instance');
    const hoverImage4 = document.querySelector('.c_music3-instance');
    const rotatingExclude = document.querySelector('.c_exclude-booleanope');
    const rotatingDashes = document.querySelector('.c_polygon1-vector');
    const rotatingMinute = document.querySelector('.c_rectangle23-rectangle');
    const rotatingHour = document.querySelector('.c_rectangle22-rectangle');
    const rotatingArrow = document.querySelector('.c_arrow-vector');
    const rotatingMarkings = document.querySelector('.c_markings-vector');


    hoverImage.addEventListener('mouseover', function() {
        rotatingExclude.classList.add('rotate-medium');
        rotatingDashes.classList.add('rotate-dashes');
        rotatingHour.classList.add('rotate-fast');
        rotatingMinute.classList.add('rotate-slow');
        rotatingArrow.classList.add('rotate-dashes');
        rotatingMarkings.classList.add('rotate-dashes-reverse');
    });

    hoverImage.addEventListener('mouseout', function() {
        rotatingExclude.classList.remove('rotate-medium');
        rotatingDashes.classList.remove('rotate-dashes');
        rotatingHour.classList.remove('rotate-fast');
        rotatingMinute.classList.remove('rotate-slow');
        rotatingArrow.classList.remove('rotate-dashes');
        rotatingMarkings.classList.remove('rotate-dashes-reverse');

    
    });

    hoverImage2.addEventListener('mouseover', function() {
        rotatingExclude.classList.add('rotate-medium-reverse');
        rotatingDashes.classList.add('rotate-dashes-reverse');
        rotatingHour.classList.add('rotate-fast-reverse');
        rotatingMinute.classList.add('rotate-slow-reverse');
        rotatingArrow.classList.add('rotate-dashes-photo');
        rotatingMarkings.classList.add('rotate-dashes-reverse-photo');
    });

    hoverImage2.addEventListener('mouseout', function() {
        rotatingExclude.classList.remove('rotate-medium-reverse');
        rotatingDashes.classList.remove('rotate-dashes-reverse');
        rotatingHour.classList.remove('rotate-fast-reverse');
        rotatingMinute.classList.remove('rotate-slow-reverse');
        rotatingArrow.classList.remove('rotate-dashes-photo');
        rotatingMarkings.classList.remove('rotate-dashes-photo-reverse');
    });

    hoverImage3.addEventListener('mouseover', function() {
        rotatingExclude.classList.add('rotate-medium');
        rotatingDashes.classList.add('rotate-dashes');
        rotatingHour.classList.add('rotate-fast');
        rotatingMinute.classList.add('rotate-slow');
        rotatingArrow.classList.add('rotate-dashes-text');
        rotatingMarkings.classList.add('rotate-dashes-reverse-text');
    });

    hoverImage3.addEventListener('mouseout', function() {
        rotatingExclude.classList.remove('rotate-medium');
        rotatingDashes.classList.remove('rotate-dashes');
        rotatingHour.classList.remove('rotate-fast');
        rotatingMinute.classList.remove('rotate-slow');
        rotatingArrow.classList.remove('rotate-dashes-text');
        rotatingMarkings.classList.remove('rotate-dashes-reverse-text');

    
    });

    hoverImage4.addEventListener('mouseover', function() {
        rotatingExclude.classList.add('rotate-medium');
        rotatingDashes.classList.add('rotate-dashes');
        rotatingHour.classList.add('rotate-fast');
        rotatingMinute.classList.add('rotate-slow');
        rotatingArrow.classList.add('rotate-dashes-music');
        rotatingMarkings.classList.add('rotate-dashes-reverse-music');
    });

    hoverImage4.addEventListener('mouseout', function() {
        rotatingExclude.classList.remove('rotate-medium');
        rotatingDashes.classList.remove('rotate-dashes');
        rotatingHour.classList.remove('rotate-fast');
        rotatingMinute.classList.remove('rotate-slow');
        rotatingArrow.classList.remove('rotate-dashes-music');
        rotatingMarkings.classList.remove('rotate-dashes-reverse-music');

    
    });


});




   
