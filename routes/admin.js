import { Router } from "express";

const adminRouter = Router();



adminRouter.post("/signup", (req, res) => {
  res.json(
    {
     message: "Signup endpoint"
     }
    );
});

adminRouter.post("/signin", (req, res) => {
  res.json(
    { 
        message: "Signin endpoint" 
    }
);
});

adminRouter.post("/course",   function (req, res) {
    res.json({
        message: "course endpoint admin"
    })
})


adminRouter.put("/course", (req, res) => {
  res.json(
    {
     message: "update courses endpoint"
     }
    );
});

adminRouter.get("/course/bulk", (req, res) => {
  res.json(
    { 
        message: "all the courses" 
    }
);
});

export {adminRouter}