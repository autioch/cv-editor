import {
  EMPLOYMENT__ADD,
  EMPLOYMENT__REMOVE,
  EMPLOYMENT__START_DATE,
  EMPLOYMENT__END_DATE,
  EMPLOYMENT__COMPANY,
  EMPLOYMENT__POSITION,
  EMPLOYMENT__TOOLS,
  EMPLOYMENT__SUMMARY
} from './actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case EMPLOYMENT__ADD:
      return state.concat({
        id: state.length + 1,
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        tools: [],
        summary: ''
      });
    case EMPLOYMENT__REMOVE:
      return state.filter((employment) => employment.id !== action.id);
    case EMPLOYMENT__START_DATE:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          startDate: action.text,
          ...employment
        };
      });
    case EMPLOYMENT__END_DATE:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          endDate: action.text,
          ...employment
        };
      });
    case EMPLOYMENT__COMPANY:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          company: action.text,
          ...employment
        };
      });
    case EMPLOYMENT__POSITION:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          position: action.text,
          ...employment
        };
      });
    case EMPLOYMENT__TOOLS:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          tools: action.text,
          ...employment
        };
      });
    case EMPLOYMENT__SUMMARY:
      return state.map((employment) => {
        if (employment.id !== action.id) {
          return employment;
        }

        return {
          summary: action.text,
          ...employment
        };
      });
    default:
      return state;
  }
}
