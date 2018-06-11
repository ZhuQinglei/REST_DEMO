import { User } from './user';
import { UsersService } from './userService';

let users: User[];

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

function getUsers(): void {
  console.log("get users");
  usersService.getUsers().then(res => {
    users = res;
  }).catch(err => {
    console.log(err);
  })
}

function add(user: User): void {
  console.log("post user");
  usersService.addUser(newUser);
}

document.getElementById("getUsers").addEventListener("click", e => getUsers());
document.getElementById("postUser").addEventListener("click", e => add(newUser));