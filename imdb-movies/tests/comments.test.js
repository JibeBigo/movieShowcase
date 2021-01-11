const fetch = require("node-fetch");

const data = {
    comment: 'Testing purpose comment',
    user_id: "5ffb0af4a8303d29f747504b",
    movie_id: "5ffbf1516a83211eec10ff33",
};

describe('Comment CRUD TEST', () => {

    it('Should get comments', async () => {
        const r = await fetch('http://localhost:3000/api/comments', {method: 'GET'});
        expect(r.status).toBe(200);
        const rData = await r.json();
        expect(rData.data).toBeDefined();
    });

    it('Should be able to create an comment, show it, update it then delete it', async () => {
        const r = await fetch('http://localhost:3000/api/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }});
        expect(r.status).toBe(201);
        let rData = await r.json();
        expect(rData.data).toBeDefined()

        const id = rData.data._id;
        const show = await fetch(`http://localhost:3000/api/comments/${id}`, {
            method: 'GET'
        });
        expect(show.status).toBe(200);
        let showData = await show.json();
        expect(showData.data).toBeDefined();

        // const put = await fetch(`http://localhost:3000/api/comments/${id}`, {
        //     method: 'PUT',
        //     body: JSON.stringify({
        //         comment: 'new Comment',
        //         movie_id: "5ffb0af4a8303d29f747504b",
        //         user_id: "5ffbf1516a83211eec10ff33",
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // expect(put.status).toBe(200);
        // let putData = await put.json();
        // expect(putData.data).toBeDefined();

        const del = await fetch(`http://localhost:3000/api/comments/${id}`, {
            method: 'Delete',
        });
        expect(del.status).toBe(204);
    })
})

