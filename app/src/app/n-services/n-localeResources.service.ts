// _neu_generated_code__dont_modify_directly_
export class NLocaleResource {
    //DEFAULT_LANGUAGE
    defaultLcid = 'en';
    locale = {} as any;
    languages = null;

    init() {
        return Promise.all([
            this._fetchLocaleLangs(),
            this._setlangLocaleConfig(this.defaultLcid),
        ]);
    }

    /**
     * @description Reads resource object bas ed on lcid and
     * @param lcid language code
     */
    private async _setlangLocaleConfig(lcid: string) {
        const resObj = await this._getLangLocalesConfig(lcid);
        this.locale = resObj.properties;
        return this.locale;
    }

    /**
     * @description Returns value based on lcid and key
     * @param lcid language code
     * @param key key
     */
    async getVal(lcid: string, key: string) {
        const resObj = await this._getLangLocalesConfig(lcid);
        return resObj.properties?.[key];
    }

    /**
     * @description Reads and returns the resource object based on the lcid
     * @param lcid
     * @param callback
     */
    private async _getLangLocalesConfig(lcid: string) {
        const res = await fetch(`locales/locale_${lcid}.json`);
        const localeConfig = await res.json();
        return localeConfig;
    }

    /**
     * @description Returns the user selected language
     * @returns {string} user selected language code
     */
    get language(): string {
        return this.defaultLcid;
    }

    /**
     * @description set the user selected language and updates the resource object based on user selected language
     * @param lcid language code
     */
    set language(lcid: string) {
        if (this.languages?.[lcid]) {
            this.defaultLcid = lcid;
            this._setlangLocaleConfig(lcid);
        } else {
            this.locale = {};
            console.error(`locale ${lcid} is not valid`);
        }
    }

    /**
     * @description sets the configured languages in locales editor
     */
    private async _fetchLocaleLangs() {
        const res = await fetch('locales/locales.json');
        this.languages = await res.json();
    }
}
