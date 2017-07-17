//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry) {
  this.status = status
  this.color = color
  this.hungry = hungry
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog('normal', 'black', false)


const moonshine = new Dog('normal', 'white', true)


const atticus = new Dog('normal', 'brown', true)

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human () {
  this.pet = function(doggo){
    doggo.status = 'happy'
  }
  this.feed = function(doggo){
    doggo.hungry = false
  }
  this.cool = true;
}

// Instances of Human
// Needed: mason, julia

const mason = new Human()
  mason.cool = false


const julia = new Human()


module.exports = {
  sadie,
  moonshine,
  atticus,
  mason,
  julia
}
