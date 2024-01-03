import express from "express";
import { Show } from "src/Http/Controllers/Health/HealthController";

const HealthRouter = express.Router();

HealthRouter.get('', Show);

export default HealthRouter;