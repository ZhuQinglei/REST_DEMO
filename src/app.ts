import { User } from './user';
import { UsersService } from './userService';

// Data
let users: User[];
let editUser: User = {
  id: 1,
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  },
  email: "Sincere@april.biz",
  name: "Leanne Graham",
  phone: "1-770-736-8031",
  username: "Bret",
  website: "hildegard.org"
}
let newUser: User = {
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  },
  email: "Sincere@april.biz",
  name: "Leanne Graham",
  phone: "1-770-736-8031",
  username: "Bret",
  website: "hildegard.org"
}

let usersService: UsersService = new UsersService();

// functions
function getUsers(): void {
  console.log("get users");
  usersService.getUsers().then(res => {
    users = res;
  }).catch(err => {
    console.log(err);
  })
}
function getUser(id:number): void {
  console.log("get user 1");
  usersService.getUser(id).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}
function add(user: User): void {
  console.log("post user");
  usersService.addUser(user);
}

function updateUser(user: User): void {
  console.log("update user");
  usersService.updateUser(user).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

function deleteUser(id: number): void {
  console.log("delete user");
  usersService.deleteUser(id);
}

document.getElementById("getUsers").addEventListener("click", e => getUsers());
document.getElementById("getUser1").addEventListener("click", e => getUser(1));
document.getElementById("postUser").addEventListener("click", e => add(newUser));
document.getElementById("updateUser").addEventListener("click", e => updateUser(editUser));
document.getElementById("deleteUser").addEventListener("click", e => deleteUser(10));