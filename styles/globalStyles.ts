import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 80,
  },
  container: {
    display: 'flex',
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: 'center',
    height: '100%',
  },
  content: {
    alignItems: 'center',
  },
  scrollContent: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
  },
  HorizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  logo: {
    width: 50,
    height: 50
  },
  logoTitle: {
    height: 60,
    width: '80%',
    objectFit: 'contain'
  },
  searchInput: {

  },
  mt: {
    marginTop: 40,
  },
  h1: {
    fontSize: 28,
    fontWeight: '600',
    color: '#3c5aa6'
  }
});

export default globalStyles