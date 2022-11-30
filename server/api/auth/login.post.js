import { getUserByUsername } from "~~/server/db/users"
import bcrypt from "bcrypt"
import { sendError } from "h3"
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt"
import { userTransformer } from "~~/server/transformers/user"
import { createRefreshToken } from "~~/server/db/refreshTokens"


export default defineEventHandler( async(event) =>{

    const body = await readBody(event)

    const {username, password} = body

    if(!username || !password){
        return sendError(event, createError({
            statusCode: 400, statusMessage: "Invalid username or password"
        }))
    }

    //C'est l'utilisateur enregistre

    const user = await getUserByUsername(username)

    if(!user){
        return sendError(event, createError({
            statusCode: 400, statusMessage: "Invalid username or password"
        }))
    }

    //comparaison des passwords

    const doesThepasswordsMatch = await bcrypt.compare(password, user.password)

    if(!doesThepasswordsMatch){
        return sendError(event, createError({
            statusCode: 400, statusMessage: "Invalid username or password"
        })) 
    }
    //generation des tokens
        //acces aux tokens
        //rafraichir le token

        const {accessToken, refreshToken} = generateTokens(user)

        //On sauvegarde notre refreshToken dans notre base de donnee
        await createRefreshToken({
            token: refreshToken,
            userId: user.id
        })

        //On ajoute aussi http only cookie
        sendRefreshToken(event, refreshToken)


    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})