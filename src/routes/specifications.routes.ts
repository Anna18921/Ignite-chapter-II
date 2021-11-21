import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";
import { listSpecifications } from "../modules/cars/useCases/listSpecifications";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response) => {
  return listSpecifications.handle(request, response);
});

export { specificationsRoutes };
