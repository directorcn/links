const HTML = {
  id: 'FrontEndMap|HTML',
  name: 'HTML',
  path: 'https://html.spec.whatwg.org/multipage/',
  children: [
    {
      id: 'FrontEndMap|HTML|计算机语言',
      name: 'HTML as 计算机语言',
      children: [
        {
          id: 'FrontEndMap|HTML|计算机语言|语法',
          name: '语法',
          children: [
            {
              id: 'FrontEndMap|HTML|计算机语言|语法|Element',
              name: 'Element',
              fragment: '&lt;tagname&gt;&lt;/tagname&gt;'
            },
            {
              id: 'FrontEndMap|HTML|计算机语言|语法|Text',
              name: 'Text',
              fragment: 'text|&lt;![CDATA[text]]&gt;'
            },
            {
              id: 'FrontEndMap|HTML|计算机语言|语法|Comment',
              name: 'Comment',
              fragment: '&lt;!-- comments --&gt;'
            },
            {
              id: 'FrontEndMap|HTML|计算机语言|语法|DTD',
              name: 'DTD',
              fragment: 'Document Type Definition|&lt;!DOCTYPE html&gt;'
            },
            {
              id: 'FrontEndMap|HTML|计算机语言|语法|ProcessingInstruction',
              name: 'ProcessingInstruction',
              fragment: '处理信息: &lt;?a 1?&gt;'
            }
          ]
        },
        {
          id: 'FrontEndMap|HTML|计算机语言|词法',
          name: '词法',
        }
      ]
    },
    {
      id: 'FrontEndMap|HTML|SGML',
      name: 'HTML as SGML',
      children: [
        {
          id: 'FrontEndMap|HTML|SGML|DTD',
          name: 'DTD',
          fragment: 'Document Type Definition'
        },
        {
          id: 'FrontEndMap|HTML|SGML|Entity',
          name: 'Entity',
          path: '',
        }
      ]
    },
    {
      id: 'FrontEndMap|HTML|XML',
      name: 'HTML as XML',
      children: [
        {
          id: 'FrontEndMap|HTML|XML|NameSpace',
          name: 'NameSpace',
          children: [
            {
              id: 'FrontEndMap|HTML|XML|NameSpace|svg',
              name: 'svg'
            },
            {
              id: 'FrontEndMap|HTML|XML|NameSpace|mathml',
              name: 'mathml'
            },
            {
              id: 'FrontEndMap|HTML|XML|NameSpace|aria',
              name: 'aria'
            }
          ]
        },
        {
          id: 'FrontEndMap|HTML|XML|Tag',
          name: 'Tag',
          path: '',
        }
      ]
    },
  ]
}
