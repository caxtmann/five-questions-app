import LinearBackgroundView from "@/components/LinearBackgroundView";
import {SafeAreaView} from "react-native-safe-area-context";
import {Heading} from "tamagui";

export default function HomeScreen() {

    return (
        <LinearBackgroundView>
            <SafeAreaView>
                <Heading>Home</Heading>
            </SafeAreaView>
        </LinearBackgroundView>
    )
}