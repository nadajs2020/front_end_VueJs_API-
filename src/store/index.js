import {createStore} from 'vuex';

const remote_api_url = 'http://localhost:9000/api/user';
const store = createStore({
    state() {
        return {
            ajax_urls: {
                user_url_get: `${remote_api_url}/getuser`,
                user_url_post: `${remote_api_url}/register`,
            },
        }
    },
});

export default store;


