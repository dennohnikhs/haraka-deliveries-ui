import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BodaBodaGuyHomeScreen from "./app/screens/components/boda_boda_guy/screens";
import BodaBodaGuyQRCodeScreen from "./app/screens/components/boda_boda_guy/screens/BarCodeScanner";
import BodaBodaGuyProfileEdit from "./app/screens/components/boda_boda_guy/screens/ProfileEdit";
import BodaBodaGuyQRCodeScanner from "./app/screens/components/boda_boda_guy/screens/ScanningQrCode";
import BuyerHomeScreen from "./app/screens/components/buyer/screens";
import BuyerWelcomeScreen from "./app/screens/components/buyer/screens";
import ActiveDeliveries from "./app/screens/components/buyer/screens/ActiveDeliveries";
import BuyerQRCodeScanner from "./app/screens/components/buyer/screens/BuyerScanningQr";
import BuyerProfileEdit from "./app/screens/components/buyer/screens/ProfileEdit";
import ThankYouPage from "./app/screens/components/buyer/screens/ThankYou";
import CourierCompanyHomeScreen from "./app/screens/components/courier_company/screens";
import CourierCompanyQRCodeScreen from "./app/screens/components/courier_company/screens/BarCodeScanner";
import CourierCompanyProfileEdit from "./app/screens/components/courier_company/screens/CourierCompanyProfileEdit";
import CorierCompanyProfileEdit from "./app/screens/components/courier_company/screens/CourierCompanyProfileEdit";
import CourierCompanyQRCodeScanner from "./app/screens/components/courier_company/screens/ScanningQrCode";
import QRCodeScreen from "./app/screens/components/seller/ScanQrCode";
import QrCodeScannerScreen from "./app/screens/components/seller/ScanQrCode";
import ScanScreen from "./app/screens/components/seller/ScanQrCode";
import SellerHomePage from "./app/screens/components/seller/screens";
import NewDelivery from "./app/screens/components/seller/screens/NewDelivery";
import PackageDetails from "./app/screens/components/seller/screens/PackageDetails";
import SellerProfileEdit from "./app/screens/components/seller/screens/profileEdit";
import DashBoard from "./app/screens/dashboard/dashboard";
import WelcomeScreen from "./app/screens/home";
import HomeScreenMain from "./app/screens/home/HomeScreenMain";
import Login from "./app/screens/login/Login";
import PasswordReset from "./app/screens/password_reset";
import ConfirmPasswordResetCode from "./app/screens/password_reset/Confirm";
import UpdatePassword from "./app/screens/password_reset/NewPassword";
import SignUp from "./app/screens/sign_up/SignUp";
import { GlobalContext, defaultState } from "./context";

const Stack = createNativeStackNavigator();

const App = () => {
  const [state, setState] = useState(defaultState);

  updateState = (obj) => setState({ ...state, ...obj });

  return (
    <GlobalContext.Provider
      value={{
        state,
        updateState,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Dashboard" component={DashBoard} />
          <Stack.Screen name="ThankYouPage" component={ThankYouPage} />
          <Stack.Screen
            name="BuyerQRCodeScanner"
            component={BuyerQRCodeScanner}
          />
          <Stack.Screen
            name="ConfirmPasswordResetCode"
            component={ConfirmPasswordResetCode}
          />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="PasswordReset" component={PasswordReset} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BuyerProfileEdit" component={BuyerProfileEdit} />
          <Stack.Screen name="ActiveDeliveries" component={ActiveDeliveries} />
          <Stack.Screen name="SellerHomePage" component={SellerHomePage} />
          <Stack.Screen
            name="CourierCompanyHomeScreen"
            component={CourierCompanyHomeScreen}
          />
          <Stack.Screen name="BuyerHomeScreen" component={BuyerHomeScreen} />
          <Stack.Screen
            name="BodaBodaGuyHomeScreen"
            component={BodaBodaGuyHomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
};

export default App;
