import { Box } from "./Box.js";
import { ThemeUIProvider } from "theme-ui";
import { theme } from "./theme.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshTokenAsyncThunk } from "../redux/auth/authOperation.js";
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesStyled } from "./App.styled.js";
import { Layout } from "../Layout.js";
import ContactsListPage from "../Pages/ContactsListPage.js";
import ContactPage from "../Pages/ContactPage.jsx";
import Filter from "../Component/Filter/Filter.js";
import Form from "../Component/Form/Form.jsx";
import Registration from "../Component/AuthForm/Registration.js";
import Home from "../Pages/Home.js";
import LoginPage from "../Pages/LooginPage.js";
import { PrivateRoute } from "../PrivetRoater.js";
import { RestrictedRoute } from "../Restricted.js";
import PhonebookNavigation from "../navigation/PhonebookNavigation.js";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshTokenAsyncThunk());
  }, []);

  return (
    <ThemeUIProvider theme={theme}>
      {/* <Box
        bg="secondary"
        height="100vh"
        display="flex "
        backgroundImage="url('https://static.vecteezy.com/system/resources/previews/010/008/086/original/background-dimension-3d-graphic-message-board-for-text-and-message-design-line-shadow-for-modern-web-design-free-vector.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      > */}
      <Box
        color="primary"
        width=" 50%"
        p={3}
        margin="auto"
        border="solid 2px"
        borderRadius="10px"
        as="main"
        height="400px"
      >
        <BrowserRouter basename="/contacts">
          <RoutesStyled>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route
                path="phonebook"
                element={
                  <RestrictedRoute
                    redirectTo="/login"
                    component={<PhonebookNavigation />}
                  />
                }
              >
                <Route
                  path="contacts"
                  element={
                    <RestrictedRoute
                      redirectTo="/login"
                      component={<ContactsListPage />}
                    />
                  }
                />
                <Route
                  path=":idContact"
                  element={
                    <RestrictedRoute
                      redirectTo="/login"
                      component={<ContactPage />}
                    />
                  }
                />
                <Route
                  path="add"
                  element={
                    <RestrictedRoute redirectTo="/login" component={<Form />} />
                  }
                />

                <Route
                  path="find"
                  element={
                    <RestrictedRoute
                      redirectTo="/login"
                      component={<Filter />}
                    />
                  }
                />
              </Route>

              <Route
                path="registration"
                element={
                  <PrivateRoute
                    redirectTo="/phonebook"
                    component={<Registration />}
                  />
                }
              />

              <Route
                path="login"
                element={
                  <PrivateRoute
                    redirectTo="/phonebook"
                    component={<LoginPage />}
                  />
                }
              />
            </Route>

            <Route path="*" element={<p>404</p>} />
          </RoutesStyled>
        </BrowserRouter>
      </Box>
      {/* </Box> */}
    </ThemeUIProvider>
  );
}

export default App;
