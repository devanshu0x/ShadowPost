
const adjectives = [
  "Curious", "Silent", "Brave", "Happy", "Gentle", "Clever", "Witty", "Zany",
  "Jolly", "Fuzzy", "Sneaky", "Sleepy", "Bouncy", "Swift", "Nimble", "Wise",
  "Loyal", "Daring", "Grumpy", "Cheerful", "Bold", "Cuddly", "Goofy", "Mighty"
];

const animals = [
  "Fox", "Cat", "Panda", "Otter", "Hawk", "Wolf", "Koala", "Tiger", "Bear",
  "Penguin", "Eagle", "Lynx", "Moose", "Rabbit", "Raccoon", "Badger", "Deer",
  "Falcon", "Leopard", "Seal", "Sloth", "Giraffe", "Coyote", "Fennec", "Chinchilla"
];

export function generateRandomName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  return `${adj}${animal}${Math.floor(Math.random() * 1000)}`;
}
