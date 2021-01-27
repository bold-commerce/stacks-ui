const path = require('path');

module.exports = {

  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');
    return `import { ${name} } from '@bold-commerce/stacks-ui';`;
  },

  require: [
    path.join(__dirname, 'docs/js/index.js'),
  ],

  title: 'Stacks UI Docs',

  pagePerSection: true,
  sections: [
    {
      name: 'Overview',
      content: 'docs/sections/overview.md',
    },

    {
      name: 'Containers',
      content: 'docs/sections/containers.md',
      components: [
        'src/components/widgetframe/WidgetFrame.js',
      ],
    },

    {
      name: 'Actions',
      content: 'docs/sections/actions.md',
      components: [
        'src/components/button/Button.js',
      ],
    },

    {
      name: 'Forms',
      content: 'docs/sections/forms.md',
      components: [
        'src/components/field/Field.js',
        'src/components/input/Input.js',
        'src/components/inputfield/InputField.js',
        'src/components/select/Select.js',
        'src/components/selectfield/SelectField.js',
        'src/components/checkbox/Checkbox.js',
        'src/components/checkboxfield/CheckboxField.js',
        'src/components/radio/Radio.js',
        'src/components/radiofield/RadioField.js',
      ],
    },

    {
      name: 'Feedback and status',
      content: 'docs/sections/feedback-and-status.md',
      components: [
        'src/components/loadingspinner/LoadingSpinner.js',
        'src/components/progressbar/ProgressBar.js',
        'src/components/message/Message.js',
      ],
    },

    {
      name: 'Product',
      content: 'docs/sections/product.md',
      components: [
        'src/components/details/Details.js',
        'src/components/image/Image.js',
        'src/components/price/Price.js',
      ],
    },
  ],

  styles: {
    StyleGuide: {
      hasSidebar: {
        paddingLeft: '300px',
      },
      sidebar: {
        width: '300px',
      },
    },
    Section: {
      root: {
        marginBottom: '5rem',
      },
    },
    SectionHeading: {
      wrapper: {
        borderBottom: '1px solid #ccc',
        marginBottom: '0.5rem',
        padding: '0.5rem 0',
      },
    },
    MarkdownHeading: {
      spacing: {
        marginBottom: '0.5rem',
        marginTop: '1.5rem',
      },
    },
    Markdown: {
      td: {
        fontSize: 'inherit',
      },
      th: {
        fontSize: 'inherit',
      },
    },
    Heading: {
      heading1: {
        fontSize: '32px',
        lineHeight: '1.25',
      },
      heading2: {
        fontSize: '24px',
        lineHeight: '1.25',
        marginTop: '2rem',
      },
      heading3: {
        fontSize: '18px',
        lineHeight: '1.25',
        fontWeight: 'bold',
      },
      heading4: {
        fontSize: '16px',
        lineHeight: '1.25',
        fontWeight: 'bold',
      },
      heading5: {
        fontSize: '16px',
        lineHeight: '1.25',
        fontStyle: 'italic',
      },
      heading6: {
        fontSize: '14px',
        lineHeight: '1.25',
        fontWeight: 'bold',
      },
    },
    Playground: {
      root: {
        marginTop: '1rem',
      },
      preview: {
        backgroundColor: '#fafafc',
      },
    },
  },
};
