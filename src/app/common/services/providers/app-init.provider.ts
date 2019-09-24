import { ConfigLoaderService } from '../config-loader.service';
import { CURRENT_CLIENT } from '../../constants';

export function initApp(configLoaderService: ConfigLoaderService) {

    return () => {
        return new Promise((resolve) => {

            var loadConfigData = function (env: string) {

                return configLoaderService.get("assets//config//config." + env + ".json").toPromise()
                    .then((config: any) => {
        
                        CURRENT_CLIENT.SHORT_NAME = config.SHORT_NAME;
                        CURRENT_CLIENT.FULL_NAME = config.LOGO_TEXT;
                        CURRENT_CLIENT.LOGO_PATH = config.LOGO_PATH;
        
                        resolve(true);
                    });
            }


            return configLoaderService.get('assets/env.json').toPromise().then((env: any) => {
                return loadConfigData(env.env);
            });
        });
    };
}