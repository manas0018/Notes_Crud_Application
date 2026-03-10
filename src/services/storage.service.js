const {ImageKit} = require("@imagekit/nodejs");
const imagekit = new ImageKit({
    privateKey: "private_5VWDTynky07XYTlq2yXUV6z9Y5E=",
});

async function uploadImage(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg",
    });
    return result;
}
module.exports = uploadImage;
