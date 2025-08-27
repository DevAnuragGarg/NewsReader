import { TextStyle, ViewStyle } from 'react-native';

export type UIButtonProps = {
  text: string;
  onClick: () => void;
  buttonTextStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  disabled?: boolean;
};
