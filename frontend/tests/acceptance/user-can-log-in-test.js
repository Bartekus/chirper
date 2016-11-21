import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'chirper/tests/helpers/start-app';

const { run } = Ember;

module('Acceptance | user can log in', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

// Happy path
// (Make sure you use a valid username and password!)
test('User can log in', function(assert) {
  visit('/');
  fillIn('.login-box input[type="text"]', 'testUser');
  fillIn('.login-box input[type="password"]', 'Password1');
  click('button.login');

  andThen(function() {
    // Check if we've been redirected:
    assert.equal(currentRouteName(), 'home');
  });
});

// Sad path
test('Wrong credentials shows error box', function(assert) {
  visit('/');
  fillIn('.login-box input[type="text"]', 'testUser');
  fillIn('.login-box input[type="password"]', 'wrongpassword');
  click('button.login');

  andThen(function() {
    assert.equal(currentRouteName(), 'index');
    // Check if the error box element exists:
    assert.ok($('p.error').length !== 0);
  });
});
