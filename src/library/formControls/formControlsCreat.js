export const signInControls = [
    {tag: 'input', type: 'email', name: 'email', placeholder: 'Email'},
    {tag: 'input', type: 'password', name: 'password', placeholder: 'Password'}
];

export const signUpControls = [
    {tag: 'input', type: 'text', name: 'username', placeholder: 'Username'},
    {tag: 'input', type: 'email', name: 'email', placeholder: 'Email'},
    {tag: 'input', type: 'password', name: 'password', placeholder: 'Password'},
]

export const settingsControls = [
    {tag: 'input', name: 'picture', placeholder: 'URL of profile picture', required: 'false'},
    {tag: 'input', name: 'username', placeholder: 'Username'},
    {tag: 'textarea', name: 'bio', placeholder: 'Short bio about you', rows: '8', required: 'false' },
    {tag: 'input', name: 'email', placeholder: 'Email'},
    {tag: 'input', name: 'newpassword', placeholder: 'New Password', required: 'false'},
];

export const newArticleControls =  [
    {tag: 'input', name: 'title', placeholder: 'Article Title'},
    {tag: 'input', name: 'about', placeholder: 'What`s this article about'},
    {tag: 'textarea', name: 'article', placeholder: 'Write your article(in markdown)', rows: '8'},
    {tag: 'input', name: 'tags', placeholder: 'Enter tags'},
];

export const commentsControls = [
    {tag: 'textarea', name: 'comment', placeholder: 'Write a commet', rows: '8'},
];