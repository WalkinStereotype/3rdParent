export interface Skill {
    _id?: string;
    title: string;
    category: string;
    description: string | undefined;
    creatorID: string | undefined;
    resources: [{ 
        type: string;
        label: string | undefined;
        url: string;
    }]
}