import { Iuser } from "../interfaces/iuser";

export class User implements Iuser{
    userName!: string;
    id!:string
    password!:string
    email!:string
    role!:string

    constructor(user?:Iuser){
        if(user){
            this.id=user.id;
            this.userName=user.userName;
            this.password=user.password;
            this.email=user.email;
            this.role=user.role;
            
        }
    }

}
