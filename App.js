// In App.js in a new project

import * as React from "react";
import { View, Text, Image, Button, TextInput } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./style";

const Home = (progs) => {
  const nav = progs.navigation;
  const uri = "https://ap.poly.edu.vn/images/logo.png";
  const name = "Nguyễn Văn Vững";
  const age = 20;
  const address = "Nam Định";
  const phoneNumber = "0123456789";
  const email = "vungnvph27864@fpt.edu.vn";

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 90 }}>
      <Image source={require("./assets/favicon.png")} style={styles.photo} />
      <View style={styles.button}>
        <Button
          title="Profile"
          onPress={() =>
            nav.navigate("Profile", {
              uri: uri,
              name: name,
              age: age,
              address: address,
              phoneNumber: phoneNumber,
              email: email,
            })
          }
        ></Button>
      </View>
    </View>
  );
};
const EditProfile = (progs) => {
  const nav = progs.navigation;
  const route = progs.route;
  const uri = route.params?.uri || "https://ap.poly.edu.vn/images/logo.png";
  const getName = route.params?.name || "";
  const getAge = route.params?.age || 0;
  const getAddress = route.params?.address || "";
  const getPhone = route.params?.phoneNumber || "";
  const getEmail = route.params?.email || "";

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 250,
            height: 100,
          }}
          source={{
            uri: uri,
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput value={getName} />
        <TextInput value={getAge} />
        <TextInput value={getAddress} />
        <TextInput value={getPhone} />
        <TextInput value={getEmail} />
      </View>

      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button title="Home" onPress={() => nav.navigate("Home")}></Button>
        <Button title="Save" onPress={() => nav.navigate("Profile")}></Button>
      </View>
    </View>
  );
};

const Profile = (progs) => {
  const nav = progs.navigation;
  const route = progs.route;
  const uri = route.params?.uri || "https://ap.poly.edu.vn/images/logo.png";
  const getName = route.params?.name || "eNguyễn Văn Vững";
  const getAge = route.params?.age || 21;
  const getAddress = route.params?.address || "eNam Định";
  const getPhone = route.params?.phoneNumber || "0987654321";
  const getEmail = route.params?.email || "vungvung1001@gmail.com";
  return (
    <View style={{ marginTop: 30 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={{
            width: 250,
            height: 100,
          }}
          source={{
            uri: uri,
          }}
        />
      </View>

      <Text style={styles.text}>Tên: {getName}</Text>
      <Text style={styles.text}>Tuổi: {getAge}</Text>
      <Text style={styles.text}>Địa chỉ: {getAddress}</Text>
      <Text style={styles.text}>Số điện thoại: {getPhone}</Text>
      <Text style={styles.text}>Email: {getEmail}</Text>
      <View
        style={{
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button title="Home" onPress={() => nav.navigate("Home")}></Button>
        <Button
          title="Edit Profle"
          onPress={() =>
            nav.navigate("EditProfile", {
              uri: uri,
              name: getName,
              age: getAge,
              address: getAddress,
              phoneNumber: getPhone,
              email: getEmail,
            })
          }
        ></Button>
      </View>
    </View>
  );
};

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
