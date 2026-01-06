import {CategoryDeckDto} from "@/models/dto/categoryDeck.dto";
import {QuestionCategory} from "@/models/enums/questionCategory";

export const categoryDecks: CategoryDeckDto[] = [
    {
        id: "1",
        category: QuestionCategory.HISTORY,
        name: "Geschichte",
        description: "Fragen rund um Geschichte",
        icon: "🏴‍☠️",
        premium: false
    },
    {
        id: "2",
        category: QuestionCategory.SCIENCE,
        name: "Wissenschaft",
        description: "Fragen rund um Wissenschaft",
        icon: "🔬",
        premium: true
    },
]