function scuberGreetingForFeet(num1){
  let result
  if (num1 <= 400) {
    result = 'This one is on me!';
  }
  else if (num1 > 2000 && num1 < 2500) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (num1 > 2500) {
    result = 'No can do.';
  }
  return result
}

function ternaryCheckCity(cityName){
  return (cityName === "NYC" ? 'Ok, sounds good.' : 'No go.');
}

function switchOnCharmFromTip(expr){
  switch (expr) {
    case expr = 'generous':
      return 'Thank you so much.';
      break;
    case expr = 'not as generous':
      return 'Thank you.';
      break;
    case expr = 'thanks for everything':
      return 'Bye.';
      break;
  }
}