import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [name, setName] = useState("");

  const updateNameAsOtherName = () => {
    setName("ga con");
  };

  useEffect(() => {
    console.log("vao day 1 lan duy nhat sau khi man hinh duoc hien thi");
  }, []);  // cai ham use effect nay sẽ chạy 1 lần khi mà cái component này được mount, tức là được hiển thị

  useEffect(() => {
    console.log("bien name vua thay doi vao day ", name);
  }, [name]);  // khi cai deps kia có giá trị tức là khi biến name thay đổi thì nó sẽ chạy các thứ ở bên trong

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeHolder={"Nhap ho va ten"}
        style={{
          height: 300,
          width: 200,
          marginTop: 40,
        }}
      />
      <TouchableOpacity onPress={updateNameAsOtherName}>
        <Text>nhấn để set name = ga con</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
