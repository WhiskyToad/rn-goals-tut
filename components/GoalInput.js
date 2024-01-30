import { Button, TextInput, View } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your course goal"
        style={styles.textInput}
        onChangeText={props.setEnteredGoal}
        value={props.enteredGoal}
      />
      <Button title="ADD" onPress={props.addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: "70%",
  },
});
export default GoalInput;
