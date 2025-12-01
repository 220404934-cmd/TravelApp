import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { place, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to {place}!</Text>
      <Text style={styles.text}>Rating: {rating} stars</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  title: {
    fontSize: 26,
    fontWeight: "bold"
  },
  text: {
    fontSize: 20,
  },
});