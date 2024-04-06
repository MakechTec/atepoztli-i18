export type LanguageDefinition = {
  name: string;
  translationEntries: TranslationEntry[];
}

export type TranslationEntry = {
  original: string;
  translated: string;
}
