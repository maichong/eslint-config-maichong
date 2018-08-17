module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-maichong-base',
  ].map(require.resolve),
  rules: {
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [
          'invalidHref'
        ]
      }
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 1,
    'react/button-has-type': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: false,
        assignment: false,
        return: true
      }
    ],
    'react/no-unused-prop-types': 1,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 1,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'static-lifecycle',
          'type-annotations',
          'instance-variables',
          'props',
          'state',
          'constructor',
          'getters',
          'setters',
          'lifecycle',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render'
        ],
        groups: {
          'static-lifecycle': [
            'displayName',
            'propTypes',
            'contextTypes',
            'defaultProps',
            'childContextTypes',
            'mixins',
            'statics'
          ],
          lifecycle: [
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ]
        }
      }
    ]
  }
};

// let rules = {};
// for (let key of Object.keys(module.exports.rules).sort()) {
//   rules[key] = module.exports.rules[key];
// }

// console.log(JSON.stringify(rules, null, 2));
