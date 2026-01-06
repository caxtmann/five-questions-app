import LinearBackgroundView from "@/components/LinearBackgroundView";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Heading, Text, View, XStack, YStack} from "tamagui";
import {useAppSelector} from "@/store/hooks";
import {selectAllCategoryDecks} from "@/store/app/app.selectors";
import {useState} from "react";
import {FlatList} from "react-native";

export default function SelectDecksScreen() {

    /** STORE **/
    const decks = useAppSelector(selectAllCategoryDecks);

    /** STATE **/
    const [selectedCategoryDeckIds, setSelectedCategoryDeckIds] = useState<string[]>([]);

    /** HANDLERS **/
    const deckPressHandler = (deckId: string) => {
        if (selectedCategoryDeckIds.includes(deckId)) {
            setSelectedCategoryDeckIds(prevState => prevState.filter(id => id !== deckId));
        } else {
            setSelectedCategoryDeckIds(prevState => [...prevState, deckId]);
        }
    }

    return (
        <LinearBackgroundView>
            <SafeAreaView style={{flex: 1}}>
                <YStack flex={1} gap={12} paddingHorizontal={12}>
                    <YStack>
                        <Heading>Karten-Decks</Heading>
                        <Text>Wähle die Decks aus die du gerne verwenden möchtest</Text>
                    </YStack>
                    <FlatList
                        style={{flex: 1}}
                        data={decks}
                        keyExtractor={deck => deck.id}
                        renderItem={({item}) => (
                            <XStack
                                key={item.id}
                                onPress={() => deckPressHandler(item.id)}
                                padding={20}
                                borderWidth={2}
                                borderRadius={10}
                                borderColor={selectedCategoryDeckIds.includes(item.id) ? 'cyan' : 'rgba(255, 255, 255, 0.1)'}
                                alignItems={'center'}
                                gap={12}
                            >
                                <Text fontSize={32}>{item.icon}</Text>
                                <YStack gap={6}>
                                    <Text fontSize={18} fontWeight={'600'}>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                </YStack>
                            </XStack>
                        )}
                        ItemSeparatorComponent={() => <View style={{height: 10}}/>}
                    />
                    <Button
                        disabled={selectedCategoryDeckIds.length === 0}
                        opacity={selectedCategoryDeckIds.length === 0 ? 0.5 : 1}
                    >Spiel starten</Button>
                </YStack>
            </SafeAreaView>
        </LinearBackgroundView>
    )
}