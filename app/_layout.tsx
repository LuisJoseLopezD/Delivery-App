import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '../components/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {

    const navigation = useNavigation();

  return (
      <Stack>
        <Stack.Screen name="index" options={{
            header: () => <CustomHeader />,
        }} />
        <Stack.Screen name="(modal)/filter" options={{
            presentation: 'modal',
            headerTitle: 'Filter',
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <Ionicons name="close-outline" size={28} color={"#00CED1"} />
                </TouchableOpacity>
            )
        }}
        />
      </Stack>
  );
}
