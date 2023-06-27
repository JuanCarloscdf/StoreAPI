import { pool } from '../config/mysql'
import { type NewProduct } from '../interfaces/products.interface'
export const getProductsServ = async (): Promise<any> => {
  try {
    const [dbResponse] = await pool.query('CALL get_products()')
    return dbResponse
  } catch (error) {

  }
}
export const getProductServ = async (id: string): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL get_product(${id})`)
    return dbResponse
  } catch (error) {

  }
}
export const postProductServ = async (newProduct: NewProduct): Promise<any> => {
  try {
    console.log(newProduct)
    const [dbResponse] = await pool.query(`CALL create_product("${newProduct.name}",${newProduct.price},${newProduct.discount},"${newProduct.description}",${newProduct.stock},${newProduct.sold},"${newProduct.brand}",${newProduct.user_id},"${newProduct.category}","${newProduct.images}");`)
    return dbResponse
  } catch (error) {
    console.log(error)
  }
}
export const putProductServ = async (id: string, newProduct: NewProduct): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL update_product("${newProduct.name}",${newProduct.price},${newProduct.discount},"${newProduct.description}",${newProduct.stock},${newProduct.sold},"${newProduct.brand}",${newProduct.user_id},"${newProduct.category}","${newProduct.images}",${id});`)
    return dbResponse
  } catch (error) {

  }
}
export const patchProductServ = async (): Promise<any> => {
  try {
    const dbResponse = await pool.query('SELECT 1+1 AS result ')
    return 'patchProductServ'
  } catch (error) {

  }
}
export const deleteProductServ = async (id: string): Promise<any> => {
  try {
    const [dbResponse] = await pool.query(`CALL delete_product(${id})`)
    return dbResponse
  } catch (error) {

  }
}
