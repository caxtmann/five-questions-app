import {QuestionCategory} from "@/models/enums/questionCategory";

export interface QuestionDto {
    id: string;
    question: string;

    category: QuestionCategory;

    metaData: {
        episode: number;
        year: number;
        author: string;
        timestamp: string;
        link: string;
    }
}