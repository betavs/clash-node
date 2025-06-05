export default {
  base: {
    base64url: 'aHR0cHM6Ly9ub2RlZnJlZS5uZXQv',
    selector: ['#boxmoe_theme_container a', '#boxmoe_theme_container .section'],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+\w+\.yaml/g
  },

  meta: {
    base64url:
      'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2NsYXNobm9kZS9jbGFzaG5vZGUuZ2l0aHViLmlvL3JlZnMvaGVhZHMvbWFpbi9SRUFETUUubWQ',
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+[\w-]+\.yaml/g
  },

  need: {
    base64url: 'aHR0cHM6Ly9mcmVlLmRhdGl5YS5jb20v',
    selector: ['.relative a.link', '.nested-links code'],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+[\w-]+\.yaml/g
  },

  node: {
    base64url: 'aHR0cHM6Ly9zby54Znh2cG4ubGlmZS9uYXYvYmxvZw',
    selector: [
      '.content-layout a.media-content',
      '.content-layout .panel-body'
    ],
    pattern: /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+subscribe\?token=\w+/g
  },

  sock: {
    base64url: 'aHR0cHM6Ly93d3cueHJheXZpcC5jb20vZnJlZS55YW1s'
  }
} as Record<string, UseSpiderOption>
