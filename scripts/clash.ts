export default {
  base: {
    base64url: 'aHR0cHM6Ly9ub2RlZnJlZS5uZXQv',
    selector: ['#boxmoe_theme_container a', '#boxmoe_theme_container .section'],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+\w+\.yaml/
  },

  meta: {
    base64url:
      'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JhcmFiYW1hL0ZyZWVOb2Rlcy9yZWZzL2hlYWRzL21haW4vbm9kZXMvY2xhc2htZXRhLnlhbWw='
  },

  need: {
    base64url: 'aHR0cHM6Ly9mcmVlLmRhdGl5YS5jb20v',
    selector: ['.relative a.link', '.nested-links code'],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+[\w-]+\.yaml/
  },

  node: {
    base64url: 'aHR0cHM6Ly9zby54Znhzc3IubWUvbmF2L2Jsb2c',
    selector: [
      '.content-layout a.media-content',
      '.content-layout .panel-body'
    ],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+subscribe\?token=\w+/
  },

  sock: {
    base64url: 'aHR0cHM6Ly93d3cueHJheXZpcC5jb20vZnJlZS55YW1s'
  }
} as Record<string, UseSpiderOption>
