import type { Request, Response } from "express";


class HealthController {
    public handleHealthCheck(reg : Request ,res: Response ){
        return res.json({
            status: "Healthy"
        })
    }
}


export default HealthController