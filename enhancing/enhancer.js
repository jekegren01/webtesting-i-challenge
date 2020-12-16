module.exports = {
  success,
  fail,
  repair,
  get,
  fixHack
};

function success(item) {
  fixHack(item)
  if(item.enhancement >= 20){
    return item;
  }
  else{
    return {
      name: item.name,
      durability: item.durability,
      enhancement: item.enhancement + 1
    }
  }
}

function fail(item) {
  fixHack(item)
  if(item.enhancement < 15){
    return{
      name: item.name,
      durability: item.durability - 5,
      enhancement: item.enhancement,
    }
  }
  else if(item.enhancement >= 15){
    if(item.enhancement > 16){
      return{
        name: item.name,
        durability: item.durability - 10,
        enhancement: item.enhancement - 1,
      }
    }
    else{
      return{
        name: item.name,
        durability: item.durability - 10,
        enhancement: item.enhancement,
      }
    }
  }
}

function repair(item) {
  fixHack(item)
  return {
    name: item.name, 
    durability: 100, 
    enhancement: item.enhancement};
}

function get(item) {
  let iname = item.name;
   if(item.enhancement === 0){
     return item;
   }
   else{
     iname = `[${item.enhancement}] ${iname}`
     return {
       name: iname,
       durability: item.durability,
       enhancement: item.enhancement,
     }
   }
}

function fixHack(item){
  let idurability = item.durability;
  let ienhancement = item.enhancement;
  if(item.durability > 100){
    idurability = 100;
  }
  else if(item.durability < 0){
    idurability = 0;
  }
  if(item.enhancement > 20){
    ienhancement = 20;
  }
  if(item.enhancement < 0){
    ienhancement = 0;
  }
  return{
    name: item.name,
    enhancement: ienhancement,
    durability: idurability,
  }
} 
