import {create} from 'zustand';

export const useRuleStore = create((set) => ({
    selectedRule: null,
    updateSelectedRule: (rule) => set({selectedRule: rule})
}));