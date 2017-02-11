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
