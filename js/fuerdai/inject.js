if (Math.random() < 0.5) {
var ad_idzone = "3148446",
      ad_popup_fallback = false,
      ad_frequency_period = 180,
      ad_frequency_count = 1,
      ad_trigger_method = 3;
(function () {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://ads.exosrv.com/popunder1000.js';
  document.body.appendChild(script);
})();
} else {
var ad_idzone = "3148672",
        ad_frequency_period = 180,
        ad_frequency_count = 1,
        ad_trigger_type = 2,
	ad_trigger_method = 3,
        ad_width = "300",
        ad_height = "250";
(function () {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://ads.exosrv.com/mobile-interstitial.js';
  document.body.appendChild(script);
})();
}
