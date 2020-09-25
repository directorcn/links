const JavaScript = {
  id: 'FrontEndMap|JavaScript',
  name: 'JavaScript',
  path: 'https://www.ecma-international.org/ecma-262/11.0/index.html',
  children: [
    {
      id: 'FrontEndMap|JavaScript|Grammar',
      name: 'Grammar',
      children: [
        {
          id: 'FrontEndMap|JavaScript|Grammar|Lexical',
          name: 'Lexical',
          path: 'https://github.com/directorcn/relearning-front-end/tree/master/javascript#lexical-grammer',
          children: [
            {
              id: 'FrontEndMap|JavaScript|Grammar|Lexical|WhiteSpace',
              name: 'WhiteSpace',
              fragment: 'CHARACTER TABULATION|LINE TABULATION|FORM FEED|SPACE|NO-BREAK SPACE|ZERO WIDTH NO-BREAK SPACE'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Lexical|LineTerminator',
              name: 'LineTerminator',
              fragment: 'LINE FEED|CARRIAGE RETURN'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Lexical|Comment',
              name: 'Comment',
              fragment: '// | /* */'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Lexical|Token',
              name: 'Token',
              fragment: 'Identifier(变量名)|Keywords(JS关键字)|Punctuator(符号，不包含 `/`)|NumericLiteral(数字直接量)|RegularExpressionalLiteral(两个 `/` 之间)|Template(字符串模板)|...'
            }
          ]
        },
        {
          id: 'FrontEndMap|JavaScript|Grammar|Syntax',
          name: 'Syntax',
          children: [
            {
              id: 'FrontEndMap|JavaScript|Grammar|Syntax|Atom',
              name: 'Atom'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Syntax|Expression',
              name: 'Expression',
              path: 'https://github.com/directorcn/relearning-front-end/tree/master/javascript#expressions'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Syntax|Structure',
              name: 'Structure'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Syntax|Script & Module',
              name: 'Script & Module'
            }
          ]
        }
      ]
    },
    {
      id: 'FrontEndMap|JavaScript|Grammar|Runtime',
      name: 'Runtime',
      children: [
        {
          id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type',
          name: 'Type',
          path: 'https://github.com/directorcn/relearning-front-end/blob/master/javascript/types/data-types.md',
          children: [
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Number',
              name: 'Number'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|String',
              name: 'String'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Boolean',
              name: 'Boolean'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Null',
              name: 'Null'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Undefined',
              name: 'Undefined'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Object',
              name: 'Object'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|Symbol',
              name: 'Symbol'
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime|Type|BigInt',
              name: 'BigInt'
            }
          ]
        },
        {
          id: 'FrontEndMap|JavaScript|Grammar|Runtime|',
          name: '执行过程',
          path: void 0,
          children: [
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Job',
              name: 'Job',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Script / Module',
              name: 'Script / Module',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Promise',
              name: 'Promise',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Function',
              name: 'Function',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Statement',
              name: 'Statement',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Expression',
              name: 'Expression',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Literal',
              name: 'Literal',
            },
            {
              id: 'FrontEndMap|JavaScript|Grammar|Runtime||Identifier',
              name: 'Identifier',
            }
          ]
        }
      ]
    },
    {
      id: 'FrontEndMap|JavaScript|Grammar|Semantics',
      name: '语义(Semantics)',
    }
  ]
}
