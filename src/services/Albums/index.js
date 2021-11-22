import http from '../commons';

const getAll = () => {
  return http.get('/albums');
};

const get = (id) => {
  return http.get(`/albums/${id}`);
};

const post = (data) => {
  return http.post('/albums', data);
};

const put = (id, data) => {
  return http.put(`/albums/${id}`, data);
};

const deleteAlbuns = (id) => {
  return http.delete(`/albums/${id}`);
};

const AlbumsService = {
  getAll,
  get,
  post,
  put,
  deleteAlbuns
}

export default AlbumsService;
