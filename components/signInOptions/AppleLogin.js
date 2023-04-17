import { useState } from "react";
import * as AppleAuthentication from "expo-apple-authentication";
import { View, StyleSheet } from "react-native";

import { useDispatch } from "react-redux";
import { thirdPartyCredReducer } from "./../../redux/features/userSlice";

export default function AppleLogin() {
  const dispatch = useDispatch();
  const [thirdPartyCredentials, setThirdPartyCredentials] = useState(null);
  const handleAppleSignInButton = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          // AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      console.log(credential.user);
      setThirdPartyCredentials({ apple_uid: credential.user });
      dispatch(thirdPartyCredReducer(thirdPartyCredentials));
      // signed in
    } catch (e) {
      if (e.code === "ERR_REQUEST_CANCELED") {
        // handle that the user canceled the sign-in flow
      } else {
        // handle other errors
      }
    }
  };

  return (
    <View style={styles.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={handleAppleSignInButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 44,
  },
});
