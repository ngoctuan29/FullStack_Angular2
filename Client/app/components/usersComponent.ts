import {Component} from "angular2/core";
@Component({
    selector: "users",
    templateUrl: "app/components/usersComponent.html"
})
export class UsersComponent {
    public SelectedUser: any = {};  
    public users: Array<any> = [
        { name: " user1", gender: "nữ" },
        { name: " user2", gender: "nam" },
        { name: " user3", gender: "nam" },
        { name: " user4", gender: "nữ" },

    ];
    public OnClickViewUser(user: any) {
        console.log(user);
        this.SelectedUser = user;
    }
}
