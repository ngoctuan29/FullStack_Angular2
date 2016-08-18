import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import{UsersComponent} from "./components/usersComponent";
import {CreateUserComponent} from "./components/createUserComponent"
@Component({
    selector: "default-layout",
    templateUrl: "app/layout.html",
    directives: [RouterOutlet,RouterLink]
})
@RouteConfig([
    {path:"/users", name:"Users", component: UsersComponent , useAsDefault:true},
    {path:"/Createuser", name:"Create User", component: CreateUserComponent},
])

export class DefaultLayout {
}