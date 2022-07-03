import { Router, Request, Response } from "express";
import { sendEmail } from "../services/email.service";

class PostRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async postEmail(req: Request, res: Response): Promise<void> {
    const resp = await sendEmail(req.body.message);
    if (resp) {
        res.json("email sent, success");
    } else {
        res.json("email not sent, error");
    }
  
  }

  routes() {
    this.router.post("/send/email", this.postEmail);
  }
}

const postRoutes = new PostRouter();

export default postRoutes.router;
