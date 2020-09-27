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