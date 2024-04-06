import {LanguageDefinition, TranslationEntry} from "../types";

export class Translator {

  constructor(private languageDefinitions: LanguageDefinition[] = [], private _globalLanguage: string = "en_US") {
    this.languageDefinitions = languageDefinitions;
  }

  public setGlobalLanguage(language: string): void {
    this._globalLanguage = language;
  }

  public getGlobalLanguage(): string {
    return this._globalLanguage;
  }

  public setLanguageDefinitions(languageDefinitions: LanguageDefinition[]){
    this.languageDefinitions = languageDefinitions;
  }

  public translate(text: string): string {

    if(this.languageDefinitions.length === 0){
      console.warn("No set language definitions, all translations will return same value");
    }

    const definition: LanguageDefinition | undefined = this.languageDefinitions.find(definition => definition.name === this._globalLanguage);

    if (typeof (definition) === "undefined" || definition === null || definition === undefined) {
      return text;
    }

    const translation: TranslationEntry | undefined = definition.translationEntries.find(translation => translation.original === text);

    if (typeof (translation) === "undefined" || translation === null || translation === undefined) {
      return text;
    }

    return translation.translated;

  }

}
