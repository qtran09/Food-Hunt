import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { navigationButtons, selectionButtons } from './Styles';

export const NavigationButton = ({ title, onPress, style }: any) => {

  return (
    <TouchableOpacity
      style={[navigationButtons.button, style]}
      onPress={onPress}>
      <Text style={navigationButtons.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}


export const SelectionButton = ({ title, onPress }: any) => {
  return (
    <TouchableOpacity
      style={selectionButtons.button}
      onPress={onPress}>
      <Text style={selectionButtons.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
