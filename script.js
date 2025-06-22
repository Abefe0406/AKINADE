      // Function to toggle the mobile menu
      function toggleMenu() {
            const navItems = document.querySelector('.nav-items');
            navItems.classList.toggle('active');
      }

            // Event listener for window resize to handle mobile view
      window.addEventListener('resize', () => {
            const navItems = document.querySelector('.nav-items');
            if (window.innerWidth > 768) {
                  navItems.classList.remove('active'); // Remove active class on larger screens
            }
      });

            // Event listener for the logo click to toggle menu
      // document.querySelector('.logo-image').addEventListener('click', toggleMenu);

      var tablinks = document.getElementsByClassName("tab-links")

      var tabcontent = document.getElementsByClassName("tab-contents")

      function openTab(tabName) {
            // Hide all tab contents
            const tabContents = document.querySelectorAll('.tab-contents');
            tabContents.forEach(content => {
                  content.classList.remove('active-tab');
            });

            // Show the selected tab content
            const activeTab = document.getElementById(tabName);
            activeTab.classList.add('active-tab');

            // Remove active-link from all tab links
            const tabLinks = document.querySelectorAll('.tab-links');
            tabLinks.forEach(link => {
                  link.classList.remove('active-link');
            });

            // Add active-link to the clicked tab
            const clickedTab = document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`);
            if (clickedTab) {
                  clickedTab.classList.add('active-link');
            }
      }
      function showAlert(service) {
            alert('You clicked on ' + service + ' Service!');
      }function toggleMenu() {
      const navItems = document.querySelector('.nav-items');
      navItems.classList.toggle('active');
      }

      window.addEventListener('resize', () => {
      const navItems = document.querySelector('.nav-items');
      if (window.innerWidth > 768) {
            navItems.classList.remove('active'); // Remove active class on larger screens
      }
      });

      // Ensure the element with class 'logo-image' exists before adding the event listener
      const logoImage = document.querySelector('.logo-image');
      if (logoImage) {
      logoImage.addEventListener('click', toggleMenu);
      }

      const tablink = document.getElementsByClassName("tab-links");
      const tabcontent = document.getElementsByClassName("tab-contents");

      function openTab(tabName) {
      const tabContents = document.querySelectorAll('.tab-contents');
      tabContents.forEach(content => {
            content.classList.remove('active-tab');
      });

      const activeTab = document.getElementById(tabName);
      if (activeTab) {
            activeTab.classList.add('active-tab');
      }

      const tabLinks = document.querySelectorAll('.tab-links');
      tabLinks.forEach(link => {
            link.classList.remove('active-link');
      });

      const clickedTab = document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`);
      if (clickedTab) {
            clickedTab.classList.add('active-link');
      }
      }

      function showAlert(service) {
      alert('You clicked on ' + service + ' Service!');
      }

      const scriptURL = 'https://script.google.com/macros/s/AKfycbxX8umZTx_cKmvdR0C-Pq912Qo8huFJFtPq4RIeUny2jZAZXwYcyZ1RYunC_2rPsx9E/exec';
      const form = document.forms['submit-to-google-sheet'];
      const msg = document.getElementById('msg');
      const submitButton = form.querySelector('button[type="submit"]');

      form.addEventListener('submit', e => {
      e.preventDefault();
      submitButton.disabled = true;
      msg.innerHTML = "Sending...";

      fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
      })
      .then(response => {
            console.log('Response:', response);
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
      })
      .then(data => {
            console.log('Data:', data);
            msg.innerHTML = "Message sent successfully!";
            setTimeout(function() {
            msg.innerHTML = "";
            }, 5000);
            form.reset();
      })
      .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error sending message. Please try again.";
      })
      .finally(() => {
            submitButton.disabled = false;
      });
      });


            function openmenu() {
                  const navItems = document.getElementById('sidemenu');
                  navItems.classList.add('active'); // Add the 'active' class to show the menu
            }

            function closemenu() {
                  const navItems = document.getElementById('sidemenu');
                  navItems.classList.remove('active'); // Remove the 'active' class to hide the menu
            }

            function navigate(event, section) {
                  event.preventDefault(); // Prevent default anchor behavior
                  closemenu(); // Close the menu
                  document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
            }

            function checkConnection() {
                  if (navigator.onLine) {
                  document.getElementById('offline-message').style.display = 'none';
                  document.getElementById('portfolio-container').style.display = 'block';
                  } else {
                  document.getElementById('offline-message').style.display = 'block';
                  document.getElementById('portfolio-container').style.display = 'none';
                  }
            }

            // Check connection on page load
            window.onload = checkConnection;

            // Listen for online and offline events
            window.addEventListener('online', () => {
                  location.reload(); // Refresh the page when back online
            });

            window.addEventListener('offline', checkConnection);