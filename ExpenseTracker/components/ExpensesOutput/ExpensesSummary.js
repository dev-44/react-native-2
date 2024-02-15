import { View, Text } from "react-native";

const ExpensesSummary = ({ periodName }) => {
  return (
    <View>
      <Text>Last 7 Days</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
