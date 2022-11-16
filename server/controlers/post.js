import  TeaDataSchema  from "../models/postMessage.js";

export const getPostsById = async(req, res) => {
    const { id: _id } = req.params;

    try {

        const data = await TeaDataSchema.findById(_id);

        res.status(201).json(data);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async(req, res) => {
    const data = req.body;
    
    const newPost =  new TeaDataSchema(data);
    try {
        await newPost.save();

        res.status(201).json(newPost);
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPosts = async(req, res) => {
    const { limit } = req.query;
    let today = new Date(),
    oneDay = (1000 * 60 * 60 * 24),
    thirtyDays = new Date( today.valueOf() - ( 30 * oneDay)),
    threeSixtyFive = new Date( today.valueOf() - (365 * oneDay)),
    infinify = new Date( today.valueOf() - (999999999 * oneDay))
    
    try {
        
        const data = await TeaDataSchema.find().sort({createdAt: -1}).limit(limit);

        const monthlyWeight = await TeaDataSchema.aggregate([
            {
                '$match': {
                    'createdAt': { $gte: thirtyDays }
                }                
            },
            {
                '$group': {
                    '_id': {
                        '$cond': [
                            {'lt': [ '$createdAt', today ]},
                                '01-30',
                                '0'                                                                       
                        ]
                     },
                     'totalWeight': { '$sum': '$weight'}
                }
            }
       ])
       const annualWeight = await TeaDataSchema.aggregate([
        {
            '$match': {
                'createdAt': { $gte: threeSixtyFive }
            }                
        },
        {
            '$group': {
                '_id': {
                    '$cond': [
                        {'lt': [ '$createdAt', today ]},
                            '31-365',
                            '0'                                                           
                    ]
                 },
                 'totalWeight': { '$sum': '$weight'}
            }
        }
   ])
   const cummulative = await TeaDataSchema.aggregate([
    {
        '$match': {
            'createdAt': { $gte: infinify }
        }                
    },
    {
        '$group': {
            '_id': {
                '$cond': [
                    {'lt': [ '$createdAt', today ]},
                        '01-999999',
                        '0'                                                           
                ]
             },
             'totalWeight': { '$sum': '$weight'}
        }
    }
])
        
        res.status(200).json({data, monthlyWeight, annualWeight, cummulative});
        
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getMot = async(req, res) => {
    let today = new Date(),
    oneDay = (1000 * 60 * 60 * 24),
    thirtyDays = new Date( today.valueOf() - ( 30 * oneDay)),
    threeSixtyFive = new Date( today.valueOf() - (365 * oneDay))


    try {
        const data = await TeaDataSchema.aggregate([
            {
                '$match': {
                    'createdAt': { $gte: threeSixtyFive }
                }                
            },
            {
                '$group': {
                    '_id': {
                        '$cond': [
                            {'lt': [ '$createdAt', thirtyDays ]},
                                '31-365',
                            {
                                '$cond': [
                                    {'lt': [ '$createdAt', thirtyDays ]},
                                    '01-30',
                                    '01'
                            ]
                            }                                                                         
                        ]
                     },
                     'count': { $sum: 1 },
                     'totalWeight': { '$sum': '$weight'}
                }
            }
       ])
    //    console.log(data)
        
        // res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
}

getMot()