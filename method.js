let user = {
  fname : "muhammed",
  name :'nihal',
  age :18,
  domain : "mern",
 fullname : function () {
  return `hello my full name is ${this.fname} ${this.name}`
 }
}
console.log(user.fullname());
