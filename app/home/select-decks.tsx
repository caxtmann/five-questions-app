import LinearBackgroundView from "@/components/LinearBackgroundView";
import {SafeAreaView} from "react-native-safe-area-context";
import {Heading} from "tamagui";

export default function SelectDecksScreen() {

    return (
        <LinearBackgroundView>
            <SafeAreaView>
                <Heading>SelectDecks</Heading>
            </SafeAreaView>
        </LinearBackgroundView>
    )
}