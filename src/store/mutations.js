
import { ADD_GOODS } from './mutations-type'
export default {
  [ADD_GOODS] (state, { goodsId, img, name, price }) {
    // console.log('mutation', { goods });
    let shopCart = state.shopCart;
    alert(shopCart[goodsId]
    )
    if (shopCart[goodsId]) {
      shopCart.goodsId.num++;
    } else {
      let newGoods = {
        goodsId, img, name, price,
        checked: true,
        num: 1
      }
      shopCart[goodsId] = { ...newGoods };
    }

  }

}