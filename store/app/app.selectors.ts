import {RootState} from "@/store/store";

export const selectAllQuestions = (state: RootState) => state.app.questions;