// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
   return cats.push(name); 
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name){
    let catsNew = [...cats, name]
    return catsNew;
}

function prependCat(name){
    let catsNew = [name,...cats]
    return catsNew;
}

function removeLast(){
    cats.pop();
    return cats;
}

function removeLastCat(){
    let newCats = cats.slice(0,-1);
    return newCats;
}

function removeFirstCat(){
    let newCats= cats.slice(1);
    return newCats;
}

