var itemEmptyObject = {};
itemEmptyObject.name = "Empty Object"; // add property
console.log(itemEmptyObject.name);

var item = {
  name: "camera",
  age: 5,
  owner: "Jimmy",
  getName: function(){
    return this.name;
  }
};

console.log(item["owner"] + " has a " + item.age + " year old " + item.getName());

item.age += 1; // 1 year later...
console.log(item["owner"] + " has a " + item.age + " year old " + item.getName());
