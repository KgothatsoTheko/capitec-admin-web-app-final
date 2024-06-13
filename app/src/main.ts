// _neu_generated_code__dont_modify_directly_
import { firebaseInitForServiceWorker } from './libConfig/firebaseInitForServiceWorker';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from "@firebase/app-compat";
import { AppModule } from './app/app.module';
import { NSystemService } from 'neutrinos-seed-services';

declare global {
    var cordova: any;
    var neutrinos: any;
}

if (environment.properties['production']) {
    enableProdMode();
}

async function bootstrapNow() {
    if (environment.properties['console_runtime'] === 'true') {
        const URL = `${window.location.origin}/${environment.properties['trinity_deployment_app_name']}/api/environments`;
        const data = await (await fetch(URL)).json();

        Object.assign(environment.properties, data.properties);
        window['neutrinos'] = {
            environments: environment,
        };
    }

    await platformBrowserDynamic().bootstrapModule(AppModule);
    NSystemService.getInstance();

    window['navigator']?.['splashscreen']?.hide(); // hide splash screen

    const pushType = environment.properties['pushType'] || 'FCM';

    if (
        environment.properties['isNotificationEnabled'] &&
        pushType.toUpperCase() === 'FCM'
    )
        firebaseInitForServiceWorker();
}

function checkDeviceLocal(): string {
    if (window['cordova']) {
        return 'mobile';
    } else {
        return 'browser';
    }
}

const deviceTypeLocal = checkDeviceLocal();

if (deviceTypeLocal === 'browser') {
    bootstrapNow();
}

/**
 * deviceready will only be triggered by a cordova app
 * and since we are not using cordova browser to server files.
 * However, if cordova browser would be used then the app will
 * get bootstrapped
 */
document.addEventListener('deviceready', function () {
    bootstrapNow();
});
