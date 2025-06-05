export type Skill = {
    _id: string,
    title: string,
    category: string,
    description: string,
    creatorID: string,
    resources: [{ type: {type: string}, label: string, url: string}]
}