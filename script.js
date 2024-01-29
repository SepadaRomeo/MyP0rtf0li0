document.addEventListener("DOMContentLoaded", function() {
  // Set "HOME" as the default section on page load
  showSection('home'); // Change 'contacts' to 'home'

  // Function to show a section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }

  // Event listeners for each button
  const buttons = document.querySelectorAll('.sidebar button');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const sectionId = this.textContent.toLowerCase();
      showSection(sectionId);
    });
  });
});

// Function to highlight the name on hover
function highlightName() {
  document.querySelector('.exclude-text').style.color = '#FF8C00';
}

// Function to reset the name color on mouseout
function resetName() {
  document.querySelector('.exclude-text').style.color = ''; // Reset to the default color
}

 // JavaScript functions to highlight and reset the name
    function highlightName() {
      document.querySelector('.home-text').style.color = '#331a00';
    }

    function resetName() {
      document.querySelector('.home-text').style.color = ''; // Reset to default color
    }

