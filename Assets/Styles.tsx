import { StyleSheet, Dimensions } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 5
  },
  row: {
    flexDirection: "row",
    margin: 15
  },
  caption: {
    fontFamily: "monospace",
    fontSize: 24,
    fontWeight: "bold"
  },
  label: {
    fontFamily: "monospace",
    fontSize: 24,
    marginTop: 8
  },
  lineHeader: {
    flex: 1,
    height: 1,
    backgroundColor: '#CCC',
    top: 25,
    marginLeft: 6
  },
  center:{
    alignSelf:'center'
  }
});
export const home = StyleSheet.create({
  logo: {
    width: Dimensions.get("window").width * 0.8,
    maxWidth: 400,
    height: Dimensions.get("window").height * 0.4,
    maxHeight: 300,
    marginBottom: 50
  }
});
export const controls = StyleSheet.create({
  centeredTextInput: {
    borderStyle: 'solid',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.75,
    textAlign: 'center',
    height: Dimensions.get('window').height * 0.05
  },
  
});
export const secondary = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: Dimensions.get('window').height * 0.075
  },
  header:{
    alignItems:'center', 
    flexDirection:'row', 
    alignSelf:'center'
  }
});
export const restaurant = StyleSheet.create({
  businessPic: {
    width: Dimensions.get("window").width * 0.8,
    maxWidth: 400,
    height: Dimensions.get("window").height * 0.4,
    maxHeight: 300,
    borderRadius: 25,
    margin: 10
  },
  businessName: {
    fontSize: 24,
    fontFamily: "monospace",
    fontWeight: "bold"
  },
  info: {
    fontFamily: "monospace",
    fontSize: 16
  }
});

export const navigationButtons = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D1659B",
    padding: 10,
    borderRadius: 25,
    minWidth: 5,
    margin: 5,
    width: Dimensions.get("window").width * 0.425

  },
  buttonText: {
    color: "#ffffff"
  }
});

export const selectionButtons = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D1659B",
    borderRadius: 10,
    padding: 10,
    width: 40,
    margin: 2,
    flex: 1
  },
  buttonText: {
    color: "#ffffff"
  },
  selected:{
    backgroundColor: "#ffffff"
  }
});