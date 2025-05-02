import http from "http"
import {env} from './env'
import {logger} from "./logger"
import {createApp} from "./APP/index.js"


async function main(){

    try {
        const PORT = +(env.PORT ?? 8000)
        const server = http.createServer(createApp());
        server.listen(PORT, () => {
            logger.info(`server is running on port ${PORT}`)
        })
    } catch (error) {
        logger.error(`erroe starting server`, error)
        
    }
}