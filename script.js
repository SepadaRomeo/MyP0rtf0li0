document.addEventListener("DOMContentLoaded", function() {
  // Set "HOME" as the default section on page load
  showSection('home');

  // Function to show a section
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }

    // Additional logic to handle the PDF link
    if (sectionId === 'reports') {
      const pdfLink = document.getElementById('pdfLink');
      // Replace the following URL with the actual URL of your PDF
      const pdfUrl = 'DAS-31G6_2023-2024 - 22.pdf';
      pdfLink.setAttribute('href', pdfUrl);
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

  // Function to highlight and reset the name color
  function highlightName(isHighlight) {
    const color = isHighlight ? '#331a00' : '';
    document.querySelector('.home-text').style.color = color;
  }

  // Event listeners for name hover
  const profileName = document.querySelector('.home-text');
  profileName.addEventListener('mouseover', function() {
    highlightName(true);
  });

  profileName.addEventListener('mouseout', function() {
    highlightName(false);
  });

  // Function to download the PDF
  function downloadPDF() {
    const pdfLink = document.getElementById('pdfLink');
    const pdfUrl = pdfLink.getAttribute('href');
    
    // Check if the PDF URL is not empty
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      console.error('PDF file path is empty or invalid.');
    }
  }

  // Event listener for the "Download PDF" button
  const downloadButton = document.querySelector('#reports button');
  downloadButton.addEventListener('click', downloadPDF);
});
