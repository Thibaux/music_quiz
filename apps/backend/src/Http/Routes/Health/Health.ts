import express from "express";
import { Show } from "../../Controllers/Health/HealthController";

const HealthRouter = express.Router();

HealthRouter.get('', Show);

export default HealthRouter;