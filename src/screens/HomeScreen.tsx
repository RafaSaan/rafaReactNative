import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { RootStackParamList } from "../routes/types";


  

type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({navigation}: PropsHome) => {
    return (
      <Button
        title="Go to Jane's profile from component ind"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
    );
  };

export default HomeScreen