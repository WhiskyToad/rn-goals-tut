import { Text, View, StyleSheet } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem} key={props.index}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 1,
  },
  goalText: {
    fontSize: 18,
    color: "white",
  },
});

export default GoalItem;
