import { StyleSheet, Dimensions } from 'react-native';

let screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  img_bg_wrap: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#BD5A5A',
    paddingLeft: 6,
    paddingRight: 6,
  },
  logHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 40,
    marginTop: Expo.Constants.statusBarHeight,
    backgroundColor: '#BD5A5A',
    paddingLeft: 6,
    paddingRight: 6,
  },
  body: {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
  },
  body_block: {
    flex: 1,
    backgroundColor: 'rgba(228,225,225,.9)',
    borderColor: 'rgba(156,156,156,.2)',
    borderWidth: 2,
    marginTop: 6,
    marginBottom: 6
  },
  body_block_header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6,
  },
  class_status_lights: {
    flexDirection: 'row',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body_block_body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.70)',
    margin: 0,
  },
  body_block_status_body_top: {
    flexDirection: 'row',
    height: 100,
    padding: 6,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4'
  },
  body_block_status_body_bottom: {
    width: '100%',
    height: 600,
    padding: 0
  },
  nav_link_line: {
    height: 60,
    padding: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#C4C4C4',
  },
  login_screen_wrap: {
    height: ( screenHeight - Expo.Constants.statusBarHeight ),
    alignItems: 'center',
  },
  login_block: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  login_title: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    marginTop: 10
  },
  login_img: {
    height: 200,
    width: 340,
    opacity: .55,
  },
  login_form_wrap: {
    width: '100%',
  }
});
