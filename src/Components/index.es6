import Anchor from './Anchor';
import Button from './Button';

export default {
  Anchor: Anchor,
  Button: Button
}

export const config = {
  name: 'core',
  components: {
    Anchor: {
      name: 'Anchor',
      props: {
        source: { name: 'Source', type: 'string' }
      }
    },
    // Button: {
    //   name: 'Button',
    //   props: {
    //     label: { name: 'Label', type: 'string' }
    //   }
    // }
  }
};
