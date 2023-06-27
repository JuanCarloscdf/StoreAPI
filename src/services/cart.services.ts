import { pool } from '../config/mysql'
import { type addProduct, type Cart } from '../interfaces/cart.interface'
export const getCartServ = async (id: string): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL cart_info(${id})`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const postCartServ = async (newCart: Cart): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL fill_cart(${newCart.user_id},'${newCart.quantities}','${newCart.products}');`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const putCartServ = async (newProduct: addProduct): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL add_product_cart(${newProduct.user_id},${newProduct.quantity},${newProduct.product});`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const deleteCartServ = async (deleteCartData: addProduct): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL delete_product_cart(${deleteCartData.user_id},${deleteCartData.product});`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
