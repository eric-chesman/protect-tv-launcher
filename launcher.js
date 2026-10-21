(function () {
  'use strict';
  // The viewer already owns arrow/OK/Back navigation. No extra scripts or services.
  // Keep this module scoped to the configured local viewer origin.
  if (window.location.origin !== 'http://10.10.10.61:8097') return;
  document.documentElement.setAttribute('data-protect-tv-launcher', 'tizenbrew');
}());
