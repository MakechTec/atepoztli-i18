import {Translator} from "./translator/Translator";
import {LanguageDefinition} from "./types";

export const _ = (sentence: string) => globalTranslator.translate(sentence);

export const setGlobalLanguge = (lang: string) => globalTranslator.setGlobalLanguage(lang);

export const getGlobalLanguge = () => globalTranslator.getGlobalLanguage();

export const setLanguageDefinitions = (definitions: LanguageDefinition[]) => globalTranslator.setLanguageDefinitions(definitions);

const globalTranslator = new Translator();