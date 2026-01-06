import {RootState} from "@/store/store";

export const selectAllQuestions = (state: RootState) => state.app.questions;
export const selectAllCategoryDecks = (state: RootState) => state.app.categoryDecks;