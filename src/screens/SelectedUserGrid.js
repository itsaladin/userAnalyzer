import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Card, Paragraph, Searchbar } from "react-native-paper";
import { COLORS } from "../constant/Index";
import JsonData from "../data/Index";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export const UserGrid = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const paramsObj = route.params;

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  let fruits = new Map();
  let filteredAr;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ height: 80, backgroundColor: COLORS.primary }}>
        <Ionicons
          name="ios-arrow-back"
          size={24}
          color={COLORS.white}
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            flex: 1,
            top: 10,
            left: 10,
            textAlignVertical: "center",
          }}
        />
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditFilter", paramsObj)}
        >
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 18,
              marginVertical: 10,
              alignSelf: "flex-end",
            }}
          >
            Edit Filter
            <Ionicons
              name="md-filter-outline"
              size={24}
              color={COLORS.primary}
              style={{
                flex: 1,
                top: 10,
                left: 10,
                textAlignVertical: "center",
              }}
            />
          </Text>
        </TouchableOpacity>
        <Card>
          <Searchbar
            placeholder="Search by name"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ borderColor: COLORS.primary, borderWidth: 1 }}
          />
        </Card>

        <View
          style={{
            marginBottom: 250,
          }}
        >
          <FlatList
            scrollEnabled={true}
            nestedScrollEnabled={true}
            data={Object.keys(JsonData)}
            keyExtractor={(item, indexKey) => "key" + indexKey}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
            numColumns={2}
            horizontal={false}
            // pagingEnabled={true}
            decelerationRate="fast"
            bounces={true}
            removeClippedSubviews={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              // rendering users local imported json data
              // viewing card by check active and superActive logical OR check superActive and Bored
              paramsObj?.active && paramsObj?.superActive ? (
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length >=
                  5 &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length <
                  10 && (
                  <Card
                    style={{
                      width: 160,
                      marginTop: 15,
                      marginRight: 8,
                    }}
                  >
                    <Card.Cover
                      style={{ height: 150 }}
                      source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                    />
                    <Text
                      style={{
                        padding: 5,
                        position: "absolute",
                        backgroundColor: COLORS.primary,
                        alignSelf: "flex-end",
                        marginTop: 5,
                      }}
                    >
                      {/* here check active and superActive logical OR check superActive and Bored */}
                      {
                        (paramsObj?.active &&
                          paramsObj?.superActive &&
                          Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                            .length >= 5 &&
                          Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                            .length < 10 &&
                          "Active") ||
                          (Object.keys(
                            JsonData[item]?.calendar?.daysWithDetails
                          ).length < 10 &&
                            "SuperActive")
                        //   ||
                        // (paramsObj?.superActive &&
                        //   paramsObj?.bored &&
                        //   Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                        //     .length < 10 &&
                        //   "SuperActive") ||
                        // (Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                        //   .length > 5 &&
                        //   "Bored")
                      }
                    </Text>
                    <View style={{ padding: 10 }}>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    </View>
                  </Card>
                )
              ) : // here check superActive and Bored logical OR check superActive and Bored
              paramsObj?.active && paramsObj?.superActive ? (
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length <
                  10 &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length >
                  5 && (
                  <Card
                    style={{
                      width: 160,
                      marginTop: 15,
                      marginRight: 8,
                    }}
                  >
                    <Card.Cover
                      style={{ height: 150 }}
                      source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                    />
                    <Text
                      style={{
                        padding: 5,
                        position: "absolute",
                        backgroundColor: COLORS.primary,
                        alignSelf: "flex-end",
                        marginTop: 5,
                      }}
                    >
                      {/* here check superActive and Bored logical OR check superActive and Bored */}
                      {(paramsObj?.superActive &&
                        paramsObj?.bored &&
                        Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                          .length < 10 &&
                        "SuperActive") ||
                        (Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                          .length > 5 &&
                          "Bored")}
                    </Text>
                    <View style={{ padding: 10 }}>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    </View>
                  </Card>
                )
              ) : paramsObj?.active && paramsObj?.bored ? (
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length <
                  10 &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length >
                  5 && (
                  <Card
                    style={{
                      width: 160,
                      marginTop: 15,
                      marginRight: 8,
                    }}
                  >
                    <Card.Cover
                      style={{ height: 150 }}
                      source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                    />
                    <Text
                      style={{
                        padding: 5,
                        position: "absolute",
                        backgroundColor: COLORS.primary,
                        alignSelf: "flex-end",
                        marginTop: 5,
                      }}
                    >
                      {/* here check active and bored logical OR check active and Bored */}
                      {(paramsObj?.active &&
                        paramsObj?.bored &&
                        Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                          .length >= 5 &&
                        Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                          .length < 10 &&
                        "Active") ||
                        (Object.keys(JsonData[item]?.calendar?.daysWithDetails)
                          .length > 5 &&
                          "Bored")}
                    </Text>
                    <View style={{ padding: 10 }}>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                      <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    </View>
                  </Card>
                )
              ) : // check single active logic
              paramsObj?.active &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length >=
                  5 &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length <
                  10 ? (
                <Card
                  style={{
                    width: 160,
                    marginTop: 15,
                    marginRight: 8,
                  }}
                >
                  <Card.Cover
                    style={{ height: 150 }}
                    source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                  />
                  <Text
                    style={{
                      padding: 5,
                      marginTop: 5,
                      position: "absolute",
                      backgroundColor: COLORS.primary,
                      alignSelf: "flex-end",
                    }}
                  >
                    Active
                  </Text>
                  <View style={{ padding: 10 }}>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                  </View>
                </Card>
              ) : // check single superActive logic
              paramsObj?.superActive &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length <
                  10 ? (
                <Card
                  style={{
                    width: 160,
                    marginTop: 15,
                    marginRight: 8,
                  }}
                >
                  <Card.Cover
                    style={{ height: 150 }}
                    source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                  />
                  <Text
                    style={{
                      padding: 5,
                      position: "absolute",
                      backgroundColor: COLORS.primary,
                      alignSelf: "flex-end",
                      marginTop: 5,
                    }}
                  >
                    SuperActive
                  </Text>
                  <View style={{ padding: 10 }}>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                  </View>
                </Card>
              ) : // check single bored logic
              paramsObj?.bored &&
                Object.keys(JsonData[item]?.calendar?.daysWithDetails).length >
                  5 ? (
                <Card
                  style={{
                    width: 160,
                    marginTop: 15,
                    marginRight: 8,
                  }}
                >
                  <Card.Cover
                    style={{ height: 150 }}
                    source={{ uri: JsonData[item]?.profile?.pictureUrl }}
                  />
                  <Text
                    style={{
                      marginTop: 5,
                      position: "absolute",
                      backgroundColor: COLORS.primary,
                      alignSelf: "flex-end",
                      padding: 5,
                    }}
                  >
                    Bored
                  </Text>
                  <View style={{ padding: 10 }}>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                    <Paragraph>{JsonData[item]?.profile?.name}</Paragraph>
                  </View>
                </Card>
              ) : null
            }
          />
        </View>
      </View>
    </View>
  );
};

export default UserGrid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  databeBox: {
    margin: 10,
    textAlign: "center",
  },
  databeHeader: {
    margin: 10,
    textAlign: "left",
  },
});
