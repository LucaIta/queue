import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    savedQuestion(params) {
      var newTicket = this.store.createRecord('ticket', params);
      newTicket.save();
      this.transitionTo('ticket', newTicket.id);
      // this.transitionTo('ticket');
    }
  }
});
