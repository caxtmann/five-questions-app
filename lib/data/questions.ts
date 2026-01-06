import {QuestionDto} from "@/models/dto/question.dto";
import {QuestionCategory} from "@/models/enums/questionCategory";

export const questions: QuestionDto[] = [
    {
        id: '1',
        question: 'Wie geht es dir heute?',
        category: QuestionCategory.HISTORY,
        metaData: {
            episode: 1,
            year: 2017,
            author: 'Felix',
            timestamp: "07:37",
            link: "https://open.spotify.com/episode/6sZoQS2B7wRxSErtbyoAaA?go=1&t=457"
        }
    }
]