export interface User {
    id: string;
    username: string;
    name: string | undefined;
    email: string;
    hashedPW: string;
}