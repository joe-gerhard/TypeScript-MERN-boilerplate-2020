import { Request, Response } from 'express';

const getUser = (req: Request, res: Response): void => {
    res.json(req.user);
};

export default {
    getUser,
};
