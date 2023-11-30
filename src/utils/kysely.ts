import 'dotenv/config'
import { Kysely } from 'kysely'
import { PlanetScaleDialect } from 'kysely-planetscale'
import { DB } from 'kysely-codegen';

export const db = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  })
})