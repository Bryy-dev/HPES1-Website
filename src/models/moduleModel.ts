export interface ModuleModel {
    id?: number;
    level?: string;
    subject: string;
    week: string;
    pdfFile?: File;
    topic?: string;
    discussion_date?: string;
    description?: string;
    pdf_url?: string;
}

export interface ModuleSearchModel {
    week?: string;
    level?: string;
    subject?: string;
}
