import React from 'react';
import SectionItemView from './section';

export default function PersonalListView({ sections }) {
  return (
    <section>
      {sections.map((section) => <SectionItemView section={section}/>)}
    </section>
  );
}
