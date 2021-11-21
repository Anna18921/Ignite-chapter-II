import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(
    private createSpecificationsService: CreateSpecificationUseCase
  ) { }

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationsService.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
