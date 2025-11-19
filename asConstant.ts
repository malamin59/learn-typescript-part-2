// ------------------------------------------------------------
// Step 1: Create a constant object that stores all user roles
// 'as const' makes every value readonly + literal type
// ------------------------------------------------------------
const userRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

// ------------------------------------------------------------
// Step 2: Create a Type for role values
// typeof userRoles --> gives the object's type
// keyof typeof userRoles --> gives the keys: "Admin" | "Editor" | "Viewer"
// (typeof userRoles)[keyof typeof userRoles]
//     --> gives the VALUES as union type: "Admin" | "Editor" | "Viewer"
// ------------------------------------------------------------
type RoleType = (typeof userRoles)[keyof typeof userRoles];

// ------------------------------------------------------------
// Step 3: A function that only accepts valid roles
// If you pass anything other than "Admin" | "Editor" | "Viewer"
// TypeScript will show an error
// ------------------------------------------------------------
function checkRole(role: RoleType) {
  console.log(role);
}

// ------------------------------------------------------------
// Step 4: Using the roles
// This prints "Admin"
// And it's type safe — can't make mistakes
// ------------------------------------------------------------
console.log(userRoles.Admin);

// Example call
checkRole(userRoles.Editor); // Valid
// checkRole("Owner"); //  Invalid, TypeScript will block this
