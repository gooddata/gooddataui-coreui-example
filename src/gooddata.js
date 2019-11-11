import { factory } from '@gooddata/gooddata-js';

const sdk = factory();

// GoodData project (= workspace) id used by Live Examples
// https://gooddata-examples.herokuapp.com/
const projectId = 'xms7ga4tf3g3nzucd8380o2bev8oeknp';

window.gooddata = sdk; // only for dev purposes

export default {
  projectId,
  sdk
};
