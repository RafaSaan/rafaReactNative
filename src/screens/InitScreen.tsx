import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../routes/types";


  

type PropsInit = NativeStackScreenProps<RootStackParamList, 'Init'>;

const InitScreen = ({navigation}: PropsInit) => {
  return (
    <View style={styles.viewContainer}>
      <Text
        onPress={() =>
          navigation.navigate('Home', {name: 'Jane'})
        }
        style={styles.buttonHome}
      >
        <Image source={require('../assets/images/logoMaskPrehispanic.png')} style={{width: 80, height: 80}}/>
      </Text>
    </View>
  );
  };


  const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    buttonHome: {
      height: 150,
    }
 })


/* CSS */
// .button-32 {
//   background-color: #fff000;
//   border-radius: 12px;
//   color: #000;
//   cursor: pointer;
//   font-weight: bold;
//   padding: 10px 15px;
//   text-align: center;
//   transition: 200ms;
//   width: 100%;
//   box-sizing: border-box;
//   border: 0;
//   font-size: 16px;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

export default InitScreen