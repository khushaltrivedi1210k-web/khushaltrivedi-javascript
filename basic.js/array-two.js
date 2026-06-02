const hero = ["thor", "ironman","spiderman"]
const heros = ["batman", "flash", "superman"]

// hero.push(heros)

// console.log(hero);
// console.log(hero[2][1]);

// hero.concat(heros)
// console.log(hero);

// const allhero = hero.concat(heros)
//  console.log(allhero);

const allheros = [...hero, ...heros]
console.log(allheros);

const Array = [1,2,[3,4],5,6,[7,8,[9,0]],10]
const sec_arr = Array.flat(Infinity)
console.log(sec_arr);

const all_array = [1,2,3,[1,2,3,[3,4]],4,5,6,[4,5,6,[5,6]],7,8,9,0,[7,8,9,0,[9,0]],10]
const arr = all_array.flat(Infinity)
console.log(arr);

// console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))