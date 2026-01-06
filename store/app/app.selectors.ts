import { QuestionDto } from "@/models/dto/question.dto";
import { QuestionCategory } from "@/models/enums/questionCategory";
import { RootState } from "@/store/store";

export const selectAllQuestions = (state: RootState) => state.app.questions;
export const selectAllCategoryDecks = (state: RootState) =>
  state.app.categoryDecks;
export const selectSelectedCategoryDeckIds = (state: RootState) =>
  state.app.selectedCategoryDeckIds;

export const selectFilteredQuestionsBySelectedDecks = (
  state: RootState
): QuestionDto[] => {
  const selectedDeckIds = state.app.selectedCategoryDeckIds;
  const allDecks = state.app.categoryDecks;
  const allQuestions = state.app.questions;

  // Wenn keine Decks ausgewählt sind, gib leeres Array zurück
  if (selectedDeckIds.length === 0) {
    return [];
  }

  // Finde die ausgewählten Decks
  const selectedDecks = allDecks.filter((deck) =>
    selectedDeckIds.includes(deck.id)
  );

  // Extrahiere die Kategorien der ausgewählten Decks
  const selectedCategories = new Set<QuestionCategory>(
    selectedDecks.map((deck) => deck.category)
  );

  console.log("selectedCategories", selectedCategories);

  // Filtere Fragen nach den Kategorien der ausgewählten Decks
  const filteredQuestions = allQuestions.filter((question) =>
    selectedCategories.has(question.category)
  );

  console.log("filteredQuestions", filteredQuestions);

  return filteredQuestions;
};
