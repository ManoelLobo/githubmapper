import { StyleSheet } from 'react-native';
import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  marker: {
    flex: 1,
    backgroundColor: colors.daylight,
    borderWidth: 5,
    borderColor: colors.daylight,
    borderRadius: measures.avatar / 2,
  },

  avatar: {
    width: measures.avatar,
    height: measures.avatar,
    borderRadius: measures.avatar / 2,
  },
});

export default styles;
