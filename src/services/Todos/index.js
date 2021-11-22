import http from '../commons';

const getAll = () => {
  return http.get('/todos');
};

const get = (id) => {
  return http.get(`/todos/${id}`);
};

const post = (data) => {
  return http.post('/todos', data);
};

const put = (id, data) => {
  return http.put(`/todos/${id}`, data);
};

const deleteAlbuns = (id) => {
  return http.delete(`/todos/${id}`);
};

const TodosService = {
  getAll,
  get,
  post,
  put,
  deleteAlbuns
}

export default TodosService;
