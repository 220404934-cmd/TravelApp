import { View, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {
  const { place, rating } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Welcome to {place}!
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Rating: {rating} ⭐
      </Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}