/* create business name by combining list of adjectives and shop name and another world

Adjectives:
Crazy
Amazing
Fire

shop name:
Engine
 Foods
Garments

Another world:
Bros
Limited
Hub



*/
function getRandomBusinessName() {

    let adj1 = "Crazy", adj2 = "Amazing", adj3 = "Fire";
    let shop1 = "Engine", shop2 = "foods", shop3 = "Garments";
    let worlds1 = "Bros", worlds2 = "Limited", worlds3 = "Hub";

    let Adject = eval("adj" + (Math.floor(Math.random() * 3) + 1) );
    let shop = eval("shop" + (Math.floor(Math.random() * 3)+1) );
    let world = eval("worlds" + (Math.floor(Math.random() * 3)+1));

    return `${Adject} ${shop} ${world}`;


}

console.log(getRandomBusinessName());
