// Q7- What's the ouput ?

const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

//// explaination
//// its gonna only stringify level and health and ignore rest(ie. username)
