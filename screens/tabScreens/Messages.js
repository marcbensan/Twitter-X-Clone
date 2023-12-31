import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import Message from "../../components/Message";
import { messages } from "../../data/messages";


export default function Notifications() {
  return (
      <FlatList style={{ flex: 1 }}
        data={messages.slice(0, 9)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Message msg={item} />;
        }}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});