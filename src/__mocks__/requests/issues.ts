export const getIssuesSuccess = {
  total_count: 45,
  items: [
    {
      url: 'https://api.github.com/repos/wbkd/react-flow/issues/1774',
      repository_url: 'https://api.github.com/repos/wbkd/react-flow',
      labels_url:
        'https://api.github.com/repos/wbkd/react-flow/issues/1774/labels{/name}',
      comments_url:
        'https://api.github.com/repos/wbkd/react-flow/issues/1774/comments',
      events_url:
        'https://api.github.com/repos/wbkd/react-flow/issues/1774/events',
      html_url: 'https://github.com/wbkd/react-flow/issues/1774',
      id: 1083604578,
      node_id: 'I_kwDOC75CTc5Aln5i',
      number: 1774,
      title: 'V10 API Example - Infinite loop ?',
      user: {
        login: 'doflo-dfa',
        id: 77824565,
        node_id: 'MDQ6VXNlcjc3ODI0NTY1',
        avatar_url: 'https://avatars.githubusercontent.com/u/77824565?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/doflo-dfa',
        html_url: 'https://github.com/doflo-dfa',
        followers_url: 'https://api.github.com/users/doflo-dfa/followers',
        following_url:
          'https://api.github.com/users/doflo-dfa/following{/other_user}',
        gists_url: 'https://api.github.com/users/doflo-dfa/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/doflo-dfa/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/doflo-dfa/subscriptions',
        organizations_url: 'https://api.github.com/users/doflo-dfa/orgs',
        repos_url: 'https://api.github.com/users/doflo-dfa/repos',
        events_url: 'https://api.github.com/users/doflo-dfa/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/doflo-dfa/received_events',
        type: 'User',
        site_admin: false,
      },
      labels: [],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: '2021-12-17T20:46:36Z',
      updated_at: '2021-12-17T20:46:36Z',
      closed_at: null,
      author_association: 'NONE',
      active_lock_reason: null,
      body: "```js\r\nimport ReactFlow, {\r\n  applyNodeChanges,\r\n  applyEdgeChanges\r\n} from 'react-flow-renderer';\r\n\r\nconst initialNodes = [\r\n  { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 0 } },\r\n  { id: '2', data: { label: 'Node 2' }, position: { x: 150, y: 100 } }\r\n];\r\n\r\nconst initialEdges = [\r\n  { id: 'e1-2', source: '1', target: '2' }\r\n];\r\n\r\nconst BasicFlow = () => {\r\n  const [nodes, setNodes] = useState(initialNodes);\r\n  const [edges, setEdges] = useState(initialEdges);\r\n\r\n  const onNodesChange = useCallback((changes) => setNodes((ns) => applyNodeChanges(changes, ns)), []);\r\n  const onEdgesChange = useCallback((changes) => setEdges((es) => applyEdgeChanges(changes, es)), []);\r\n\r\n  return (\r\n    <ReactFlow\r\n      nodes={nodes} \r\n      edges={edges}\r\n      onNodesChange={onNodesChange}\r\n      onEdgesChange={onEdgesChange}\r\n    />\r\n  );\r\n};\r\n\r\nexport default BasicFlow;\r\n\r\n```\r\nUsing: \r\nreact-flow-renderer@10.0.0-next.28\r\n\r\nIt appears in this example that, there is a pretty serious loop occuring ? am I missing something.  applyNodeChanges is triggering onNodesChange which is then calling the callback and on and on etc. ",
      reactions: {
        url: 'https://api.github.com/repos/wbkd/react-flow/issues/1774/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        'https://api.github.com/repos/wbkd/react-flow/issues/1774/timeline',
      performed_via_github_app: null,
      score: 1.0,
    },
    {
      url: 'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1',
      repository_url:
        'https://api.github.com/repos/adilfaiz001/react-native-awesome',
      labels_url:
        'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1/labels{/name}',
      comments_url:
        'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1/comments',
      events_url:
        'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1/events',
      html_url: 'https://github.com/adilfaiz001/react-native-awesome/issues/1',
      id: 1083600467,
      node_id: 'I_kwDOFm7Q785Alm5T',
      number: 1,
      title: 'Keyboard View',
      user: {
        login: 'adilfaiz001',
        id: 13364400,
        node_id: 'MDQ6VXNlcjEzMzY0NDAw',
        avatar_url: 'https://avatars.githubusercontent.com/u/13364400?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/adilfaiz001',
        html_url: 'https://github.com/adilfaiz001',
        followers_url: 'https://api.github.com/users/adilfaiz001/followers',
        following_url:
          'https://api.github.com/users/adilfaiz001/following{/other_user}',
        gists_url: 'https://api.github.com/users/adilfaiz001/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/adilfaiz001/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/adilfaiz001/subscriptions',
        organizations_url: 'https://api.github.com/users/adilfaiz001/orgs',
        repos_url: 'https://api.github.com/users/adilfaiz001/repos',
        events_url: 'https://api.github.com/users/adilfaiz001/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/adilfaiz001/received_events',
        type: 'User',
        site_admin: false,
      },
      labels: [],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: '2021-12-17T20:39:06Z',
      updated_at: '2021-12-17T20:39:06Z',
      closed_at: null,
      author_association: 'OWNER',
      active_lock_reason: null,
      body: "Keyboard view when Keyboard is visible and hide, its impact on screen content and screen height.\r\n\r\nExample - Single screen contains `Header`, 'Body` and `Input`. `Input` is on the bottom, when input is focused, height reduces and header hides.\r\n\r\nSolutions\r\n-\r\n1. Suppose, `Header` is fixed or we are using react-navigation, `Body`  is 100% in height and `Input` is position-absolute, when keyboard is hidden.\r\n   1. KeyboardAvoidingArea - If content wrapped inside this, and vertical offset is provided, it shows one issue of bouncing header, when behaviour is set to height\r\n",
      reactions: {
        url: 'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        'https://api.github.com/repos/adilfaiz001/react-native-awesome/issues/1/timeline',
      performed_via_github_app: null,
      score: 1.0,
    },
    {
      url: 'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315',
      repository_url:
        'https://api.github.com/repos/react-hook-form/react-hook-form',
      labels_url:
        'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315/labels{/name}',
      comments_url:
        'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315/comments',
      events_url:
        'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315/events',
      html_url:
        'https://github.com/react-hook-form/react-hook-form/issues/7315',
      id: 1083600291,
      node_id: 'I_kwDOCl-cD85Alm2j',
      number: 7315,
      title:
        "issue: `watch`ing array value doesn't trigger `useMemo` on changes",
      user: {
        login: 'awesomeunleashed',
        id: 10679635,
        node_id: 'MDQ6VXNlcjEwNjc5NjM1',
        avatar_url: 'https://avatars.githubusercontent.com/u/10679635?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/awesomeunleashed',
        html_url: 'https://github.com/awesomeunleashed',
        followers_url:
          'https://api.github.com/users/awesomeunleashed/followers',
        following_url:
          'https://api.github.com/users/awesomeunleashed/following{/other_user}',
        gists_url:
          'https://api.github.com/users/awesomeunleashed/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/awesomeunleashed/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/awesomeunleashed/subscriptions',
        organizations_url: 'https://api.github.com/users/awesomeunleashed/orgs',
        repos_url: 'https://api.github.com/users/awesomeunleashed/repos',
        events_url:
          'https://api.github.com/users/awesomeunleashed/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/awesomeunleashed/received_events',
        type: 'User',
        site_admin: false,
      },
      labels: [
        {
          id: 1853898636,
          node_id: 'MDU6TGFiZWwxODUzODk4NjM2',
          url: 'https://api.github.com/repos/react-hook-form/react-hook-form/labels/Status:%20under%20investigation',
          name: 'Status: under investigation',
          color: 'fbca04',
          default: false,
          description: 'aware of this issue and pending for investigation',
        },
      ],
      state: 'open',
      locked: false,
      assignee: {
        login: 'bluebill1049',
        id: 10513364,
        node_id: 'MDQ6VXNlcjEwNTEzMzY0',
        avatar_url: 'https://avatars.githubusercontent.com/u/10513364?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/bluebill1049',
        html_url: 'https://github.com/bluebill1049',
        followers_url: 'https://api.github.com/users/bluebill1049/followers',
        following_url:
          'https://api.github.com/users/bluebill1049/following{/other_user}',
        gists_url: 'https://api.github.com/users/bluebill1049/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/bluebill1049/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/bluebill1049/subscriptions',
        organizations_url: 'https://api.github.com/users/bluebill1049/orgs',
        repos_url: 'https://api.github.com/users/bluebill1049/repos',
        events_url:
          'https://api.github.com/users/bluebill1049/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/bluebill1049/received_events',
        type: 'User',
        site_admin: false,
      },
      assignees: [
        {
          login: 'bluebill1049',
          id: 10513364,
          node_id: 'MDQ6VXNlcjEwNTEzMzY0',
          avatar_url: 'https://avatars.githubusercontent.com/u/10513364?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/bluebill1049',
          html_url: 'https://github.com/bluebill1049',
          followers_url: 'https://api.github.com/users/bluebill1049/followers',
          following_url:
            'https://api.github.com/users/bluebill1049/following{/other_user}',
          gists_url:
            'https://api.github.com/users/bluebill1049/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/bluebill1049/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/bluebill1049/subscriptions',
          organizations_url: 'https://api.github.com/users/bluebill1049/orgs',
          repos_url: 'https://api.github.com/users/bluebill1049/repos',
          events_url:
            'https://api.github.com/users/bluebill1049/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/bluebill1049/received_events',
          type: 'User',
          site_admin: false,
        },
      ],
      milestone: null,
      comments: 0,
      created_at: '2021-12-17T20:38:46Z',
      updated_at: '2021-12-17T20:38:46Z',
      closed_at: null,
      author_association: 'NONE',
      active_lock_reason: null,
      body: '### Version Number\n\n7.22.1\n\n### Codesandbox/Expo snack\n\nhttps://codesandbox.io/s/silly-cdn-kzcgh?file=/src/App.tsx\n\n### Steps to reproduce\n\n1. Change the value of one of the dropdowns\r\n2. See that the "Unused Values" changes after the re-render, but "Memoized Unused Values" does not\r\n\n\n### Expected behaviour\n\nI would expect that the `useMemo` would recalculate, since `options` changed. React is expecting that a dependency for `useMemo` (or `useEffect`, or `useCallback`, etc.) will change reference equality if it changes, but this doesn\'t appear to happen with `watch` in this case. The result of `watch` for an array value therefore seems to be unsafe to use in any of those hooks.\n\n### What browsers are you seeing the problem on?\n\nChrome\n\n### Relevant log output\n\n_No response_\n\n### Code of Conduct\n\n- [X] I agree to follow this project\'s Code of Conduct',
      reactions: {
        url: 'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        'https://api.github.com/repos/react-hook-form/react-hook-form/issues/7315/timeline',
      performed_via_github_app: null,
      score: 1.0,
    },
    {
      url: 'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922',
      repository_url:
        'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus',
      labels_url:
        'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922/labels{/name}',
      comments_url:
        'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922/comments',
      events_url:
        'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922/events',
      html_url:
        'https://github.com/notepad-plus-plus/notepad-plus-plus/issues/10922',
      id: 1083600055,
      node_id: 'I_kwDOAffEG85Almy3',
      number: 10922,
      title:
        'ALT Key Incorrectly Passed To Notepad++ When ALT+Tabbing Causing Menu To Take Focus',
      user: {
        login: 'atom0s',
        id: 1422090,
        node_id: 'MDQ6VXNlcjE0MjIwOTA=',
        avatar_url: 'https://avatars.githubusercontent.com/u/1422090?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/atom0s',
        html_url: 'https://github.com/atom0s',
        followers_url: 'https://api.github.com/users/atom0s/followers',
        following_url:
          'https://api.github.com/users/atom0s/following{/other_user}',
        gists_url: 'https://api.github.com/users/atom0s/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/atom0s/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/atom0s/subscriptions',
        organizations_url: 'https://api.github.com/users/atom0s/orgs',
        repos_url: 'https://api.github.com/users/atom0s/repos',
        events_url: 'https://api.github.com/users/atom0s/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/atom0s/received_events',
        type: 'User',
        site_admin: false,
      },
      labels: [],
      state: 'open',
      locked: false,
      assignee: null,
      assignees: [],
      milestone: null,
      comments: 0,
      created_at: '2021-12-17T20:38:24Z',
      updated_at: '2021-12-17T20:38:24Z',
      closed_at: null,
      author_association: 'NONE',
      active_lock_reason: null,
      body: '<!--- This is a generic template and may not be applicable in all cases. -->\r\n<!--- Try to follow it where possible. -->\r\n\r\n### Description of the Issue\r\n<!--- Provide a more detailed description to the issue itself -->\r\n\r\nWhen using ALT+Tab to switch between applications on Windows, Notepad++ is now causing the ALT key to stay \'down\' when tabbing back to it. This causes key presses to then react as if you\'re pressing ALT+(insert key here) to do a menu action. I now have to press escape every time first before I try to start typing again otherwise I\'ll do some random menu action by accident.\r\n\r\nThis seems to have just started recently in the last month or so.\r\n\r\nThis is on a brand new, fully updated, install of Windows 10 Pro and latest Notepad++.\r\n\r\n**Windows Version:** Windows 10 21H2 (Nov. 2021 update.)\r\n**Notepad++ Version:** 8.1.9.3 (x32)\r\n\r\n### Steps to Reproduce the Issue\r\n<!--- Set of steps to reproduce this issue -->\r\n1. Open Notepad++\r\n2. Create a new empty document and type some words into it so that the cursor is focused to the text area.\r\n3. Hold `ALT` and press `Tab` to move away from the Notepad++ application window and have it lose focus.\r\n4. Do something in another app showing it properly got cursor focus.\r\n5. Hold `ALT` and press `Tab` to move back to the Notepad++ application window.\r\n\r\nAt this point, Notepad++ will show the menu having focus instead of the text area, acting as if ALT was pressed again after the window regained focus, or is being held down.\r\n\r\n### Expected Behavior\r\n<!--- What did you expect to happen -->\r\n\r\nWhen ALT+Tabbing back to Notepad++, the text area that had focus last should regain cursor focus. This was the behavior before but is now broken for me.\r\n\r\n### Actual Behavior\r\n<!--- What actually happened -->\r\n\r\nNotepad++\'s menu system is given focus when ALT+Tabbing back to Notepad++ instead of the text area.\r\n\r\n### Debug Information\r\n<!--- In your Notepad++, click on the "?" menu (found to the right of "Window" in the menu bar) -->\r\n<!--- In the menu that drops down, choose "Debug Info..." -->\r\n<!--- A message box will open detailing specifics about your Notepad++ version, plugins, etc. -->\r\n<!--- CLICK ON THE BLUE LINK with the text "Copy debug info into clipboard" -->\r\n<!--- Do a PASTE HERE -->\r\n\r\nNotepad++ v8.1.9.3   (32-bit)\r\nBuild time : Dec  6 2021 - 19:16:45\r\nPath : C:\\Program Files (x86)\\Notepad++\\notepad++.exe\r\nCommand Line : \r\nAdmin mode : OFF\r\nLocal Conf mode : OFF\r\nCloud Config : OFF\r\nOS Name : Windows 10 Enterprise (64-bit) \r\nOS Version : 2009\r\nOS Build : 19044.1348\r\nCurrent ANSI codepage : 1252\r\nPlugins : mimeTools.dll NppConverter.dll NppExport.dll \r\n\r\n\r\n<!--- Feel free to include any other info, such as screenshots, etc -->\r\n',
      reactions: {
        url: 'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922/reactions',
        total_count: 0,
        '+1': 0,
        '-1': 0,
        laugh: 0,
        hooray: 0,
        confused: 0,
        heart: 0,
        rocket: 0,
        eyes: 0,
      },
      timeline_url:
        'https://api.github.com/repos/notepad-plus-plus/notepad-plus-plus/issues/10922/timeline',
      performed_via_github_app: null,
      score: 1.0,
    },
  ],
};
