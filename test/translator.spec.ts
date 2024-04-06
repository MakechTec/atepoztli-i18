
import {LanguageDefinition} from "../src/types";
import {_, setGlobalLanguge, setLanguageDefinitions} from "../src/globals";

test("initial translator test", async () => {

    const translations: LanguageDefinition[]  = [
        {
            name: "es_MX",
            translationEntries: [
                {
                    original: "Registered users",
                    translated: "Usuarios registrados"
                }
            ]
        }
    ];

    setGlobalLanguge("es_MX");
    setLanguageDefinitions(translations);

    const translated: string = _("Registered users");

    expect(translated).toBe("Usuarios registrados");

});

test("test not existing language", async () => {

    const translations: LanguageDefinition[]  = [
        {
            name: "es_MX",
            translationEntries: [
                {
                    original: "Registered users",
                    translated: "Usuarios registrados"
                }
            ]
        }
    ];

    setGlobalLanguge("fr_FR");
    setLanguageDefinitions(translations);

    const translated: string = _("Registered users");

    expect(translated).toBe("Registered users");

});