import {Button as LibraryButton} from 'react-native-paper';
import {GestureResponderEvent, StyleSheet} from 'react-native';

type ButtonProps = {
  title: string;
  buttonStyle?: object;
  titleStyle?: object;
  handlePress?: (event: GestureResponderEvent) => void;
};

const Button = ({
  title,
  buttonStyle = {},
  handlePress,
  titleStyle = {},
}: ButtonProps) => {
  return (
    <LibraryButton
      onPress={handlePress}
      style={[buttonStyle, styles.button]}
      labelStyle={titleStyle}>
      {title}
    </LibraryButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default Button;
