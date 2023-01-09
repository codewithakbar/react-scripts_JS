
// form
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
// hooks
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

import AuthContext from "../../../contexts/AuthContext"

import { useContext } from 'react'

// ----------------------------------------------------------------------

export default function LoginForm() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>Login </h1>
        <hr />
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </section>
  );

//   return (
//     <FormProvider onSubmit={handleSubmit}>
//       <Stack spacing={3}>
//         <RHFTextField id="username" name="username" label="Username" />

//         <RHFTextField
//           name="password"
//           label="Password"
//           id="password"
//           type="password"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton edge="end">
//                   <Iconify />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//         <RHFCheckbox name="remember" label="Remember me" />
        
//       </Stack>

//       <LoadingButton fullWidth size="large" type="submit" variant="contained">
//         Login
//       </LoadingButton>
//     </FormProvider>
//   );
}
