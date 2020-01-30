// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

for (let side = 1; side <= 4; side++) {
    let output = "";
    for(let i = 1; i <= side; i++) {
        output += "#";
    }
    console.log(output);
}
for (let side = 3; side >= 1; side--) {
    let output = "";
    for(let i = 1; i <= side; i++) {
        output += "#";
    }
    console.log(output);
  }
// if (let 1 += "#") {

// } else {

// }

// }
// }
