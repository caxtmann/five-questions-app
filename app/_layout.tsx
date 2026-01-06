import {DarkTheme, ThemeProvider} from '@react-navigation/native';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';

import {useColorScheme} from '@/hooks/use-color-scheme';
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {TamaguiProvider} from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {BottomSheetModalProvider} from "@gorhom/bottom-sheet";


export default function RootLayout() {
    const colorScheme = useColorScheme();

    return (
        <Provider store={store}>
            <GestureHandlerRootView style={{flex: 1}}>
                <TamaguiProvider config={tamaguiConfig} defaultTheme={'dark'}>
                    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
                        <BottomSheetModalProvider>
                            <Stack>
                                <Stack.Screen name="index" options={{headerShown: false}}/>
                                <Stack.Screen name="onboarding" options={{headerShown: false}}/>
                                <Stack.Screen name="home" options={{headerShown: false}}/>
                                <Stack.Screen name="game" options={{headerShown: false}}/>
                            </Stack>
                            <StatusBar style="auto"/>
                        </BottomSheetModalProvider>
                    </ThemeProvider>
                </TamaguiProvider>
            </GestureHandlerRootView>
        </Provider>
    );
}
