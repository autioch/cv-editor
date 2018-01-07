import React from 'react';
import PersonalItemView from './view';
import ProfillItemView from './profile';

export default function PersonalListView({ personals, profiles }) {
  return (
    <ul className="personal__list">
      {personals.map((personal) => <PersonalItemView personal={personal}/>)}
      {profiles.map((profile) => <ProfillItemView profile={profile}/>)}
    </ul>
  );
}
