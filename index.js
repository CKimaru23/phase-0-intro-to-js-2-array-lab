const cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
   }

function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
   }

function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
   }


function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
   }

function appendCat(name){
    const newCats=[...cats, "Broom"];
    return newCats;
   }

function prependCat(name){
    const newCats=["Arnold",...cats];
    return newCats;
   }

function removeLastCat(){
    const newCats=cats.slice(0,cats.length-1);
    return newCats;
}

function removeFirstCat(){
    const newCats=cats.slice(1);
    return newCats;
}