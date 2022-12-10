data = [
    {
      name: "boombayah",
      author: "blackpink",
      duration: 1.5,
    },
    {
      name: "animal",
      author: "maron5",
      duration: 2,
    },
    {
      name: "Tháng tư là lời nói dối của em",
      author: "Hà Anh Tuấn",
      duration: 3,
      fan: "Trần Minh Sơn"
    },
    {
      name: "Rolling in the deep",
      author: "Adele",
      duration: 3,
    },
  ];    
  console.log(data)

  let filterduration = data.filter(function(loc) {
    return loc.duration == 3;
});
console.log(filterduration);

let mapauthor = data.map(function(element){
    return element.author
})
console.log(mapauthor)

for (const element of data) {
    console.log(element.name);
  }
 
console.log(data[2])