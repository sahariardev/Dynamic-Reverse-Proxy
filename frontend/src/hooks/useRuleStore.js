import {create} from 'zustand';

export const useRuleStore = create((set) => ({
    selectedRule: {
        featureName: 'asdas',
        rules: [
            {
                url: '',
                host: ''
            }
        ]
    },
    updateSelectedRule: (rule) => set({selectedRule: rule}),
    setFeatureName: (name) => set((oldRule) => {
        return {
            selectedRule : {
                featureName: name,
                rules: [...oldRule.selectedRule.rules]
            }
        }
    }),
    addNewRule: () => set((oldRule) => {
        return {
            selectedRule : {
                featureName: oldRule.selectedRule.featureName,
                rules: [...oldRule.selectedRule.rules, {url: '', host: ''}]
            }
        }
    }),

    removeRule: (index) => set((oldRule) => {
        let data = [...oldRule.selectedRule.rules];
        data.splice(index, 1);
        return {
            selectedRule : {
                featureName: oldRule.selectedRule.featureName,
                rules: data
            }
        }
    }),

    setValueForRule: (index, event) => set((oldRule) => {
        let data = [...oldRule.selectedRule.rules];
        data[index][event.target.name] = event.target.value;
        return {
            selectedRule: {
                featureName: oldRule.selectedRule.featureName,
                rules: data
            }
        }
    }),

    setDefaultForRule: () => set({
        selectedRule: {
            featureName: '',
            rules: [
                {
                    url: '',
                    host: ''
                }
            ]
        }
    })
}));