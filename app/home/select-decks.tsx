import LinearBackgroundView from "@/components/LinearBackgroundView";
import { selectAllCategoryDecks } from "@/store/app/app.selectors";
import { setSelectedCategoryDecks } from "@/store/app/app.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUserDto } from "@/store/user/user.selectors";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Card,
  Circle,
  Heading,
  Text,
  View,
  XStack,
  YStack,
} from "tamagui";

export default function SelectDecksScreen() {
  const dispatch = useAppDispatch();

  /** STORE **/
  const decks = useAppSelector(selectAllCategoryDecks);
  const userDto = useAppSelector(selectUserDto);

  /** STATE **/
  const [selectedCategoryDeckIds, setSelectedCategoryDeckIds] = useState<
    string[]
  >([]);

  /** HANDLERS **/
  const deckPressHandler = (deckId: string, isPremium: boolean) => {
    // Prevent selection if deck is premium and user is not premium
    if (isPremium && !userDto?.isPremium) {
      return;
    }

    if (selectedCategoryDeckIds.includes(deckId)) {
      setSelectedCategoryDeckIds((prevState) =>
        prevState.filter((id) => id !== deckId)
      );
    } else {
      setSelectedCategoryDeckIds((prevState) => [...prevState, deckId]);
    }
  };

  const startGameHandler = () => {
    dispatch(setSelectedCategoryDecks(selectedCategoryDeckIds));
    router.replace("/game");
  };

  const isSelected = (deckId: string) =>
    selectedCategoryDeckIds.includes(deckId);

  const isLocked = (isPremium: boolean) => isPremium && !userDto?.isPremium;

  return (
    <LinearBackgroundView>
      <SafeAreaView style={styles.container}>
        <YStack flex={1} padding="$4" gap="$4">
          <YStack gap="$2" paddingBottom="$2">
            <Heading size="$9" fontWeight="bold" color="$color12">
              Karten-Decks
            </Heading>
            <Text fontSize="$5" color="$color11">
              Wähle die Decks aus, die du verwenden möchtest
            </Text>
          </YStack>

          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContent}
            data={decks}
            keyExtractor={(deck) => deck.id}
            renderItem={({ item }) => {
              const selected = isSelected(item.id);
              const locked = isLocked(item.premium);
              return (
                <Card
                  onPress={() => deckPressHandler(item.id, item.premium)}
                  backgroundColor={selected ? "$color5" : "$color3"}
                  borderWidth={2}
                  borderColor={selected ? "$color9" : "$color5"}
                  borderRadius="$4"
                  padding="$4"
                  animation="quick"
                  pressStyle={locked ? {} : { scale: 0.98, opacity: 0.9 }}
                  cursor={locked ? "not-allowed" : "pointer"}
                  opacity={locked ? 0.6 : 1}
                  disabled={locked}
                >
                  <XStack alignItems="center" gap="$4" flex={1}>
                    <YStack
                      backgroundColor={selected ? "$color9" : "$color5"}
                      borderRadius="$6"
                      width={60}
                      height={60}
                      alignItems="center"
                      justifyContent="center"
                      opacity={locked ? 0.7 : 1}
                    >
                      <Text fontSize={32}>{item.icon}</Text>
                    </YStack>

                    <YStack flex={1} gap="$1">
                      <XStack alignItems="center" gap="$2">
                        <Text
                          fontSize="$6"
                          fontWeight="600"
                          color="$color12"
                          flex={1}
                        >
                          {item.name}
                        </Text>
                        {locked ? (
                          <Circle
                            size={24}
                            backgroundColor="$color8"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              color="$color12"
                              fontSize="$3"
                              fontWeight="bold"
                            >
                              🔒
                            </Text>
                          </Circle>
                        ) : selected ? (
                          <Circle
                            size={24}
                            backgroundColor="$color9"
                            alignItems="center"
                            justifyContent="center"
                          >
                            <Text
                              color="$color1"
                              fontSize="$3"
                              fontWeight="bold"
                            >
                              ✓
                            </Text>
                          </Circle>
                        ) : null}
                      </XStack>
                      <Text fontSize="$4" color="$color11" numberOfLines={2}>
                        {item.description}
                      </Text>
                    </YStack>
                  </XStack>
                </Card>
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            showsVerticalScrollIndicator={false}
          />

          <YStack paddingTop="$2">
            <Button
              size="$5"
              backgroundColor="$color9"
              color="$color1"
              fontWeight="600"
              fontSize="$6"
              height={60}
              borderRadius="$6"
              pressStyle={{ scale: 0.97, opacity: 0.8 }}
              onPress={startGameHandler}
              disabled={selectedCategoryDeckIds.length === 0}
              opacity={selectedCategoryDeckIds.length === 0 ? 0.5 : 1}
              animation="quick"
            >
              {selectedCategoryDeckIds.length > 0
                ? `Spiel starten (${selectedCategoryDeckIds.length})`
                : "Wähle mindestens ein Deck"}
            </Button>
          </YStack>
        </YStack>
      </SafeAreaView>
    </LinearBackgroundView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 8,
  },
  separator: {
    height: 12,
  },
});
