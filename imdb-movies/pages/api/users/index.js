import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

dbConnect();

export default async (request, response) => {
    const { method } = request;

    switch (method) {
        case 'GET': 
            try{
                const users = await User.find({});

                response.status(200).json({ success: true, data: users });
            } catch (error) {
                response.statut(400).json({ success: false, data: error});
            }
            break;
        
        case 'POST':
            try{
                const bcrypt = require('bcryptjs');
                const pwdHashed = await bcrypt.hash(request.body.password, 10); // login => await bcrypt.compare(request.body.password, hashPwd)


                const user = await User.create({
                    username: request.body.username,
                    email: request.body.email,
                    password: pwdHashed
                });

                response.status(201).json({ success: true, data: user });
            } catch (error) {
                response.status(400).json({ success: false, data: error });
            }
            break;
        default:
            response.status(400).json({ success: false });
            break;
    }
}