/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   JS code for the button design pattern
 */

/* 原本寫法 */
// var ICON_MUTE_URL = 'images/mute.svg#icon-mute';
// var ICON_SOUND_URL = 'images/mute.svg#icon-sound';

/* svg 改成 fontawesome 寫法來引用 */
var ICON_MUTE_CLASS = 'fa-volume-mute';
var ICON_SOUND_CLASS = 'fa-volume-up';

function init() {
  var actionButton = document.getElementById('print');
  actionButton.addEventListener('click', activateActionButton);
  actionButton.addEventListener('keydown', actionButtonKeydownHandler);
  actionButton.addEventListener('keyup', actionButtonKeyupHandler);

  var toggleButton = document.getElementById('toggle-mute');
  toggleButton.addEventListener('click', toggleButtonClickHandler);
  toggleButton.addEventListener('keydown', toggleButtonKeydownHandler);
  toggleButton.addEventListener('keyup', toggleButtonKeyupHandler);
}

/**
 * Activates the action button with the enter key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeydownHandler(event) {
  // The action button is activated by space on the keyup event, but the
  // default action for space is already triggered on keydown. It needs to be
  // prevented to stop scrolling the page before activating the button.
  if (event.keyCode === 32) {
    event.preventDefault();
  }
  // If enter is pressed, activate the button
  else if (event.keyCode === 13) {
    event.preventDefault();
    activateActionButton();
  }
}

/**
 * Activates the action button with the space key.
 *
 * @param {KeyboardEvent} event
 */
function actionButtonKeyupHandler(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    activateActionButton();
  }
}

function activateActionButton() {
  window.print();
}

/**
 * Toggles the toggle button state if it actually a button element or has
 * the `role` attribute set to `button`.
 *
 * @param {MouseEvent} event
 */
function toggleButtonClickHandler(event) {
  if (
    event.currentTarget.tagName === 'button' ||
    event.currentTarget.getAttribute('role') === 'button'
  ) {
    toggleButtonState(event.currentTarget);
  }
}

/**
 * Toggles the toggle button state with the enter key.
 *
 * @param {KeyboardEvent} event
 */
function toggleButtonKeydownHandler(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
  } else if (event.keyCode === 13) {
    event.preventDefault();
    toggleButtonState(event.currentTarget);
  }
}

/**
 * Toggles the toggle button state with space key.
 *
 * @param {KeyboardEvent} event
 */
function toggleButtonKeyupHandler(event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    toggleButtonState(event.currentTarget);
  }
}

/**
 * Toggles the toggle button state between *pressed* and *not pressed*.
 *
 * @param {HTMLElement} button
 */
function toggleButtonState(button) {
  var isAriaPressed = button.getAttribute('aria-pressed') === 'true';

  button.setAttribute('aria-pressed', isAriaPressed ? 'false' : 'true');

  /* 改寫成 toggle classList 的方式*/
  var icon = button.querySelector('.fas');

  if (isAriaPressed) {
    icon.classList.add(ICON_SOUND_CLASS);
    icon.classList.remove(ICON_MUTE_CLASS);
  } else {
    icon.classList.add(ICON_MUTE_CLASS);
    icon.classList.remove(ICON_SOUND_CLASS);
  }
  // icon.setAttribute('xlink:href', isAriaPressed ? ICON_SOUND_URL : ICON_MUTE_URL);
}

window.onload = init;
