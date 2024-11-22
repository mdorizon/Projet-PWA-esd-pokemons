import { StyleSheet } from "react-native";

const pokemonTypeCardStyles = StyleSheet.create({
  card: {
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: 150, // Adjust size as needed
    alignItems: "center",
  },
  cardHeader: {
    borderBottomWidth: 2,
    width: "100%",
    paddingBottom: 8,
    marginBottom: 8,
  },
  typeName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  typeImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
});

export default pokemonTypeCardStyles;