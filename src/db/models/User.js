export class Role{
    /**
     * 
     * @param {String} id 
     * @param {String} name 
     */
    constructor(id, name){
        this.id = id;
        this.name = name
    }
}

export class Badge{
    /**
     * 
     * @param {String} id 
     * @param {String} name 
     * @param {String} color
     */
     constructor(id, name, color){
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

/**
 * User Full Data Model
 */
class User{
    /**
     * 
     * @param {String} id 
     * @param {String} publicID 
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} userName 
     * @param {String} email 
     * @param {String} password 
     * @param {String} address 
     * @param {String} phoneNumber 
     * @param {Array<Number>} role 
     * @param {Array<Badge>} badges
     * @param {String} profileURL 
     * @param {String} headline
     */
    constructor(id, publicID, firstName, lastName, userName, email, password, address,phoneNumber, role, badges, profileURL, headline){
        this.id = id;
        this.publicID = publicID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.role = role;
        this.badges = badges;
        this.profileURL = profileURL;
        this.headline = headline
    }
}

export class NullUser{
    constructor(){
        this.id = 0;
        this.publicID = "000000";
        this.firstName = "Unknown";
        this.lastName = "User";
        this.userName = "unknown";
        this.email = "unknown@mailinator.com";
        this.password = "";
        this.address = "In the metaverse";
        this.phoneNumber = "";
        this.role = {
            id: 0,
            name: "None"
        };
        this.badges = [new Badge("0","Unknown", "secondary")]
        this.profileURL = "https://avatars.dicebear.com/api/identicon/unknown.svg";
        this.headline = "Lorem ipsum dolor sit amet."
    }
}

export default class{
    /**
     * 
     * @param {User} user 
     */
    constructor(user){
        if(user === undefined) return undefined;
        
        this.id = user.id;
        this.publicID = user.publicID;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.userName = user.userName;
        this.email = user.email;
        //this.password = user.password;
        this.address = user.address;
        this.phoneNumber = user.phoneNumber;
        this.role = user.role;
        this.badges = user.badges;
        this.profileURL = user.profileURL;
        this.headline = user.headline
    }
}