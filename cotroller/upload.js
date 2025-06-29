import uploadSchema from '../models/UploadModel.js';

export const createUpload = async (req, res, next) => {
    const { imgUrl, videoUrl } = req.body;

    if (!imgUrl || !videoUrl) {
        res.status(400);
        return next(new Error("files are missign"));
    }
    try {
        const upload = await uploadSchema.create({ imgUrl, videoUrl });
        res.status(201).json({ success: true, upload })
    } catch (err) {
        console.log(err);
        res.status(500);
        next(err);
        // return next(new Error(err.message));
    }
}