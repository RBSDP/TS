import express from 'express'

import type { Router, Request, Response } from 'express'

import HealthController from './controller'


export function register() :Router{

    const router = express.Router()
    const controller = new HealthController
    router.get('/',controller.handleHealthCheck.bind(controller))


    return router
}