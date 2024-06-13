// _neu_generated_code__dont_modify_directly_
import { NLocaleResource } from '../src/app/n-services/n-localeResources.service';

class LocalesService {
    //This method is only to be called during app bootstrap.
    static init(): any {
        LocalesService.localesInstance = new NLocaleResource();
        return LocalesService.localesInstance.init();
    }

    private static localesInstance: NLocaleResource;

    static getLocalesInstance(): NLocaleResource {
        return LocalesService.localesInstance;
    }
}

export const localesService = LocalesService;
