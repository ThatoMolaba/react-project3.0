// authActions.js
export const login = () => ({
  type: "LOGIN",
  // other payload...
});

// In your component:
import { login } from "./actions/authActions";

// Dispatch the action when needed:
dispatch(login());
