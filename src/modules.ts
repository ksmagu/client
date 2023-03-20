export interface AnswersArray {
    id: number;
    answer: string;
    correct: number;
}
export interface Answer {
    question_id: number;
    answer_id: number;
    answer: string;
}
export interface Answers {
    question_id: number;
    question: string;
    answers: AnswersArray[];
    users_answer: Answer;
    
}
