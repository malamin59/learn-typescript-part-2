// LEARN ENUM

// type UserRoles = 'Admin' | 'user' | 'editor' | 'Viewer';
enum UserRoles  {
  Admin = 'Admin',
  Editor= "Editor", 
  Viewer = "Viewer" 
}

const createEdit = (role: UserRoles) =>{
    if(role === UserRoles.Admin || role == UserRoles.Editor) {
        return true
    }
    else return false 
};

const isEditPerm = createEdit(UserRoles.Admin) ;
console.log(isEditPerm); 


/* enum Direction {
    Up, 
    Down, 
    Left, 
  Rite, 
}

console.log(Direction.Up);
 */