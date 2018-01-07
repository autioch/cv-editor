import {
  EDUCATION__ADD,
  EDUCATION__REMOVE,
  EDUCATION__START_DATE,
  EDUCATION__END_DATE,
  EDUCATION__INSTITUTION,
  EDUCATION__COUNTRY,
  EDUCATION__CITY
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case EDUCATION__ADD:
      return state.concat({
        id: state.length + 1,
        startDate: '',
        endDate: '',
        institution: '',
        country: '',
        city: ''
      });
    case EDUCATION__REMOVE:
      return state.filter((education) => education.id !== action.id);
    case EDUCATION__START_DATE:
      return state.map((education) => {
        if (education.id !== action.id) {
          return education;
        }

        return {
          startDate: action.text,
          ...education
        };
      });
    case EDUCATION__END_DATE:
      return state.map((education) => {
        if (education.id !== action.id) {
          return education;
        }

        return {
          endDate: action.text,
          ...education
        };
      });
    case EDUCATION__INSTITUTION:
      return state.map((education) => {
        if (education.id !== action.id) {
          return education;
        }

        return {
          institution: action.text,
          ...education
        };
      });
    case EDUCATION__COUNTRY:
      return state.map((education) => {
        if (education.id !== action.id) {
          return education;
        }

        return {
          country: action.text,
          ...education
        };
      });
    case EDUCATION__CITY:
      return state.map((education) => {
        if (education.id !== action.id) {
          return education;
        }

        return {
          city: action.text,
          ...education
        };
      });
    default:
      return state;
  }
}
