import { Router } from "express";
import usersRouter from "./userRouter";
import appointmentsRouter from "./appointmentsRouter";
import serviceRouter from "./servicesRouter";
import petsRouter from "./petsRouter";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/turns", appointmentsRouter);
router.use("/services", serviceRouter);
router.use("/pets", petsRouter)

export default router;
