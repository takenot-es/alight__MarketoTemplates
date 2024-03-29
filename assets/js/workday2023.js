fetch('https://go.alight.com/rs/777-ERD-451/images/workdayrising_2023.json')
.then(response => response.json())
.then(data => {

  //For Block #event-jumbotron-one
//This loops in content and featured image from 'pageHeader'
const pageHeader = data.pageHeader;
const pageTitleContainer = document.getElementById('event-jumbotron-page-title');
const pageTitleJumbotron = document.createElement('h2');
pageTitleJumbotron.className = 'display-1 em container';
pageTitleJumbotron.textContent = pageHeader.title;

const pageFeaturedImageContainer = document.getElementById('event-jumbotron-featured-image');
const pageFeaturedImage = document.createElement('img');
pageFeaturedImage.className = 'featured-image';
pageFeaturedImage.height = 540;
pageFeaturedImage.width = 960;
pageFeaturedImage.src = pageHeader.featuredImage;

pageTitleContainer.appendChild(pageTitleJumbotron);
pageFeaturedImageContainer.appendChild(pageFeaturedImage);

//For Block #event-jumbotron-two
//This pulls in content for the location, dates, and boothID
const pageHeaderDetails = data.pageHeaderDetails.details;
const pageHeaderDetailsContainer = document.getElementById('event-page-header-details');

pageHeaderDetails.forEach(detail => {

  const pageHeaderDetailsColumn = document.createElement('div');
  pageHeaderDetailsColumn.className = 'col-lg mx-auto my-1';

  const phDetailLabel = document.createElement('p');
  phDetailLabel.className = 'h6 text-uppercase mb-0';
  phDetailLabel.textContent = detail.label;

  const phDetailData = document.createElement('p');
  phDetailData.className = 'h4 strong';
  phDetailData.textContent = detail.data;

  pageHeaderDetailsContainer.appendChild(pageHeaderDetailsColumn);
  pageHeaderDetailsColumn.appendChild(phDetailLabel);
  pageHeaderDetailsColumn.appendChild(phDetailData);

})

//Intro Section
const introSectionData = data.introSection;
const introSectionTitleContainer = document.getElementById('intro-section-toc-content');
const introSectionTitle = document.createElement('h3');
introSectionTitle.className = 'strong';
introSectionTitle.textContent = introSectionData.headline;

const introSectionContent = document.createElement('p');
introSectionContent.className = 'lead';
introSectionContent.textContent = introSectionData.content;

const introSectionCtaContainer = document.getElementById('intro-section-toc-cta');

const introSectionCta = document.createElement('a');
introSectionCta.className = 'btn btn-primary';
introSectionCta.textContent = introSectionData.ctaText;
introSectionCta.href = introSectionData.ctaLink;
introSectionCta.target = '_blank';


introSectionTitleContainer.appendChild(introSectionTitle);
introSectionTitleContainer.appendChild(introSectionContent);
introSectionCtaContainer.appendChild(introSectionCta);

const introSectionCalloutHeadlineContainer = document.getElementById('intro-section-toc-headline');
const introSectionCalloutHeadline = document.createElement('h4');
introSectionCalloutHeadline.className = 'strong';
introSectionCalloutHeadline.textContent = introSectionData.calloutHeadline;

introSectionCalloutHeadlineContainer.appendChild(introSectionCalloutHeadline);

const introSectionCalloutLinksContainer = document.getElementById('intro-section-toc-links');
const introSectionToc = data.introSection.calloutLinks;

introSectionToc.forEach(toc => { 
const introSectionTocLineItem = document.createElement('li');
introSectionTocLineItem.className = 'col-lg-6 pb-1 no-icon';

const introSectionTocLink = document.createElement('a');
introSectionTocLink.href = toc.link;
introSectionTocLink.textContent = toc.linkText;
introSectionTocLink.className = 'strong';

introSectionCalloutLinksContainer.appendChild(introSectionTocLineItem);
introSectionTocLineItem.appendChild(introSectionTocLink);

});


//Voting Section
const votingData = data.votingSection;

const votingImageContainer = document.getElementById('voting-section-image-container');

const votingImage = document.createElement('img');
votingImage.height = 1080;
votingImage.width = 1080;
votingImage.src = votingData.image;
votingImage.alt = votingData.content;

votingImageContainer.appendChild(votingImage);

const votingContentContainer = document.getElementById('voting-section-content-container');


const votingContentHeadline = document.createElement('h4');
votingContentHeadline.className = 'strong';
votingContentHeadline.textContent = votingData.content;

const votingContentCta = document.createElement('a');
votingContentCta.className = 'btn btn-black mt-2';
votingContentCta.textContent = votingData.ctaText;
votingContentCta.href = votingData.ctaLink;
votingContentCta.target = '_blank';

votingContentContainer.appendChild(votingContentHeadline);
votingContentContainer.appendChild(votingContentCta);

//Speaker Sessions Block One
const speakerSessionData = data.speakerSessions;
const speakerSessionsTitleContainer = document.getElementById('speaker-sessions-title')
const speakerSessionsTitle = document.createElement('h2')
speakerSessionsTitle.className = 'display-3 em has-gradient-bar gradient-bar-teal';
speakerSessionsTitle.textContent = speakerSessionData.title;
speakerSessionsTitleContainer.appendChild(speakerSessionsTitle);

//Loading in sessions by day
const sessionsData = data.speakerSessions.sessions;



//Gathering row to load all speakers
const sessionsContainer = document.getElementById('speaker-sessions-row');



//I hope this works
sessionsData.forEach(sessions => {

  //Builds the column to add the sessions and speakers into
  const sessionsColumn = document.createElement('div');
  sessionsColumn.className = 'col-lg-6 mb-2 mb-lg-0';

  //Builds the card
  const sessionsInnerContainer = document.createElement('div');
  sessionsInnerContainer.className = 'bg-white py-4 px-4 rounded h-100';

  const sessionCardHeadline = document.createElement('h4');
  sessionCardHeadline.className = 'strong';
  sessionCardHeadline.textContent = sessions.headline;

  const sessionCardSubheadline = document.createElement('p');
  sessionCardSubheadline.textContent = sessions.subheadline;

  const sessionCta = document.createElement('a');
  sessionCta.className = 'btn btn-primary mt-3';
  sessionCta.href = sessions.ctaLink;
  sessionCta.textContent = sessions.ctaText;
  sessionCta.target = '_blank';

  const sessionRule = document.createElement('hr');
  sessionRule.className = 'my-5 opacity-05';

  const sessionList = document.createElement('ul');
  sessionList.className = 'p-0 list-unstyled';
  
  sessionsContainer.appendChild(sessionsColumn);
  sessionsColumn.appendChild(sessionsInnerContainer);
  sessionsInnerContainer.appendChild(sessionCardHeadline);
  sessionsInnerContainer.appendChild(sessionCardSubheadline);
  sessionsInnerContainer.appendChild(sessionCta);
  sessionsInnerContainer.appendChild(sessionRule);
  sessionsInnerContainer.appendChild(sessionList);

  //Loading speaker lists
  const sessionsDataSpeakers = sessions.speakers;

  sessionsDataSpeakers.forEach(speaker => {
    const speakerContainer = document.createElement('li');
    speakerContainer.className = 'row mb-1 no-icon';

    const speakerHeadshotContainer = document.createElement('figure');
    speakerHeadshotContainer.className = 'bg-slate-05 speaker-headshot';

    const speakerHeadshot = document.createElement('img');
    speakerHeadshot.src = speaker.headshot;
    speakerHeadshot.alt = speaker.name;
    speakerHeadshot.height = 1080;
    speakerHeadshot.width = 1080;

    const speakerInformation = document.createElement('div');
    speakerInformation.className = 'speaker-info col d-flex flex-column justify-content-center';

    const speakerName = document.createElement('p');
    speakerName.className = 'strong mb-0';
    speakerName.textContent = speaker.name;

    const speakerTitle = document.createElement('p');
    speakerTitle.textContent = speaker.jobTitle;

    sessionList.appendChild(speakerContainer);
    speakerContainer.appendChild(speakerHeadshotContainer);
    speakerHeadshotContainer.appendChild(speakerHeadshot);
    speakerContainer.appendChild(speakerInformation);
    speakerInformation.appendChild(speakerName);
    speakerInformation.appendChild(speakerTitle);

  })


});

//Three Column Link Section
const threeColLinkSectionData = data.threeColLinkSection;
const threeColLinkSectionTitleContainer = document.getElementById('three-col-link-title-container');

const threeColLinkSectionTitle = document.createElement('h2')
threeColLinkSectionTitle.className = 'display-3 em has-gradient-bar gradient-bar-teal';
threeColLinkSectionTitle.textContent = threeColLinkSectionData.title;

threeColLinkSectionTitleContainer.appendChild(threeColLinkSectionTitle);

const threeColLinks = data.threeColLinkSection.links;
const threeColLinksContainer = document.getElementById('three-col-links-row');

threeColLinks.forEach(link => {

  const threeColLinksColumn = document.createElement('div');
  threeColLinksColumn.className = 'col-lg-4 mb-2';

  const threeColLinksButton = document.createElement('a');
  threeColLinksButton.className = 'box-icon-link';
  threeColLinksButton.textContent = link.title;
  threeColLinksButton.href = link.url;
  threeColLinksButton.target = '_blank'

  threeColLinksContainer.appendChild(threeColLinksColumn);
  threeColLinksColumn.appendChild(threeColLinksButton);

})

//Request a meeting Section
const meetingRequestData = data.requestAMeeting;
const meetingRequestContainer = document.getElementById('request-a-meeting-content');
const meetingRequestHeadline = document.createElement('h2');
meetingRequestHeadline.className = 'display-2 em';
meetingRequestHeadline.textContent = meetingRequestData.title;
const meetingRequestContent = document.createElement('p');
meetingRequestContent.className = 'lead';
meetingRequestContent.textContent = meetingRequestData.content;
const meetingRequestCta = document.createElement('a');
meetingRequestCta.className = 'btn btn-black';
meetingRequestCta.textContent = meetingRequestData.ctaText;
meetingRequestCta.href = meetingRequestData.ctaLink;
meetingRequestCta.target = '_blank'

meetingRequestContainer.appendChild(meetingRequestHeadline);
meetingRequestContainer.appendChild(meetingRequestContent);
meetingRequestContainer.appendChild(meetingRequestCta);

//Top Ten Activities
const topTenData = data.topTenSection;
const topTenHeadlineContainer = document.getElementById('top-ten-headline-container');
const topTenHeadline = document.createElement('h2');
topTenHeadline.className = 'display-3 em text-white has-gradient-bar gradient-bar-yellow';
topTenHeadline.textContent = topTenData.title;

topTenHeadlineContainer.appendChild(topTenHeadline);

const topTenDataList = data.topTenSection.listItems;
const topTenListContainer = document.getElementById('top-ten-list-container');

topTenDataList.forEach(listItem => {
  const topTenListItem = document.createElement('li');
  topTenListItem.innerHTML = listItem.content;
  topTenListItem.className = 'col-lg-6 d-flex';

  topTenListContainer.appendChild(topTenListItem);

})


//Illuminate Lounge
const illuminateLoungeData = data.illuminateLounge;

const illuminateTitleContainer = document.getElementById('illuminate-lounge-title-container');
illuminateTitleContainer.innerHTML = illuminateLoungeData.title;

const illuminateLoungeContent = document.getElementById('illuminate-lounge-content-container');
illuminateLoungeContent.innerHTML = illuminateLoungeData.content;

const illuminateLoungeAddress = document.getElementById('illuminate-lounge-address-container');
illuminateLoungeAddress.innerHTML = illuminateLoungeData.address;

const illuminateLoungeEventsData = data.illuminateLounge.events;

const illuminateLoungeEventsContainer = document.getElementById('illuminate-lounge-events-container')

illuminateLoungeEventsData.forEach(event => {
  const illuminateEventDateRow = document.createElement('div');
  illuminateEventDateRow.className = 'row';

  const illuminateEventTileRow = document.createElement('div');
  illuminateEventTileRow.className = 'row mb-2';

  const illuminateEventDateCol = document.createElement('div');
  illuminateEventDateCol.className = 'col-12';
  illuminateEventDateCol.innerHTML = event.date;

  illuminateLoungeEventsContainer.appendChild(illuminateEventDateRow);
  illuminateEventDateRow.appendChild(illuminateEventDateCol);
  illuminateLoungeEventsContainer.appendChild(illuminateEventTileRow);

  const illuminateTileData = event.eventsTiles;

  illuminateTileData.forEach(tile => {
    const illuminateTileCol = document.createElement('div');
    illuminateTileCol.className = 'col-lg-4 mb-2 mb-lg-0';

    illuminateEventTileRow.appendChild(illuminateTileCol);

    const illuminateTile = document.createElement('div');
    illuminateTile.className = tile.classes;


    illuminateTileCol.appendChild(illuminateTile);

    const illuminateTileTime = document.createElement('p');
    illuminateTileTime.className = 'text-uppercase small strong';
    illuminateTileTime.textContent = tile.time;

    const illuminateTileTitle = document.createElement('h4');
    illuminateTileTitle.className = 'strong';
    illuminateTileTitle.textContent = tile.title;

    const illuminateTileByline = document.createElement('p');
    illuminateTileByline.className = 'text-uppercase small strong';
    illuminateTileByline.innerHTML = tile.byline;

    const illuminateTileContent = document.createElement('p');
    illuminateTileContent.textContent = tile.content;

    illuminateTile.appendChild(illuminateTileTime);
    illuminateTile.appendChild(illuminateTileTitle);
    illuminateTile.appendChild(illuminateTileByline);
    illuminateTile.appendChild(illuminateTileContent);

  })


})


//Sponsors Section
const sponsorData = data.sponsorSection;

const sponsorSectionTitle = document.getElementById('sponsors-title');
sponsorSectionTitle.textContent = sponsorData.title;

const sponsorsSectionLogos = data.sponsorSection.logos;
const sponsorsLogosContainer = document.getElementById('sponsors-logo-container');

sponsorsSectionLogos.forEach(logo => {
  const sponsorLogosCol = document.createElement('div');
  sponsorLogosCol.className = 'col-lg-3 mx-auto sponsor-logo-column';

  const sponsorLogoImage = document.createElement('img');
  sponsorLogoImage.src = logo.companyLogo;
  sponsorLogoImage.alt = logo.companyName;
  sponsorLogoImage.className = 'd-block img-fluid';

  sponsorsLogosContainer.appendChild(sponsorLogosCol);
  sponsorLogosCol.appendChild(sponsorLogoImage);

})

const preFooterImageData = data.preFooterImage;
const preFooterImageContainer = document.getElementById('pre-footer-image-container');
const preFooterImage = document.createElement('img');
preFooterImage.className = 'object-fit-cover object-position-center';
preFooterImage.height = 1080;
preFooterImage.width = 1920;
preFooterImage.src = preFooterImageData.image;
preFooterImage.alt = 'Alight Solutions, Inc. Workday Rising';

preFooterImageContainer.appendChild(preFooterImage);


})
.catch(error => {
  console.error('Error fetching JSON:', error);
});





  $(".form-modal-toggle").click(function(){
  $(".modal-overlay").toggleClass("show");
  });

  
  MktoForms2.whenRendered(function(form) {
var formEl = form.getFormElem()[0];
destyleMktoForm(form);
formEl.setAttribute("data-styles-ready", "true");
});

/*
* @author Sanford Whiteman
* @version v1.103
* @license MIT License: This license must appear with all reproductions of this software.
*
* Create a completely barebones, user-styles-only Marketo form
* by removing inline STYLE attributes and disabling STYLE and LINK elements
*/
function destyleMktoForm(form){
var formEl = form.getFormElem()[0],
  arrayFrom = Function.prototype.call.bind(Array.prototype.slice);

// remove element styles from <form> and children
var styledEls = arrayFrom(formEl.querySelectorAll("[style]")).concat(formEl);	
styledEls.forEach(function(el) {
  el.removeAttribute("style");
});

// disable remote stylesheets and local <style>s
var styleSheets = arrayFrom(document.styleSheets);	
styleSheets.forEach(function(ss) {
  if ( [mktoForms2BaseStyle,mktoForms2ThemeStyle].indexOf(ss.ownerNode) != -1 || formEl.contains(ss.ownerNode) ) {
    ss.disabled = true;
  }
});
};
