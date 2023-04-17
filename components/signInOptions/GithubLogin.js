import * as React from "react";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { StyleSheet, Pressable, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";

// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/<CLIENT_ID>",
};

export default function GithubLogin() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: "CLIENT_ID",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "your.app",
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <Pressable
      style={styles.pressable}
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    >
      <AntDesign name="github" size={24} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#24292e",
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignSelf: "center",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
