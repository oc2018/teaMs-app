import jwt from 'jsonwebtoken';

const Auth = async( req, res, next ) => {

    try {
        // console.log(req.userId)
        // const token = req.headers.authorization.split(" ")[1];

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcnRpbkBnbWFpbC5jb20iLCJpZCI6IjYyZjlkOTJiMzQxMmVkOTM4MDY0NmQxMSIsImlhdCI6MTY2ODU4MDIyNSwiZXhwIjoxNjY4NjIzNDI1fQ.FPlwm782dlY3yNx0TSAKcpIW2CzDlbqcPPxwF5-0IOw"
    
        if(!token) return res.status(404).json({ message: `Not Authorozed`});
    
        let decodedData = jwt.verify(token, 'secret');
    
        req.userId = decodedData.id

    
        next()     
        
    } catch (error) {
        res.status(401).json({ message: `Not Authorized`})
    }
}

export default Auth;