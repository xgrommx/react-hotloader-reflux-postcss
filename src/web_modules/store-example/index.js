import 'store-base';

import Reflux from 'reflux';
import ExampleActions from 'actions-example';

export default Reflux.createStore({
  listenables: ExampleActions,

  /**
   * _byId is the data structure which holds all
   * of the store's data.  When this._update() is called,
   * the data is put inside _byId.
   * @type {Object}
   */
  _byId: {
    example: true
  },

  /**
   * This is the failure callback action for our
   * API call. This is where you'd want to do your
   * error handling and logging.
   * @param  {string} err The error returned from the server.
   */
  onGetDataFailed(err) {
    console.error(err);
  },

  /**
   * Acts as our success callback from getData.
   * This is where you will want to process the data
   * that came back from the API.
   * @param  {array} data The data returned from the API.
   */
  onGetDataCompleted(data) {
    this._update('data', data);
    this.trigger({
        data: this.get('data')
    });
  },

  /**
   * This is an example action listener that
   * toggles the example boolean true or false.
   *
   * @param  {boolean} bool The new boolean value
   */
  onToggleActive(bool) {
    this._update('example', bool);
    this.trigger({
        example: this.get('example')
    });
  }
});
