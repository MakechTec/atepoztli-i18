import { LanguageDefinition } from "../types";
export declare class Translator {
    private languageDefinitions;
    private _globalLanguage;
    constructor(languageDefinitions?: LanguageDefinition[], _globalLanguage?: string);
    setGlobalLanguage(language: string): void;
    getGlobalLanguage(): string;
    setLanguageDefinitions(languageDefinitions: LanguageDefinition[]): void;
    translate(text: string): string;
}
