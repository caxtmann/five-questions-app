import {QuestionDto} from "@/models/dto/question.dto";
import {createSlice} from "@reduxjs/toolkit";
import {questions} from "@/lib/data/questions";

interface AppState {
    questions: QuestionDto[];
}

const initialState: AppState = {
    questions: questions,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {},
    extraReducers: builder => {
    },
});

export default appSlice.reducer;