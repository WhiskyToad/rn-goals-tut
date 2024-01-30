import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal"
          style={styles.textInput}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 5,
  },
});
