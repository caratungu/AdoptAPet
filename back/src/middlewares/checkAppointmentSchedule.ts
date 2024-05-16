import { NextFunction, Request, Response } from "express";

export const checkAppointmentSchedule = (req: Request, res: Response, next: NextFunction) => {
  const { dateRequest, timeRequest, dateAppointment, timeAppointment, serviceId, userId } = req.body;
  if (!dateRequest || !timeRequest || !dateAppointment || !timeAppointment || !serviceId || !userId) {
    return res.status(400).json({ message: " En el middleware Información incompleta" });
  }
  next();
};
