import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks


import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// config
import { HEADER, NAVBAR } from '../../config';
//
import DashboardHeader from '../../layouts/dashboard/header';
import NavbarVertical from '../../layouts/dashboard/navbar/NavbarVertical';

import AuthContext from "../../contexts/AuthContext";



// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

// ----------------------------------------------------------------------


const Home = () => {

  const { collapseClick, isCollapse } = useCollapseDrawer();



  const [open, setOpen] = useState(false);



  // if (verticalLayout) {
  //   return (
  //     <>
  //       <DashboardHeader onOpenSidebar={() => setOpen(true)} verticalLayout={verticalLayout} />

  //       {isDesktop ? (
  //         <NavbarHorizontal />
  //       ) : (
  //         <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
  //       )}

  //       <Box
  //         component="main"
  //         sx={{
  //           px: { lg: 2 },
  //           pt: {
  //             xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
  //             lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 80}px`,
  //           },
  //           pb: {
  //             xs: `${HEADER.MOBILE_HEIGHT + 24}px`,
  //             lg: `${HEADER.DASHBOARD_DESKTOP_HEIGHT + 24}px`,
  //           },
  //         }}
  //       >
  //         {/* <Outlet /> */}
  //       </Box>
  //     </>
  //   );
  // }


  return (
    // <section>
    //   {user && <UserInfo user={user} />}
    //   <h1>You are on home page!</h1>
    // </section>

    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DashboardHeader isCollapse={isCollapse} onOpenSidebar={() => setOpen(true)} />

      <NavbarVertical isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />

      <MainStyle collapseClick={collapseClick}>
        {/* <Outlet /> */}
      </MainStyle>
    </Box>

  );
};

export default Home;