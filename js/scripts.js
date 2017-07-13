// scripts.js

var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var	dinosaur = "triceratops";
var	dinosaurUpperCased = dinosaur.toUpperCase();
var	textAfterReplace = text.replace("Velociraptor", dinosaurUpperCased);
console.log(text);
console.log(textAfterReplace);
console.log(textAfterReplace.length/2);
