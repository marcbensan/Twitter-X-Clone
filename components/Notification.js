import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import NotificationContent from './NotificationContent';

const Notification = ({ notif }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailsScreen", { notif });
      }}
    >
      <NotificationContent notif={notif} />
    </Pressable>
  );
};

export default Notification;
