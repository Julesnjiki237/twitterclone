import jwt from 'jsonwebtoken'

const generateAccessToken = (user) =>{
    const config = useRuntimeConfig()

    return jwt.sign({userId : user.id}, config.jwtAccessSecret, {
        expiresIn: '30m'})
}

const generateRefreshToken = (user) =>{
    const config = useRuntimeConfig()

    return jwt.sign({userId : user.id}, config.jwtRefreshSecret, {
        expiresIn: '4h'})
}

export const generateTokens =(user)=>{
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
        accessToken: accessToken ,
        refreshToken: refreshToken
    }
} 