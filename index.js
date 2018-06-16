module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-maichong-base',
  ].map(require.resolve),
  rules: {
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'react/forbid-prop-types': 0,
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
    'react/sort-comp': [
      2,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^handle.+$/',
          '/^render.+$/',
          'render'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'props',
            'state',
            'constructor',
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
