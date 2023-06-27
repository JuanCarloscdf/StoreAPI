
import { pool } from '../config/mysql'
import { type User } from '../interfaces/user.interface'
import { hashPassword } from '../utils/bcrypt.handler'
export const getUsersServ = async (): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query('CALL users();')
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const getUserServ = async (id: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query(`CALL user(${id})`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
    throw (error)
  }
}

/* app.post('/users', async (req: Request, res: Response) => {
  try {
    const newUser = req.body
    const hashedPassword = await hashPassword(newUser.password)

    const result = await db.query('SELECT * FROM users WHERE email = ?', [newUser.email])
    const existingUser = result[0]

    if (existingUser) {
      return res.status(409).json({ message: 'El correo electrónico ya está en uso' })
    }

    await db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [newUser.name, newUser.email, hashedPassword])

    return res.status(201).json({ message: 'Usuario creado exitosamente' })
  } catch (error) {
    console.error(`Error al crear usuario: ${error.message}`)

    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'El correo electrónico ya está en uso' })
    }

    return res.status(500).json({ message: 'Se ha producido un error al crear el usuario' })
  }
})
 */
export const postUserServ = async (newUser: User): Promise<object> => {
  try {
    const [userEmail] = await pool.query(`SELECT * FROM user WHERE email='${newUser.email}'`) as any[]
    const [userCellphone] = await pool.query(`SELECT * FROM user WHERE cellphone='${newUser.cellphone}'`) as any[]
    console.log(userCellphone)
    if (userEmail.length !== 0) {
      return { message: 'email_error' }
    }

    if (userCellphone.length !== 0) {
      return { message: 'cellphone_error' }
    }
    const hashedPassword = await hashPassword(newUser.password)
    const [dbResponse] = await pool.query(`INSERT INTO user (first_name,last_name,email,password,cellphone,user_type_id) VALUES ('${newUser.first_name}','${newUser.last_name}','${newUser.email}','${hashedPassword}','${newUser.cellphone}',${newUser.user_type_id});`) as any[]
    return { message: 'user created', data: dbResponse }
  } catch (mysqlError: any) {
    console.log(mysqlError)
    return mysqlError
  }
}

export const patchUserServ = async (id: number, atribute: string, value: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query('SELECT 1 + 1 AS result')
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const deleteUserServ = async (id: string): Promise<any> => {
  try {
    const [dataBaseRes] = await pool.query(`DELETE FROM user WHERE user_id=${id};`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
export const putUserServ = async (newUser: User, id: string): Promise<any> => {
  try {
    console.log(newUser)
    const hashedPassword = await hashPassword(newUser.password)
    const [dataBaseRes] = await pool.query(`UPDATE user SET first_name='${newUser.first_name}',last_name='${newUser.last_name}',email='${newUser.email}',password='${hashedPassword}',cellphone='${newUser.cellphone}',user_type_id=${newUser.user_type_id} WHERE user_id=${id};`)
    return dataBaseRes
  } catch (error) {
    console.log(error)
  }
}
