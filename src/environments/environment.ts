/**
 * Created by Galois Zhou on 20/12/2017 15:16.
 */

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

};


export class EnvironmentConstant {
  public static API_URL = 'http://192.168.14.227:9988/api/';
  public static API_URL_V1 = EnvironmentConstant.API_URL + 'v1/';

  public static IMAGE_URL = 'http://192.168.14.227:8000/assets/images/';
}
