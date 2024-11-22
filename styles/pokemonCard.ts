import { StyleSheet } from "react-native";

const pokemonCardStyles = StyleSheet.create({
  card: {
    borderWidth: 3,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  horizontalCard: {
    borderWidth: 3,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    width: 250,
    height: 250,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  pokemonName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  pokedexId: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
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
    color: "#fff",
  },
  statsContainer: {
    borderTopWidth: 2,
    paddingTop: 8,
    marginTop: 8,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  statsText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
})

export default pokemonCardStyles;
