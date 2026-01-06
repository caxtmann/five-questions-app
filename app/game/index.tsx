import LinearBackgroundView from "@/components/LinearBackgroundView";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Heading} from "tamagui";
import {useRouter} from "expo-router";

export default function GameScreen() {
    const router = useRouter();

    /** HANDLERS **/

    return (
        <LinearBackgroundView>
            <SafeAreaView>
                <Heading>Game</Heading>
            </SafeAreaView>
        </LinearBackgroundView>
    )
}