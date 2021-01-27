import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'intl';
import 'intl/locale-data/jsonp/en-CA';


Enzyme.configure({ adapter: new Adapter() });

// Trying to make Intl object consistent for our tests
global.Intl = IntlPolyfill;
