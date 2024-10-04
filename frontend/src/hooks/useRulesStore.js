import {create} from 'zustand';

export const useRulesStore = create((set) => ({
    rules: [],
    updateRules: (rules) => set({rules: [...rules]})
}));