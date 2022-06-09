import userService from "../../db/UserService";
import util from "../../db/utils"

const util1 = util.utilspart1;
test.skip("Null user should be Generated", ()=>{
   const nullUser = userService.getNullUser();
    expect(nullUser).toBeTruthy();
    expect(Object.entries(nullUser).length).toBeGreaterThan(0);
});

test("Sample", () => {
    const users = userService.getUsers(5, {sort:{
        by:"id",dir:"desc"
    }});

    console.log(users);
    
})
