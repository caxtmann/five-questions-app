import LinearBackgroundView from "@/components/LinearBackgroundView";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Heading} from "tamagui";
import {useRouter} from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    /** HANDLERS **/
    const playBtnPressHandler = () => {
        router.navigate('/home/select-decks');
    }

    return (
        <LinearBackgroundView>
            <SafeAreaView>
                <Heading>Home</Heading>
                <Button onPress={playBtnPressHandler}>Spielen</Button>
            </SafeAreaView>
        </LinearBackgroundView>
    )
}