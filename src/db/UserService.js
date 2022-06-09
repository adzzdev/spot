import data from "../assets/data/user.json";
import User, { NullUser, Role } from "./models/User";
import utilspart1 from "./utils/utility-part1";



const USERS = data["users"];
const ROLES = data["roles"];

class UserService{
    constructor(){
        //nothing to instantiate here...
    }

    getAllUsers(){
        return USERS;
    }

    getUsers(top=5, options={
        sort:{ by: "id", dir: "ASC" },
    }){
        
        const users = USERS.slice(0, top);
        if(!utilspart1.checkObjectProps(options.sort, ["by", "dir"])){
            throw new Error("Incorrect option defined for SORT");
        }
        return users.sort(function(userA, userB){
            if(userA[options.sort.by] > userB[options.sort.by]){
                if(options.sort.dir.toLowerCase() === "asc"){
                    return 1
                }else{
                    return -1
                }
            }else if(userA[options.sort.by] < userB[options.sort.by]){
                if(options.sort.dir.toLowerCase() === "asc"){
                    return -1
                }else{
                    return 1
                }
            }else{
                return 0;
            }
        });
    }
    /**
     * 
     * @param {String} value 
     * @param {String} key 
     * @returns {User}
     */
    getUser(value, key){
        const user = USERS.find(function(user){
            if(user[key] === value){
                return true; 
            }
            return false;
        });

        if(Object.entries(user).length === 0){
            return new NullUser();
        }
        
        return new User(user);
    }

    getNullUser(){
        return new NullUser();
    }
    
    /**
     * 
     * @param {Number} id 
     * @returns {Role}
     */
    getUserRole(id){
        
        const role = ROLES.find(function(role){
            if(role.id === id){
                return true;
            }else{
                return false;
            }
        });
        return role;
    }
}


const userService = new UserService();

export default userService;

