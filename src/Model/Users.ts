export interface UserModelInterface {
    id: number;
    name: string,
    password: string;
    type: "USER" | "ADMIN"

    getUserInfo(): { name: string, type: "USER" | "ADMIN" }
}


export class UserModel implements UserModelInterface {
    constructor(public id: number, public name: string, public password: string, public type: "USER" | "ADMIN" = "USER") {
    }

    getUserInfo(): { name: string, type: "USER" | "ADMIN" } {
        return {name: this.name, type: this.type};
    }


}


const users: UserModel[] = [
    new UserModel(5, "ahmed", "123456", 'USER'),
    new UserModel(1, "yousif", "123456", 'USER'),
]

export async function GetUserByUserName(name: string): Promise<UserModel | null> {
    let filteredUsers = users.filter(user => user.name === name);
    if (filteredUsers.length == 0)
        return null;
    return filteredUsers[0]
}