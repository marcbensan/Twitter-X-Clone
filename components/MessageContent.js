import React from "react";
import { StyleSheet, View, Image, Text, useColorScheme } from "react-native";

const avatar = (author) => {
    const imageUrl = author.avatar.replace("_normal", "")
    return <Image style={styles.avatar} source={{uri: imageUrl}}/>
}

const GrayText = ({ children, numberOfLines, style }) => {
    return (
      <Text style={[style, styles.gray]} numberOfLines={numberOfLines}>
        {children}
      </Text>
    );
  };
  
  const MessageContent = ({ msg }) => {
    const theme = useColorScheme();
    return (
      <View style={styles.singleItem}>
        <View style={styles.row}>
          {avatar(msg.author)}
          <View style={styles.msgContentContainer}>
            <View style={styles.rowTop}>
              <Text
                numberOfLines={1}
                style={[
                  styles.header,
                  { color: theme === "dark" ? "#FFF" : "#000" },
                ]}
              >
                {msg.author.name}
              </Text>
              <GrayText style={styles.author} numberOfLines={1}>
                @{msg.author.screenName}
              </GrayText>
              <GrayText> · </GrayText>
              <GrayText>2023-10-15</GrayText>
            </View>
            <Text
              style={[
                styles.description,
                { color: theme === "dark" ? "#FFF" : "#000" },
              ]}
            >
             <View>
              <GrayText numberOfLines={1}
                style={[
                  styles.header,
                  { color: theme === "dark" ? "#FFF" : "#000" },
                ]}
              >
                {msg.status}
              </GrayText>
            </View>
            </Text>
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  author: {
    flexShrink: 1,
  },
  actionBar: {
    marginTop: 8,
    justifyContent: "space-between",
    marginRight: 16,
  },
  actionButton: {
    width: 18,
    height: 18,
    marginRight: 8,
  },
  gray: {
    color: "#777",
    fontSize: 13,
    paddingRight: 2,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 22,
    marginRight: 16,
    flexShrink: 0,
    marginTop: 4,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
    paddingBottom: 4,
    paddingRight: 4,
    color: "#000",
  },
  description: {
    fontSize: 14,
    color: "#000",
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
  },
  rowTop: {
    flexDirection: "row",
  },
  rowActions: {
    flexGrow: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
  },
  elemAction: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  actionText: {
    fontSize: 12,
    color: "#444",
  },
  msgContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});

export default MessageContent;
