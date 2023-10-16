import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import MessageContent from "./MessageContent";

const Message = ({ msg }) => {
  const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("TweetDetailsScreen", { msg });
      }}
    >
      <MessageContent msg={msg} />
    </Pressable>
  );
};

export default Message;
