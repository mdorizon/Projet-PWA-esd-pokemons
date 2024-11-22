import { StyleSheet } from "react-native";

const pokemonFightStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  pokemonContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 4,
  },
  pokemonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default pokemonFightStyle