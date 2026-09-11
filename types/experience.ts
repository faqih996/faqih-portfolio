export interface Experience {
    id: number;

    company: string;

    position: string;

    location: string;

    employmentType:
        | "Full Time"
        | "Part Time"
        | "Freelance"
        | "Internship";

    startDate: string;

    endDate?: string;

    current: boolean;

    description: string;

    technologies: string[];

    logo: string;
}