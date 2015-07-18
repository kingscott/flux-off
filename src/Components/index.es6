import Anchor from './Anchor';
import Button from './Button';
import TextField from './TextField';
import Composite from './Composite';
import CompositeLoader from './CompositeLoader';

export default {
  Anchor: Anchor,
  Button: Button,
  Composite: Composite,
  CompositeLoader: CompositeLoader,
  TextField: TextField
};

export const config = {
  name: 'core',
  components: {
    Anchor: {
      name: 'Anchor',
      props: {
        source: { name: 'Source', type: 'string', default: '' },
        target: { name: 'Target', type: 'string', default: '_blank' }
      }
    },
    Button: {
      name: 'Button',
      props: {
        label: { name: 'label', type: 'string', default: '' },
        fontSize: { name: 'Font Size', type: 'string', default: '10px' }
      }
    },
    TextField: {
      name: 'Text Field',
      props: {
        placeholder: { name: 'Placeholder', type: 'string' },
        fontSize: { name: 'Font Size', type: 'string' },
        color: { name: 'Font Color', type: 'string' }
      }
    }
  }
};
