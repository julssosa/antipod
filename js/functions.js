$(document).ready(function () {

  // init Scroll Magic controller
  var controller = new ScrollMagic.Controller({
    addIndicators: false
  });


  var tweenAntipod = new TimelineLite();
  tweenAntipod.from(".antipod-logo__letter", 2, { paddingLeft: '100px', paddingRight: '100px', filter: "blur('50px')" });
  var scene = new ScrollMagic.Scene({ triggerElement: ".antipod-logo__container", duration: 2000, offset: -100 })
            .setTween(tweenAntipod)
						
						.addTo(controller);








});

