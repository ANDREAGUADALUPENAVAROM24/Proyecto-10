var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b664404d-6067-4a47-862d-b82bd6259a0f","c63d87a9-5f6d-4c9d-b2e9-04d483fb43ce","8712a901-fe4f-483f-8e33-e102f70fe7f0"],"propsByKey":{"b664404d-6067-4a47-862d-b82bd6259a0f":{"name":"car_yellow_1","sourceUrl":null,"frameSize":{"x":14,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"rz2OKyczjeoCsWpqYniIJLNLpaQ6n7lS","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":25},"rootRelativePath":"assets/b664404d-6067-4a47-862d-b82bd6259a0f.png"},"c63d87a9-5f6d-4c9d-b2e9-04d483fb43ce":{"name":"car_purpule_1","sourceUrl":null,"frameSize":{"x":14,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"lI6isl6dEaf8xe.3db2BgDtpC8OYN0g_","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":25},"rootRelativePath":"assets/c63d87a9-5f6d-4c9d-b2e9-04d483fb43ce.png"},"8712a901-fe4f-483f-8e33-e102f70fe7f0":{"name":"SAM","sourceUrl":null,"frameSize":{"x":25,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"H8HFrXY3Gar.OD6Buz6FBD1TD35fmdhL","categories":["emoji"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":25},"rootRelativePath":"assets/8712a901-fe4f-483f-8e33-e102f70fe7f0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var limite1 = createSprite(200, 110,400,3);
limite1.shapeColor="rgb(199,47,231)";
var limite2 = createSprite(200, 260,400,3);
limite2.shapeColor="rgb(199,47,231)";
var sam = createSprite(30, 180,17,17);
sam.shapeColor="pink";
var car1 =createSprite(100, 120,15,15);
car1.shapeColor ="purple";
var car2= createSprite(160, 250,15,15);
car2.shapeColor ="purple";
var car3 = createSprite(230, 120,15,15);
car3.shapeColor ="purple";
var car4 = createSprite(290, 250,15,15);
car4.shapeColor ="purple";



car1.velocityY=7.5;
car2.velocityY=-7.5;
car3.velocityY=7.5;
car4.velocityY=-7.5;

var live=0;

function draw() {
background("rgb(239,224,240)");

fill("rgb(252,90,220)");
rect(0, 110, 52, 150);

fill("rgb(252,90,220)");
rect(345, 110, 52,150);

textSize(25);
textFont("Franklin Gothic Heavy");
fill("rgb(130,2,141)");
text("Vidas= " +live,160, 80);

createEdgeSprites();
car1.bounceOff(limite1);
car2.bounceOff(limite1);
car3.bounceOff(limite1);
car4.bounceOff(limite1);
car1.bounceOff(limite2);
car2.bounceOff(limite2);
car3.bounceOff(limite2);
car4.bounceOff(limite2);

if (keyDown("left")) {
  sam.x=sam.x-4;
}

if (keyDown("right")) {
  sam.x=sam.x+4;
}

if (sam.isTouching(car1)||sam.isTouching(car2)||
    sam.isTouching(car3)||sam.isTouching(car4)) {
  sam.y=180;
  sam.x=30;
  live=live+1;
}


drawSprites();
    
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
