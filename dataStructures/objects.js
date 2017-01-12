var item = {
  name: "camera",
  age: 5,
  owner: "Jimmy"
}

console.log(item["owner"] + " has a " + item.age + " year old " + item.name);

item.age += 1; // 1 year later...
console.log(item["owner"] + " has a " + item.age + " year old " + item.name);
