import request from 'utils/request';

export const Get = () => {
  return request({
    url: '/starships',
    method: 'get'
  });
};
