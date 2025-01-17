import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet , GestureResponderEvent} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: ((event: GestureResponderEvent) => void);
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, color = '#248A50' }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: isPressed ? '#1E6E43' : color }, 
        isPressed && styles.pressedShadow,
      ]}
      onPress={onPress}
      activeOpacity={0.8} 
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)} 
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pressedShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
});

export default CustomButton;