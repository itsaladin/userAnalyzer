import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditFilter from "../screens/EditFilterOptions";
import UserGrid from "../screens/SelectedUserGrid";
import FilterOption from "../screens/SelectFilterOptions";

const { Navigator, Screen } = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="FilterOption" component={FilterOption} />
      <Screen name="UserGrid" component={UserGrid} />
      <Screen name="EditFilter" component={EditFilter} />
    </Navigator>
  );
};

export default RootStack;
