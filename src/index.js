import http from "http"
import {env} from './env'
async function main(){

    try {
        const PORT = +(env.PORT ?? 8000)
        const server = http.createServer();
        server.listen(PORT)
    } catch (error) {
        
    }
}