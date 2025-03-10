document.getElementById('recommendation-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const genre = document.getElementById('genre').value;
    try {
      const response = await fetch(`http://localhost:3000/api/recommendations?genre=${encodeURIComponent(genre)}`);
      const data = await response.json();
      displayRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  });
  
  function displayRecommendations(data) {
    const recommendationList = document.getElementById('recommendation-list');
    recommendationList.innerHTML = '';
    data.artists.forEach(artist => {
      const listItem = document.createElement('li');
      listItem.textContent = artist.name;
      recommendationList.appendChild(listItem);
    });
  }
  