export interface Skill {
    id: number;

    name: string;

    icon: string;

    category:
        | "Frontend"
        | "Backend"
        | "Database"
        | "DevOps"
        | "Tools";
}