import { StyleSheet } from "react-native";

const pokemonCardStyles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#f6d55c",
    borderWidth: 3,
    borderColor: "#ed553b",
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3caea3",
  },
  pokedexId: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#20639b",
  },
  pokemonImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginVertical: 8,
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  typeBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#20639b",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 4,
  },
  typeImage: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  typeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#f6d55c",
  },
  statsContainer: {
    borderTopWidth: 2,
    borderTopColor: "#ed553b",
    paddingTop: 8,
    marginTop: 8,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#20639b",
    marginBottom: 4,
  },
  statsText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
});

export default pokemonCardStyles