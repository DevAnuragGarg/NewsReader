import { Pressable, Text } from 'react-native';
import { styles } from './styles';
import { UIButtonProps } from './props.types';

export const UIButton: React.FC<UIButtonProps> = ({
  text,
  buttonStyle,
  buttonTextStyle,
  onClick,
  disabled,
}) => {
  return (
    <Pressable
      style={[styles.button, buttonStyle]}
      onPress={onClick}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, buttonTextStyle]}>{text}</Text>
    </Pressable>
  );
};
