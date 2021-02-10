import ajax from './ajax'
const BASE_URL = 'http://demo.itlike.com/web/xlmc';


/***
 * 首页
*/
// 图片文本信息
export const getHomeData = () => ajax(BASE_URL + '/api/homeApi');

// 添加到购物车
export const addGoodsToCart = (user_id, goods_id, goods_name, goods_price, small_image) => ajax(BASE_URL + '/api/cart/add', { user_id, goods_id, goods_name, goods_price, small_image }, 'POST');


/***
 * 分类
 * */

export const getCategories = () => ajax(BASE_URL + '/api/homeApi/categories');
export const getCategoriesDetail = (preParams) => ajax(BASE_URL + '/api/homeApi/categoriesdetail' + preParams);