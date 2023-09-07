// Sponsor Logos

fetch('https://go.alight.com/rs/777-ERD-451/images/logos.json')
  .then(response => response.json())
  .then(data => {
    const logos = data.logos;
    const logosContainer = document.getElementById('logos-container');

    // Loop through logos and create HTML elements
    logos.forEach(logo => {
      const logoDiv = document.createElement('div');
      logoDiv.className = 'logo-wrapper col-lg-4 mx-auto my-1';

      const img = document.createElement('img');
      img.className = 'img-fluid';
      img.src = logo.url;
      img.alt = logo.name;

      const logosInnerDiv = document.createElement('div');
      logosInnerDiv.className = 'logo'

      logoDiv.appendChild(logosInnerDiv);
      logosInnerDiv.appendChild(img);
      logosContainer.appendChild(logoDiv);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });



  //Day One
  fetch('/assets/json/illuminateLounge.json')
  .then(response => response.json())
  .then(data => {
    const events = data.eventsDayOne;
    const eventsContainer = document.getElementById('illuminate-lounge-one');

    // Loop through events and create HTML elements
    events.forEach(event => {

      const eventDivContainer = document.createElement('div');
      eventDivContainer.className = 'col-lg-4';

      const eventDiv = document.createElement('div');
      eventDiv.className = event.classes;

      const eventTime = document.createElement('p');
      eventTime.className = 'small strong text-uppercase mb-2 event-time';
      eventTime.textContent = event.time;

      const eventTitle = document.createElement('h4');
      eventTitle.className = 'mb-1 event title strong';
      eventTitle.textContent = event.title;
      
      const eventPartner = document.createElement('p');
      eventPartner.className = 'small strong text-uppercase mb-2 event-time';
      eventPartner.textContent = event.partner;

      const eventCaption = document.createElement('p');
      eventCaption.textContent = event.caption;

      eventsContainer.appendChild(eventDivContainer);
      eventDivContainer.appendChild(eventDiv);
      eventDiv.appendChild(eventTime);
      eventDiv.appendChild(eventTitle);
      eventDiv.appendChild(eventPartner);
      eventDiv.appendChild(eventCaption);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


  // Day Two
  fetch('/assets/json/illuminateLounge.json')
  .then(response => response.json())
  .then(data => {
    const events = data.eventsDayTwo;
    const eventsContainer = document.getElementById('illuminate-lounge-two');

    // Loop through events and create HTML elements
    events.forEach(event => {

      const eventDivContainer = document.createElement('div');
      eventDivContainer.className = 'col-lg-4';

      const eventDiv = document.createElement('div');
      eventDiv.className = event.classes;

      const eventTime = document.createElement('p');
      eventTime.className = 'small strong text-uppercase mb-2 event-time';
      eventTime.textContent = event.time;

      const eventTitle = document.createElement('h4');
      eventTitle.className = 'mb-1 event title strong';
      eventTitle.textContent = event.title;
      
      const eventPartner = document.createElement('p');
      eventPartner.className = 'small strong text-uppercase mb-2 event-time';
      eventPartner.textContent = event.partner;

      const eventCaption = document.createElement('p');
      eventCaption.textContent = event.caption;

      eventsContainer.appendChild(eventDivContainer);
      eventDivContainer.appendChild(eventDiv);
      eventDiv.appendChild(eventTime);
      eventDiv.appendChild(eventTitle);
      eventDiv.appendChild(eventPartner);
      eventDiv.appendChild(eventCaption);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });
