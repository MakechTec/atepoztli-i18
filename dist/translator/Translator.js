"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translator = void 0;
class Translator {
    constructor(languageDefinitions = [], _globalLanguage = "en_US") {
        this.languageDefinitions = languageDefinitions;
        this._globalLanguage = _globalLanguage;
        this.languageDefinitions = languageDefinitions;
    }
    setGlobalLanguage(language) {
        this._globalLanguage = language;
    }
    getGlobalLanguage() {
        return this._globalLanguage;
    }
    setLanguageDefinitions(languageDefinitions) {
        this.languageDefinitions = languageDefinitions;
    }
    translate(text) {
        if (this.languageDefinitions.length === 0) {
            console.warn("No set language definitions, all translations will return same value");
        }
        const definition = this.languageDefinitions.find(definition => definition.name === this._globalLanguage);
        if (typeof (definition) === "undefined" || definition === null || definition === undefined) {
            return text;
        }
        const translation = definition.translationEntries.find(translation => translation.original === text);
        if (typeof (translation) === "undefined" || translation === null || translation === undefined) {
            return text;
        }
        return translation.translated;
    }
}
exports.Translator = Translator;
