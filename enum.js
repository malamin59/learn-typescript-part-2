// // LEARN ENUM
// // type UserRoles = 'Admin' | 'user' | 'editor' | 'Viewer';
// var UserRoles;
// (function (UserRoles) {
//     UserRoles["Admin"] = "Admin";
//     UserRoles["Editor"] = "Editor";
//     UserRoles["Viewer"] = "Viewer";
// })(UserRoles || (UserRoles = {}));
// var createEdit = function (role) {
//     if (role === UserRoles.Admin || role == UserRoles.Editor) {
//         return true;
//     }
//     else
//         return false;
// };
// var isEditPerm = createEdit(UserRoles.Admin);
// console.log(isEditPerm);
