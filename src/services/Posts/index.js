import http from '../commons';

const getAll = () => {
  return http.get('/posts');
};

const get = (id) => {
  return http.get(`/posts/${id}`);
};

const post = (data) => {
  return http.post('/posts', data);
};

const put = (id, data) => {
  return http.put(`/posts/${id}`, data);
};

const deletePosts = (id) => {
  return http.delete(`/posts/${id}`);
};

const PostsService = {
  getAll,
  get,
  post,
  put,
  deletePosts
}

export default PostsService;
