const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable. ", (name) => {
  console.log(`Hello ${name}.`);

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`${activity} sounds fun!`);

    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`You have a good taste for music ${name}.`);

      rl.question("Which meal is your favourite? (eg: dinner, brunch. etc.) ", (meal) => {
        console.log("Word of advice, people say that breakfast is the most important meal of the day.");

        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          console.log(`${food} sounds delicious. You kinda made me hungry.`);

          rl.question("Which sport is your absolute favourite? ", (sports) => {
            console.log(`I'm a huge fan of ${sports} as well.`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              console.log("You sounds like an amazing person, I hope I get to meet you one day.");
              console.log(`\n--- Here's your Profile ---
              ${name} loves to listen to ${music} while ${activity}, ${name} likes eating ${food} for ${meal}, prefers ${sports} over any other sports and is amzing at ${superpower}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
