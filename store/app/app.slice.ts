import {QuestionDto} from "@/models/dto/question.dto";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {questions} from "@/lib/data/questions";
import {CategoryDeckDto} from "@/models/dto/categoryDeck.dto";
import {categoryDecks} from "@/lib/data/categoryDecks";

interface AppState {
    questions: QuestionDto[];
    categoryDecks: CategoryDeckDto[];
    selectedCategoryDeckIds: string[];
}

const initialState: AppState = {
    questions: questions,
    categoryDecks: categoryDecks,
    selectedCategoryDeckIds: []
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSelectedCategoryDecks(state, action: PayloadAction<string[]>) {
            state.selectedCategoryDeckIds = action.payload;
        },
        resetSelectedCategoryDecks(state) {
            state.selectedCategoryDeckIds = [];
        }
    },
    extraReducers: builder => {
    },
});

export const {setSelectedCategoryDecks, resetSelectedCategoryDecks} = appSlice.actions;
export default appSlice.reducer;