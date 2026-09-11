export interface Certificate {
    id: number;

    title: string;

    issuer: string;

    issuedAt: string;

    credentialUrl?: string;

    thumbnail?: string;
}