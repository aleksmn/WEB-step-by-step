// Explicit constructor
class SpaceShuttle {
    constructor(targetPlanet) {
      this.targetPlanet = targetPlanet;
    }
    takeOff() {
      console.log("To " + this.targetPlanet + "!");
    }
  }
  
  // Implicit constructor 
  class Rocket {
    launch() {
      console.log("To the moon!");
    }
  }
  
  const zeus = new SpaceShuttle('Neptun');
  zeus.takeOff();

  const rocket1 = new Rocket()
  rocket1.launch()
