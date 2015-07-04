import Anchor from './Anchor';

export default {
  Anchor: Anchor
}

export const config = {
  name: 'core',
  components: {
    Anchor: {
      name: 'Anchor',
      props: {
        source: { name: 'Source', type: 'string' }
      }
    }
  }
};
