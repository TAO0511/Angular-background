/**
 * Created by Galois Zhou on 20/12/2017 15:16.
 */

export const environment = {
  production: true
};

export class EnvironmentConstant {
  public static API_URL = 'http://192.168.14.229:9988/api/';
  public static API_URL_V1 = EnvironmentConstant.API_URL + 'v1/';

  public static IMAGE_URL = 'http://192.168.14.229:8000/assets/images/';
}
