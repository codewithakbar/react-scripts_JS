// routes
// import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import Settings from './components/settings';
import RtlLayout from './components/RtlLayout';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import ThemeColorPresets from './components/ThemeColorPresets';
import ThemeLocalization from './components/ThemeLocalization';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { kirishForm } from './sections/auth/login/index';

import Home from "./sections/home/homePage";



// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <ThemeColorPresets>
        <ThemeLocalization>
          <RtlLayout>
            <NotistackProvider>
              <MotionLazyContainer>
                <ProgressBarStyle />
                <ChartStyle />
                <Settings />
                <ScrollToTop />


                  <Router>
                    <div className="flex flex-col min-h-screen overflow-hidden">
                      <AuthProvider>
                        <Switch>
                          <Route component={kirishForm} path="/login" />
                          <Route component={Home} path="/" />
                        </Switch>
                      </AuthProvider>
                    </div>
                  </Router>


              </MotionLazyContainer>
            </NotistackProvider>
          </RtlLayout>
        </ThemeLocalization>
      </ThemeColorPresets>
    </ThemeProvider>
  );

}
