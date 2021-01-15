import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';


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
                let body = JSON.parse(request.body)
                console.log("LOL")
                console.log(body)
                // console.log(body.username)
                // console.log(body.email)
                // console.log(body.favorite_movies)
                // return;

                // if (!userDB) {
                    const updateUser = await User.findByIdAndUpdate(
                        id, body
                        // {
                        //     username: body.username,
                        //     email: body.email,
                        //     favorite_movies: body.favorite_movies,
                        // //     // password: newPwdHashed
                        // },
                        // {
                        // new: true,
                        // runValidators: true
                    );
                // } else {
                //     return response.status(400).json({ success: false, message: "Email already exists." })
                // }

                // return response.status(413).json({success: 'teapot', message: updateUser})
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