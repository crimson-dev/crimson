import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from '../components';
export function Home() {
  const [count, setCount] = React.useState<number>(0);
  return (
    <View style={styles.visibleRoot}>
      <Text>Hello, world!</Text>
      {count !== 0 && <Text>You said hello {count} times.</Text>}
      <Button
        containerStyle={styles.buttonStyle}
        onPress={(_: Event) => {
          setCount(count + 1);
        }}>
        Hello.
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  visibleRoot: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 40,
  },
});
