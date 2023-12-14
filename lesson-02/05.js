let passport = {
  name: "Petr",
  surname: "Petrov",
};

const passport2 = Object.assign({}, passport, { name: 'Ivan' });

console.log(passport.name);
console.log(passport2.name);