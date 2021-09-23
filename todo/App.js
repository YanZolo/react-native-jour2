import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ListModal from './component/ListModal';

export default function App(props) {
  const [visible, setVisible] = useState(false)

 

  return (
    <>
      <View style={styles.container}>


        {
          !visible ?
            <Button
              title="+ Add a list"
              onPress={() => setVisible(true)}
            />
            :
            <ListModal
              visible={visible}
              onClose={()=>setVisible(false)}
            />

        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});