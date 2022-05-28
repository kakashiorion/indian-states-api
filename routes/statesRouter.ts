import express, { Request, Response } from "express";
import { getErrorMessage } from "../methods";
import State, { StateType } from "../models/state";

const statesRouter = express.Router();

//Get all states
statesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const allStates = await State.find();
    res.json(allStates);
  } catch (e) {
    res.status(500).json(getErrorMessage(e));
  }
});

//Get a single state
statesRouter.get("/:stateName", async (req: Request, res: Response) => {
  try {
    const state = await State.findOne({ name: req.params.stateName });
    res.json(state);
  } catch (e) {
    res.status(500).json(getErrorMessage(e));
  }
});

//Creating a state
statesRouter.post("/", async (req: Request, res: Response) => {
  try {
    // const state = await State.create(newState);
    const state = await State.create(req.body);
    res.status(201).json(state);
  } catch (e) {
    res.status(400).json(getErrorMessage(e));
  }
});

//Putting a state
// statesRouter.put("/:stateName", async (req: Request, res: Response) => {

//   try {
//     const state = await State.findOneAndUpdate(
//       { name: req.params.stateName },
//       req.body
//     );
//     res.json(state);
//   } catch (e) {
//     res.status(500).json(getErrorMessage(e));
//   }
// });

//Patching a state
statesRouter.patch("/:stateName", async (req: Request, res: Response) => {
  try {
    const state = await State.findOneAndUpdate(
      { name: req.params.stateName },
      req.body
    );
    res.json(state);
  } catch (e) {
    res.status(500).json(getErrorMessage(e));
  }
});

//Deleting a state
statesRouter.delete("/:stateName", async (req: Request, res: Response) => {
  try {
    const state = await State.findOneAndDelete({ name: req.params.stateName });
    res.json(state);
  } catch (e) {
    res.status(500).json(getErrorMessage(e));
  }
});

export default statesRouter;
