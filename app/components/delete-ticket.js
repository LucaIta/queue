import Ember from 'ember';

export default Ember.Component.extend({
  ticketClosed: false,
  actions: {
    delete(model) {
      model.destroyRecord();
      console.log(this.ticketClosed);
      this.set('ticketClosed', true);
    }
  }

});
