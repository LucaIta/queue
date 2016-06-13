import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savedQuestion(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
    }
  }
});
