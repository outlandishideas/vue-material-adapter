import { h } from 'vue';

export default {
  name: 'mcw-card',
  props: {
    outlined: Boolean,
  },
  setup(props, { attrs, slots }) {
    return () => {
      const { outlined } = props;
      const { class: classes, ...otherAttrs } = attrs;

      return h(
        'div',
        {
          class: [
            classes,
            {
              'mdc-card': 1,
              'mdc-card--outlined': outlined,
            },
          ],
          ...otherAttrs,
        },
        slots.default?.(),
      );
    };
  },
};
