import {QuestionCategory} from "@/models/enums/questionCategory";

export interface CategoryDeckDto {
    id: string;
    category: QuestionCategory;
    name: string;
    description: string;
    icon: string;
    premium: boolean;
}