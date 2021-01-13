import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';
// const bcrypt = require('bcryptjs');


dbConnect();

export default async (request, response) => {
    const {
        query: { id },
        method
    } = request;

    switch(method) {
        case 'GET':
            try {
                const user = await User.findById(id);

                if (!user) {
                    return response.status(400).json({ success: false, message: 'User does not exist.' });
                }

                response.status(200).json({ success: true, data: user });
            } catch (error) {
                response.status(400).json({ success: false, data: error });
            }
            break;

        case 'PUT':
            try {
                // const newPwdHashed = await bcrypt.hash(request.body.password, 10);

                // const userDB = await User.findOne({ "email": request.body.email });

                console.log(request.body.email)
                console.log(request.body.username)
                console.log(request.body._id)



                // if (!userDB) {
                    const updateUser = await User.findByIdAndUpdate(
                        request.body._id,
                        {
                            username: request.body.username,
                            email: request.body.email,
                            // password: newPwdHashed
                        },
                        // {
                        // new: true,
                        // runValidators: true
                    );
                // } else {
                //     return response.status(400).json({ success: false, message: "Email already exists." })
                // }

                if (!updateUser) {
                    return response.status(400).json({ success: false, message: 'User does not exist.' });
                }

                response.status(200).json({ success: true, data: updateUser });
            } catch (error) {
                response.status(400).json({ success: false, data: error });
            }
            break;

        case 'DELETE':
            try {
                const user = await User.findOne({ _id: id });
                const username = user.username;                
                const deleteUser = await User.deleteOne({ _id : id });
                
                if (!deleteUser) {
                    return response.status(400).json({ success: false, message: 'User does not exist.'});
                }

                response.status(200).json({ success: true, message: `User ${username} deleted successfully.` });
            } catch (error) {
                response.status(400).json({ success: false, data: error });
            }
            break;
        default:
            response.status(400).json({ success: false });
            break;
    }
}