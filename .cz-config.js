'use strict';

module.exports = {
  types: [
    {
      value: 'feat',
      name : 'feat:     新特性'
    },
    {
      value: 'fix',
      name : 'fix:      修复问题'
    },
    {
      value: 'refactor',
      name : 'refactor: 代码重构'
    },
    {
      value: 'docs',
      name : 'docs:     文档修改'
    },
    {
      value: 'test',
      name : 'test:     添加或修改测试用例'
    },
    {
      value: 'chore',
      name : 'chore:    其他修改, 比如:构建流程、依赖管理'
    },
    {
      value: 'style',
      name : 'style:    代码格式修改,不影响代码执行'
    },
    {
      value: 'revert',
      name : 'revert:   代码回退'
    }
  ],
  scopes: [],
  allowCustomScopes: false,
  allowBreakingChanges: ["feat", "fix"],
  messages: {
    type: "选择一个你正在提交的修改类型:",
    scope: '\n修改的范围 (可选):',
    // used if allowCustomScopes is true
    customScope: '修改的范围:',
    subject: '写一个简要的修改描述信息:\n',
    body: '写一个详细的修改描述信息 (可选). 使用 "|" 符号分割一个新行:\n',
    breaking: '列出不兼容的修改 (可选):\n',
    footer: '列出修改关闭的bug跟踪ID (可选). E.g.: #31, #34:\n',
    confirmCommit: '您确定要继续执行上面的提交吗?',
  },
};
