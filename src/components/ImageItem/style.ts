import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: 412,
    height: 169,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 35,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: 'white',
    position: 'absolute',
  },
});

export default styles;
