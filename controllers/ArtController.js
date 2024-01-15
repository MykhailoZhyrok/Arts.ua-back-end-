import ArtModel from '../models/Art.js'

export const remove = async (req, res) => {
    try {
        const artId = req.params.id;

        const removeDoc = await ArtModel.findOneAndDelete(
            {
                _id: artId
            }
        );
        if (!removeDoc) {
            return res.status(404).json({
                message: "Арт не видалений",
            });
        }
        res.json({
            succes: true,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Не вдалося видалити арт',
        });
    }
}



export const getOne = async (req, res) => {
    try {
        const artId = req.params.id;

        const updatedDoc = await ArtModel.findOneAndUpdate(
            { _id: artId },
            { new: true }
        )

        if (!updatedDoc) {
            return res.status(404).json({
                message: "Арт не знайдений",
            });
        }

        res.json(updatedDoc);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Не вдалося отримати або оновити статтю',
        });
    }
};

export const getArts = async (req, res) => {
    try {
        const arts = await ArtModel.find().exec();
        res.json(
            arts)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося отримати'
        })

    }
}

export const createArt = async (req, res) => {
    try {
        const doc = new ArtModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            price: req.body.price,
        })

        const art = await doc.save();

        res.json({
            art,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося запостити'
        })

    }
}

export const update = async (req, res) => {
    try {
        const artId = req.params.id

        const updatedPatchDoc = await PostModel.updateOne(
            { _id: artId },
            {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
            }
        );
        if (!updatedPatchDoc) {
            return res.status(404).json({
                message: "Арт не оновлений",
            });
        }
        res.json({
            succes: true
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося оновити'
        })

    }

}