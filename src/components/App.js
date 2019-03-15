import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import Lookup from './Lookup';

const panes = [
  {
    menuItem: 'Home',
    render: () => (
      <Tab.Pane attached={false}>Home content to be added.</Tab.Pane>
    )
  },
  {
    menuItem: 'Lookup',
    render: () => (
      <Tab.Pane attached={false}>
        <Lookup />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Something',
    render: () => <Tab.Pane attached={false}>Something to be added.</Tab.Pane>
  }
];

export default () => {
  return (
    <Container>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </Container>
  );
};
