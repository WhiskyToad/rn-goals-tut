import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoalHandler = () => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setEnteredGoal("");
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput
        enteredGoal={enteredGoal}
        setEnteredGoal={setEnteredGoal}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem index={itemData.index} text={itemData.item} />;
          }}
        />
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
});
