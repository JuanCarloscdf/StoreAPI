import { Router } from 'express'
import { readdirSync } from 'fs'
const router = Router()

const DIR: string = __dirname

readdirSync(DIR).forEach((filename) => {
  const fixedFileName = filename.split('.')[0]
  if (fixedFileName !== 'index') {
    void import(`./${fixedFileName}`).then((elementRoute) => {
      router.use(`/${fixedFileName}`, elementRoute.router)
    })
    console.log(fixedFileName)
  }
})
export { router }
