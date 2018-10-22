import React from 'react';
import Results from '../pages/results';
import renderer from 'react-test-renderer';

test('Correct postcode returns results', () => {
  const initialProps = {postcode: 'N11'};
  const component = renderer.create(
    <Results qs={initialProps}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Incorrect postcode returns no results', () => {
  const initialProps = {postcode: 'W12'};
  const component = renderer.create(
    <Results qs={initialProps}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

test('Page is keyboard accessible', () => {
  const initialProps = {postcode: 'N11'};
  const component = renderer.create(
    <Results qs={initialProps}/>,
  );
  let event = new KeyboardEvent('keypress', {'keyCode': 38});
  document.dispatchEvent(event);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Page is keyboard accessible', () => {
  const initialProps = {postcode: 'N11'};
  const component = renderer.create(
    <Results qs={initialProps}/>,
  );
  let event = new KeyboardEvent('keypress', {'keyCode': 40});
  document.dispatchEvent(event);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

