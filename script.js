document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hamburger Menu Toggle
  const menuCheckbox = document.querySelector('.navbar input[type="checkbox"]');
  const menuItems = document.querySelector('.menu-items');

  menuCheckbox.addEventListener('change', () => {
    if (menuCheckbox.checked) {
      menuItems.style.transform = 'translateX(0)';
    } else {
      menuItems.style.transform = 'translateX(-150%)';
    }
  });

  // Dynamic Course Addition
  const coursesWrapper = document.querySelector('.courses-wrapper');
  const newCourseButton = document.createElement('button');
  newCourseButton.textContent = 'Add New Course';
  newCourseButton.classList.add('btn', 'btn-primary');
  coursesWrapper.parentElement.appendChild(newCourseButton);

  newCourseButton.addEventListener('click', () => {
    const newCourse = document.createElement('a');
    newCourse.href = '#';
    newCourse.target = '_blank';
    newCourse.classList.add('course-link');
    newCourse.innerHTML = `
      <div class="course-item">
        <div class="img-wrapper">
          <img src="./img/default-course.jpg" alt="New Course">
        </div>
        <h1 class="text-blue">New Course Title</h1>
        <p class="desc text-grey">Description of the new course goes here.</p>
        <i class="fas fa-chalkboard-teacher fa-3x text-darkblue"></i>
        <p class="author text-darkblue">Instructor: Your Name</p>
      </div>
    `;
    coursesWrapper.appendChild(newCourse);
  });

  // Contact Form Validation
  const contactForm = document.querySelector('.form-container');
  if (contactForm) {
    const submitButton = contactForm.querySelector('.btn');
    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('input[type="text"]').value.trim();
      const email = contactForm.querySelector('input[type="email"]').value.trim();
      const message = contactForm.querySelector('textarea').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
});
