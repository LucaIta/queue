import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
// currentTime: moment().format();

  timePassed: Ember.computed('ticket.date', function() {
    debugger;
    // return moment().from('ticket.date');
    return moment().format();
  }),
});
