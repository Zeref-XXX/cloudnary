import { v2 as cloudinary } from "cloudinary";


const secret = 'Xy-Lckun6tG054MBxh9KmEpl_uc';

cloudinary.config({
    cloud_name: 'ddbyx1xdg',
    api_key: '376664183918778',
    api_secret: secret,
    secure: true
})

export const generateSignature = async (req, res, next) => {
    const { folder } = req.body;
    if (!folder) {
        res.status(400);
        return next(new Error("folder name requireed "))
    }

    try { 
        const timestamp = Math.round((new Date).getTime() / 1000);

        const signature = cloudinary.utils.api_sign_request({
            timestamp, folder
        }, secret)

        res.status(200).json({ timestamp, signature })
    } catch (err) {
        res.status(500)
        console.log(err)
        next(err)
    }


}