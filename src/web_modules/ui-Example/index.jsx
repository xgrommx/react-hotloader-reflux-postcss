import './index.css';

import React from 'react';
import Reflux from 'reflux';
import cx from 'classnames';
import ExampleActions from 'actions-example';
import ExampleMixin from 'mixin-example';
import ExampleStore from 'store-example';

export default React.createClass({
  mixins: [
    ExampleMixin,
    Reflux.connect(ExampleStore)
  ],

  getInitialState() {
    example: ExampleStore.get('example')
  },

  _toggleActive() {
    ExampleActions.toggleActive(!this.state.example);
  },

  render() {
    let exampleClasses = cx({
      'Example': true,
      'Example--active': this.state.example
    });

    return (
      <div className={ exampleClasses }>
        <button
            className='ExampleButton'
            onClick={ this._toggleActive }>
            Toggle Me!
            </button>
      </div>
    );
  }
});
