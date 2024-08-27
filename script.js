const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");
  burger.addEventListener("click", () => {
    navList.classList.toggle("aktif");
    burger.classList.toggle("toggle-burger");
  })
  window.onscroll = function() {
    scrollFunction();
    closeMenuOnScroll(); 
  };
  function scrollFunction() {
    const mybutton = document.getElementById("tombolTop");
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function closeMenuOnScroll() {
    if (navList.classList.contains('aktif')) {
      navList.classList.remove('aktif');
      burger.classList.remove("toggle-burger");
    }
  }
  const elementsToObserve = document.querySelectorAll('.hidden');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show')
          } 
      });
  }, {
      threshold: 0.2 
  });
  elementsToObserve.forEach(element => {
      observer.observe(element);
  });