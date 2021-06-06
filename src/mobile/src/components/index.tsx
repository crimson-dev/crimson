import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface ButtonProps {
  onPress: (event: Event) => void;
  containerStyle?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = props => {
  return (
    <TouchableNativeFeedback onPress={props.onPress}>
      <View style={[styles.buttonContainer, props.containerStyle]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'crimson',
    width: 140,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
