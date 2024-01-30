import { Text, View, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem} key={props.index}>
      <Pressable
        android_ripple={{ color: "purple" }}
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={() => props.deleteGoalHandler(props.index)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 10,
    backgroundColor: "#5e0acc",
    borderColor: "black",
    borderWidth: 1,
  },
  goalText: {
    fontSize: 18,
    padding: 10,
    color: "white",
  },
});

export default GoalItem;
