import LinearBackgroundView from "@/components/LinearBackgroundView";
import { QuestionCategory } from "@/models/enums/questionCategory";
import {
  selectAllCategoryDecks,
  selectFilteredQuestionsBySelectedDecks,
} from "@/store/app/app.selectors";
import { resetSelectedCategoryDecks } from "@/store/app/app.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Heading, Text, XStack, YStack } from "tamagui";

export default function GameScreen() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  /** STORE **/
  const filteredQuestions = useAppSelector(
    selectFilteredQuestionsBySelectedDecks
  );
  const allDecks = useAppSelector(selectAllCategoryDecks);

  /** STATE **/
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  /** EFFECTS **/
  useEffect(() => {
    console.log("filteredQuestions", filteredQuestions);
    // Wenn keine Fragen vorhanden sind, zurück zum Home Screen
    if (filteredQuestions.length === 0) {
      router.replace("/home");
    }
  }, [filteredQuestions.length, router]);

  /** HELPERS **/
  // Kategorie-Name basierend auf den Decks finden
  const getCategoryName = (category: QuestionCategory): string => {
    const deck = allDecks.find((d) => d.category === category);
    return deck?.name || category;
  };

  // Aktuelle Frage
  const currentQuestion = useMemo(() => {
    if (
      filteredQuestions.length === 0 ||
      currentQuestionIndex >= filteredQuestions.length
    ) {
      return null;
    }
    return filteredQuestions[currentQuestionIndex];
  }, [filteredQuestions, currentQuestionIndex]);

  /** HANDLERS **/
  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      // Nächste Frage
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Alle Fragen durch - zurück zum Home Screen
      dispatch(resetSelectedCategoryDecks());
      router.replace("/home");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      // Vorherige Frage
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleCloseGame = () => {
    Alert.alert(
      "Spiel verlassen?",
      "Möchtest du das Spiel wirklich verlassen? Dein Fortschritt geht verloren.",
      [
        {
          text: "Abbrechen",
          style: "cancel",
        },
        {
          text: "Verlassen",
          style: "destructive",
          onPress: () => {
            dispatch(resetSelectedCategoryDecks());
            router.replace("/home");
          },
        },
      ]
    );
  };

  // Wenn keine Frage vorhanden, nichts rendern (wird durch useEffect navigiert)
  if (!currentQuestion || filteredQuestions.length === 0) {
    return null;
  }

  const isLastQuestion = currentQuestionIndex === filteredQuestions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  return (
    <LinearBackgroundView>
      <SafeAreaView style={styles.container}>
        <YStack flex={1} padding="$4" gap="$6" justifyContent="space-between">
          {/* Header mit Close Button */}
          <XStack
            justifyContent="space-between"
            alignItems="center"
            paddingTop="$2"
          >
            <XStack flex={1} />
            {/* Fortschrittsanzeige */}
            <XStack flex={1} justifyContent="center">
              <Text fontSize="$4" color="$color11">
                Frage {currentQuestionIndex + 1} von {filteredQuestions.length}
              </Text>
            </XStack>
            {/* Close Button */}
            <XStack flex={1} justifyContent="flex-end">
              <Button
                size="$3"
                circular
                backgroundColor="$color5"
                color="$color12"
                pressStyle={{ scale: 0.95, opacity: 0.8 }}
                onPress={handleCloseGame}
                animation="quick"
                width={36}
                height={36}
              >
                ✕
              </Button>
            </XStack>
          </XStack>

          {/* Frage und Kategorie */}
          <YStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            gap="$4"
            paddingHorizontal="$4"
          >
            {/* Kategorie Badge */}
            <XStack
              backgroundColor="$color5"
              paddingHorizontal="$3"
              paddingVertical="$2"
              borderRadius="$4"
            >
              <Text fontSize="$3" color="$color11" fontWeight="500">
                {getCategoryName(currentQuestion.category)}
              </Text>
            </XStack>

            {/* Frage */}
            <Heading
              fontSize={32}
              lineHeight={40}
              letterSpacing={0}
              fontWeight="bold"
              color="$color12"
              textAlign="center"
            >
              {currentQuestion.question}
            </Heading>
          </YStack>

          {/* Navigation Buttons */}
          <YStack paddingBottom="$4" gap="$3">
            {!isFirstQuestion && (
              <Button
                size="$5"
                backgroundColor="$color5"
                color="$color12"
                fontWeight="600"
                fontSize="$5"
                height={50}
                borderRadius="$6"
                pressStyle={{ scale: 0.97, opacity: 0.8 }}
                onPress={handlePreviousQuestion}
                animation="quick"
              >
                Zurück
              </Button>
            )}
            <Button
              size="$5"
              backgroundColor="$color9"
              color="$color1"
              fontWeight="600"
              fontSize="$6"
              height={60}
              borderRadius="$6"
              pressStyle={{ scale: 0.97, opacity: 0.8 }}
              onPress={handleNextQuestion}
              animation="quick"
            >
              {isLastQuestion ? "Beenden" : "Weiter"}
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
});
