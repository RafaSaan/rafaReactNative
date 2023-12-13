import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { RootStackParamList } from "../routes/types";

type PropsProfile = NativeStackScreenProps<RootStackParamList, 'Profile'>;


const ProfileScreen = ({route}: PropsProfile) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

export default ProfileScreen