import {KeycloakConfig} from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'https://suits-auth.herokuapp.com/auth',
  realm: 'suits-ims',
  clientId: 'suits-ui'
};

export const environment = {
  production: true,
  keycloakConfig,
  suitsApiUrl: "https://suits-api.herokuapp.com"
};
