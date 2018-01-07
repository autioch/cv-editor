import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; // eslint-disable-line no-unused-vars

import HeaderView from './header/view'; // eslint-disable-line no-unused-vars
import EducationView from './education/view'; // eslint-disable-line no-unused-vars
import EmploymentView from './employment/view'; // eslint-disable-line no-unused-vars
import FooterView from './footer/view'; // eslint-disable-line no-unused-vars
import PortraitView from './portrait/view'; // eslint-disable-line no-unused-vars
import InterestView from './interest/view'; // eslint-disable-line no-unused-vars
import LanguageView from './language/view'; // eslint-disable-line no-unused-vars
import TraitView from './trait/view'; // eslint-disable-line no-unused-vars
import TechnologyView from './technology/view'; // eslint-disable-line no-unused-vars
import ToolView from './tool/view'; // eslint-disable-line no-unused-vars
import NetworkView from './network/view'; // eslint-disable-line no-unused-vars
import PersonalView from './personal/view'; // eslint-disable-line no-unused-vars
import store from './store';

import './styles.scss';

const SectionHeader = ({ header }) => ( // eslint-disable-line no-unused-vars
  <div className="section-header">{header}</div>
);

render(
  <Provider store={store}>
    <div className="paper">
      <section className="column--container">
        <section className="column--left">
          <HeaderView />
          <SectionHeader header="Employment" />
          <EmploymentView />
          <SectionHeader header="Education" />
          <EducationView />
          <SectionHeader header="Languages" />
          <LanguageView />
          <SectionHeader header="Traits" />
          <TraitView />
          <SectionHeader header="Interests" />
          <InterestView />
        </section>
        <section className="column--right">
          <PortraitView />
          <SectionHeader header="Personal information" />
          <PersonalView />
          <NetworkView />
          <SectionHeader header="Technology" />
          <TechnologyView />
          <SectionHeader header="Tools" />
          <ToolView />
        </section>
      </section>
      <FooterView />
    </div>
  </Provider>,
  document.getElementById('root')
);
