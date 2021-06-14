import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 20,
  },
  bodyWrapper: {
    padding: 16,
  },
  mailSubjectRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mailSubjectText: {color: '#323232', fontSize: 17, width: '83%'},
});

export default styles;
