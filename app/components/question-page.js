import Ember from 'ember';

export default Ember.Component.extend({
  firstQuestion: true,
  actions: {
    showSecond() {
      // this.set("questionCounter", questionCounter + 1);
      this.set('firstQuestion', false);
      this.set('secondQuestion', true);
    },
    showThird() {
      this.set('secondQuestion', false);
      this.set('thirdQuestion', true);
    },
    showForm() {
      this.set('thirdQuestion', false);
      this.set('helpForm', true);
    },
    helpButton(){
      var params= {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description')
      };
      this.sendAction('savedQuestion', params);
      this.transitionTo('index');
    }
  }
});
