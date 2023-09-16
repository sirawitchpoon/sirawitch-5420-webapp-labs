import axios from 'axios';

const access_token = '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';

axios.get('https://api.github.com/user', {
    headers: {
        'Authorization': `token ${access_token}`
    }
})
.then((res) => {
    const { name, location } = res.data;

    console.log('GitHub user name is', name, 'who lives in' ,location);
})
.catch((error) => {
    console.error(error);
});
