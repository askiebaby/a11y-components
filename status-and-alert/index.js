/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
window.addEventListener('load', function () {
  var alertTriggerButton = document.getElementById('alert-trigger');
  var statusTriggerButton = document.getElementById('status-trigger');

  alertTriggerButton.addEventListener('click', addAlert);
  statusTriggerButton.addEventListener('click', addStatus);
});

/*
 * @function addAlert
 *
 * @desc Adds an alert to the page
 *
 * @param   {Object}  event  -  based on the Standard W3C event object
 *
 */

function addAlert(event) {
  var alertExample = document.getElementById('alert-example');
  var alertTemplate = document.getElementById('alert-template').innerHTML;

  alertExample.innerHTML = alertTemplate;
}

/*
 * @function addStatus
 *
 * @desc Adds a status to the page
 *
 * @param   {Object}  event
 *
 */

function addStatus(event) {
  var statusExample = document.getElementById('status-example');
  var statusTemplate = document.getElementById('status-template').innerHTML;

  statusExample.innerHTML = statusTemplate;
}
