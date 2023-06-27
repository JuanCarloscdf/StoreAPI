import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'example',
  port: 3306,
  database: 'store'
})

pool.getConnection().then(connection => {
  console.log('Conexión exitosa a la base de datos.')
  connection.release() // liberar la conexión después de usarla
}).catch(error => {
  console.error('Error de conexión a la base de datos: ', error.message)
})
