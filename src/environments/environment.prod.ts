import {KeycloakConfig} from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://172.17.0.1:8089/auth',
  realm: 'suits-ims',
  clientId: 'suits-ui'
};

export const environment = {
  production: true,
  keycloakConfig
};
