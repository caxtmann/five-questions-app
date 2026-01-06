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
    {
        id: "3",
        category: QuestionCategory.LIFEMOMENTS,
        name: "Lebensmomente",
        description: "Fragen zu besonderen Momenten im Leben",
        icon: "⭐",
        premium: false
    },
    {
        id: "4",
        category: QuestionCategory.PERSONAL,
        name: "Persönlich",
        description: "Persönliche Fragen über dich",
        icon: "👤",
        premium: false
    },
    {
        id: "5",
        category: QuestionCategory.DECISIONS,
        name: "Entscheidungen",
        description: "Fragen zu Entscheidungen und Wahlmöglichkeiten",
        icon: "⚖️",
        premium: false
    },
    {
        id: "6",
        category: QuestionCategory.HYPOTHETICAL,
        name: "Hypothetisch",
        description: "Was-wäre-wenn Fragen",
        icon: "🤔",
        premium: false
    },
    {
        id: "7",
        category: QuestionCategory.DAILY_LIFE,
        name: "Alltag",
        description: "Fragen zum täglichen Leben",
        icon: "🌅",
        premium: false
    },
    {
        id: "8",
        category: QuestionCategory.PHILOSOPHICAL,
        name: "Philosophisch",
        description: "Tiefgründige philosophische Fragen",
        icon: "🧘",
        premium: true
    },
    {
        id: "9",
        category: QuestionCategory.ABSURD,
        name: "Absurd",
        description: "Verrückte und absurde Fragen",
        icon: "🤪",
        premium: false
    },
    {
        id: "10",
        category: QuestionCategory.RELATIONSHIPS,
        name: "Beziehungen",
        description: "Fragen zu Beziehungen und Freundschaften",
        icon: "💕",
        premium: false
    },
    {
        id: "11",
        category: QuestionCategory.JOB,
        name: "Beruf",
        description: "Fragen rund um Arbeit und Karriere",
        icon: "💼",
        premium: false
    },
    {
        id: "12",
        category: QuestionCategory.FOOD_DRINK,
        name: "Essen & Trinken",
        description: "Fragen zu Essen, Trinken und Genuss",
        icon: "🍕",
        premium: false
    },
]