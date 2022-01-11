import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import DatePicker from "react-native-datepicker";
import { Checkbox } from "react-native-paper";
import { COLORS } from "../constant/Index";

export const FilterOption = () => {
  const navigation = useNavigation();

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [active, setActive] = useState(false);
  const [superActive, setSuperActive] = useState(false);
  const [bored, setBored] = useState(false);

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

      <View style={{ marginHorizontal: 15 }}>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 22,
              color: COLORS.primary,
            }}
          >
            User Analyzer
          </Text>
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              color: COLORS.darkGray,
              marginTop: 5,
            }}
          >
            Select filters to generate report
          </Text>
        </View>
        <View
          style={{ borderColor: COLORS.primary, borderWidth: 2, padding: 15 }}
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
                alignSelf: "center",
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
                alignSelf: "center",
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
    </View>
  );
};

export default FilterOption;

const styles = StyleSheet.create({
  container: {
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
