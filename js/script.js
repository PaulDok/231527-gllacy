'use strict';

var feedbackOverlay = document.querySelector('.feedback-modal');

var feedbackOpenButton = document.querySelector('.feedback-btn');
var feedbackCloseButton = feedbackOverlay.querySelector('.feedback-close');

var showFeedbackOverlay = function (evt) {
  evt.preventDefault();
  feedbackOverlay.style['display'] = 'block';
};

var hideFeedbackOverlay = function (evt) {
  if (evt.target === feedbackOverlay || evt.target === feedbackCloseButton) {
    feedbackOverlay.style['display'] = 'none';
  }
};

feedbackOpenButton.addEventListener('click', showFeedbackOverlay);
feedbackOverlay.addEventListener('click', hideFeedbackOverlay);


// Map
var mapPlaceholder = document.querySelector('#map-img');
var pinPlaceholder = document.querySelector('#map-pin');

ymaps.ready(init);
var myMap;
var myPlacemark;

function init () {
  myMap = new ymaps.Map("map", {
    center: [59.93933268, 30.32872051],
    zoom: 16,
    controls: []
  }, {
    searchControlProvider: 'yandex#search'
  }),
  myPlacemark = new ymaps.Placemark([59.93861704, 30.32286398], {
    hintContent: 'Gllacy'
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.png',
    iconImageSize: [218, 142],
    iconImageOffset: [-40, -135]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable('scrollZoom');

  mapPlaceholder.hidden = true;
  pinPlaceholder.hidden = true;
};
