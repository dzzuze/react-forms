import { create } from 'zustand';

interface FormData {
    name: string;
    age: number;
    email: string;
    gender: 'male' | 'female';
    termsAccepted: boolean;
}

interface FormStore {
    submissions: FormData[];
    countries: string[];
    addSubmission: (data: FormData) => void;
}

export const useFormStore = create<FormStore>()((set) => ({
    submissions: [],
    countries: ['USA', 'Canada', 'Germany', 'France', 'Japan'],
    addSubmission: (data) => set((state => ({
        submissions: [data, ...state.submissions]
    }))),
}));