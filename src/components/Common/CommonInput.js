import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Colors, Fonts} from '../../assets';
import {Utility} from '..';

export default function CommonInput(props) {
  const [focus, setFocus] = React.useState(false);
  return (
    <View style={styles.inputview}>
      <TextInput
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
        style={[styles.input, props.customStyle]}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        maxLength={props.maxLength}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        value={props.value}
        editable={props?.editable}
        placeholderTextColor="grey"
        multiline={props.multiline}
        fetchData={props.fetchData}
        numberOfLines={props.numberOfLines}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height:12,
    // width: Utility.getPerCentage(93),
    marginVertical: 2.5,
    // marginLeft: Utility.getPerCentage(3.33),
    paddingLeft: 20,
    marginTop: 8,
    color: Colors.BLACK,
    ...Fonts.black(14, Colors.BLACK),
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    elevation: 9,
    shadowColor: Colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  inputview: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
});
