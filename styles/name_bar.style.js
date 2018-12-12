import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  name_bar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    height: 38,
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4"
  },
  rank_block: {
    width: 78,
    alignItems: 'center',
  },
  name_block: {
    marginLeft: 6,
    width: "50%",
  },
  status_block: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  status_lights: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
