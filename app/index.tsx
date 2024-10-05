import { Redirect } from "expo-router";
import React from "react";

const MainPage = () => {
  return <Redirect href={"/(auth)/welcome"} />;
};

export default MainPage;
