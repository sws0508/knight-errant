import http from './http';

// 轮播图数据


// 首页的推荐
export function getRecommend(data) {
  return http.post('/home/recommend', data)
}

// 分类页的数据
export function getClassifyList(data){
  return http.post('/classify',data)
}

//详情页的数据
export function getDetailInfo(data){
  return http.post('/detail',data)
}

export function getRecommends(params) {
  return http.get('/recommend', params)
}