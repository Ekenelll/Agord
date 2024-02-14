// Sample array of photocards
const photocards = [
    'media/me/1.jpg',
    'media/me/2.jpg',
    'media/me/3.jpg',
    // Add more photocards as needed
  ];
  
  // Function to display photocards in the gallery section
  function displayPhotocards() {
    const gallerySection = document.querySelector('.gallery');
    gallerySection.innerHTML = ''; // Clear existing content
    
    photocards.forEach(card => {
      const cardElement = document.createElement('img');
      cardElement.src = card;
      cardElement.alt = 'Valentine Photocard';
      gallerySection.appendChild(cardElement);
    });
  }
  
  // Call the function to display photocards when the page loads
  window.onload = displayPhotocards;
  