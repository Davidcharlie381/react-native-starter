import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily: "SpaceMono"}} className="text-2xl">Edit my app/index.tsx to edit this screen.</Text>
    </View>
  );
}
