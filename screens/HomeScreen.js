import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Destination</Text>

      <Button
        title="Go to Paris"
        onPress={() => navigation.navigate('Details', { place: 'Paris', rating: 5 })}
      />

      <Button
        title="Go to London"
        onPress={() => navigation.navigate('Details', { place: 'London', rating: 4 })}
      />
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
    fontSize: 22,
  },
});