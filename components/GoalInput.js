import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={props.setEnteredGoal}
          value={props.enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={props.addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={() => props.setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 16,
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 10,
    width: "100%",
    padding: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
    marginHorizontal: 10,
  },
});
export default GoalInput;
