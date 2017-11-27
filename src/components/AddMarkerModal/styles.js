import { StyleSheet } from 'react-native';

import { colors, measures } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparentNight,
  },

  addMarker: {
    backgroundColor: colors.daylight,
    marginHorizontal: 20,
    borderRadius: measures.round,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
  },

  input: {
    alignSelf: 'stretch',
    borderColor: colors.light,
    borderWidth: 1,
    borderRadius: measures.round,
    marginVertical: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
  },

  button: {
    flex: 1,
    height: 42,
    borderRadius: measures.round,
    borderColor: colors.light,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  cancelButton: {
    marginRight: 15,
    backgroundColor: colors.shadow,
  },

  confirmButton: {
    backgroundColor: colors.success,
  },

  buttonText: {
    color: colors.daylight,
    fontWeight: 'bold',
  },
});

export default styles;
