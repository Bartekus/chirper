import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import config from '../../config/environment';

const { RESTAdapter } = DS;

export default RESTAdapter.extend(DataAdapterMixin, {
  host: config.apiURL,
  authorizer: 'authorizer:oauth2' // ...and and this!
});
