import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Alert } from "react-native";
import { Checkbox } from "react-native-paper";
import { COLORS } from "../constant/Index";
import DatePicker from "react-native-datepicker";
import { useNavigation } from "@react-navigation/native";

export const EditFilter = () => {
  const navigation = useNavigation();

  const [active, setActive] = useState(false);
  const [superActive, setSuperActive] = useState(false);
  const [bored, setBored] = useState(false);

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const generateHandler = () => {
    if (fromDate && toDate) {
      navigation.navigate("UserGrid", {
        active,
        superActive,
        bored,
        fromDate,
        toDate,
      });
    } else {
      Alert.alert("Warnning !", "Date should not be empty", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ height: 60, backgroundColor: COLORS.primary }} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: COLORS.primary,
            marginLeft: 20,
          }}
        >
          Edit Filter
        </Text>
        <Entypo
          name="cross"
          size={28}
          color={COLORS.primary}
          style={{ marginRight: 15 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View
        style={{
          borderColor: COLORS.primary,
          borderWidth: 2,
          padding: 15,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            color: COLORS.primary,
            borderBottomColor: COLORS.lightGray,
            borderBottomWidth: 1,
            marginBottom: 5,
          }}
        >
          Date
        </Text>

        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.primary,
              marginTop: 10,
            }}
          >
            From
          </Text>
          <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{ width: 200, marginLeft: 15 }}
            date={fromDate}
            mode="date"
            placeholder="DD/MM/YYYY"
            format="DD-MM-YYYY"
            // maxDate={moment().format("DD-MM-YYYY")}
            confirmBtnText="Chọn"
            cancelBtnText="Hủy"
            customStyles={{
              dateInput: {
                backgroundColor: COLORS.white,
                borderWidth: 1,
                borderColor: COLORS.primary,
              },
            }}
            onDateChange={(date) => {
              setFromDate(date);
            }}
          />
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              color: COLORS.primary,
              marginTop: 10,
            }}
          >
            To
          </Text>
          <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{ width: 200, marginLeft: 35 }}
            date={toDate}
            mode="date"
            placeholder="DD/MM/YYYY"
            format="DD-MM-YYYY"
            // maxDate={moment().format("DD-MM-YYYY")}
            confirmBtnText="Chọn"
            cancelBtnText="Hủy"
            customStyles={{
              dateInput: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: COLORS.primary,
              },
            }}
            onDateChange={(date) => {
              setToDate(date);
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 22,
            color: COLORS.primary,
            borderBottomColor: COLORS.lightGray,
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        >
          Status
        </Text>
        <View style={styles.checkboxContainer}>
          <View style={{ flexDirection: "row" }}>
            <Checkbox
              status={active ? "checked" : "unchecked"}
              onPress={() => {
                setActive(!active);
              }}
            />
            <Text style={styles.label}>Active</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Checkbox
              status={superActive ? "checked" : "unchecked"}
              onPress={() => {
                setSuperActive(!superActive);
              }}
            />
            <Text style={styles.label}>Super Active</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Checkbox
              status={bored ? "checked" : "unchecked"}
              onPress={() => {
                setBored(!bored);
              }}
            />
            <Text style={styles.label}>Bored</Text>
          </View>
        </View>

        <View
          style={{
            width: 120,
            alignSelf: "center",
          }}
        >
          <Button
            title="Generate"
            color={COLORS.primary}
            onPress={() => generateHandler()}
          />
        </View>
      </View>
    </View>
  );
};

export default EditFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
