import {MongoClient} from "mongodb"

export async function Collection<TSchema extends Document>(collectionName: string) {
    let db: MongoClient = await MongoClient.connect("mongodb://localhost:27017", {
        auth: {
            password: "root",
            username: "root"
        }
    })

    let dbo = db.db("test")
    return dbo.collection<TSchema>(collectionName)

}