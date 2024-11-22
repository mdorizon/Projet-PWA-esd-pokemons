import { StyleSheet } from "react-native";

const pokemonListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f9",
    paddingVertical: 16,
  },
  horizontalList: {
    gap: 32,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    color: "#333",
  },
});

export default pokemonListStyles