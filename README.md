## USAGE ##

    npm i @makechtec/i18

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