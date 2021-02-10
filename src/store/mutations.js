
import { ADD_GOODS } from './mutations-type'
export default {
  [ADD_GOODS] (state, { goodsId, goodsName, smallImage, goodsPrice }) {
    let shopCart = state.shopCart;

    if (shopCart[goodsId]) {
      shopCart[goodsId]['num']++;
    } else {
      shopcart[goodsId] = {
        'id': goodsId,
        'num': 1,
        'name': goodsName,
        'img': smallImage,
        'price': goodsPrice
      }
    }

    state.shopCart = { ...shopCart };
    sessionStorage.setItem('list', JSON.stringify(state.shopCart));
  }

}