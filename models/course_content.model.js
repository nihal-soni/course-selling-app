import mongoose from "mongoose";

const courseContentSchema = new mongoose.Schema(
    {
        courseId:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        title: {
            type: String,
            required: true
        },
        content:
        {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const CourseContent = mongoose.model("CourseContent", courseContentSchema);
export default CourseContent;
