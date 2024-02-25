
// import React, { createContext, useContext, useReducer } from 'react';
// import authReducer from '../reducers/auth';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, {
//     access: localStorage.getItem('access'),
//     refresh: localStorage.getItem('refresh'),
//     isAuthenticated: null,
//     user: null,
//   });

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };
