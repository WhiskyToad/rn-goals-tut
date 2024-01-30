import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable onPress={() => props.deleteGoalHandler(props.index)}>
      <View style={styles.goalItem} key={props.index}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
