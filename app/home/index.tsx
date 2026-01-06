import LinearBackgroundView from "@/components/LinearBackgroundView";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Heading, Text, YStack } from "tamagui";

export default function HomeScreen() {
  const router = useRouter();

  /** HANDLERS **/
  const playBtnPressHandler = () => {
    router.navigate("/home/select-decks");
  };

  return (
    <LinearBackgroundView>
      <SafeAreaView style={styles.container}>
        <YStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          padding="$4"
          gap="$8"
        >
          <YStack alignItems="center" gap="$4" flex={1} justifyContent="center">
            <Heading
              size="$12"
              fontWeight="bold"
              color="$color12"
              textAlign="center"
              letterSpacing={-1}
            >
              5 Schnelle Fragen
            </Heading>
            <Text
              fontSize="$6"
              color="$color11"
              textAlign="center"
              maxWidth={300}
              lineHeight="$1"
            >
              Basierend auf Gemischtes Hack
            </Text>
          </YStack>

          <YStack width="100%" maxWidth={400} gap="$4" paddingBottom="$8">
            <Button
              size="$5"
              backgroundColor="$color9"
              color="$color1"
              fontWeight="600"
              fontSize="$6"
              height={60}
              borderRadius="$6"
              pressStyle={{ scale: 0.97, opacity: 0.8 }}
              onPress={playBtnPressHandler}
              animation="quick"
            >
              Starten
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
