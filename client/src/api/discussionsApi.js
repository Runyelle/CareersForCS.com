import client from "./clientApi"

//for grabbing and displaying discussions
export const getDiscussions = () => 
    client.get("/discussions");

//for creating discussions
export const createDiscussion = (data, token) =>
    client.post("/discussions/create", data, {
        headers: {Authorization: `Bearer ${token}`}
    });

// for searching by tags
export const getByTag = (tag) =>
    client.get(`/discussions/tag/${tag}`);

// for editing owned discussions
export const updateDiscussion = (id, data, token) =>
    client.put(`/discussions/${id}`. data, {
        headers: {Authorization: `Bearer ${token}`}
    });

//for deleting discussions from DB
export const deleteDiscussions = (id, token) =>
    client.delete(`/discussions/${id}`, {
       headers: {Authorization: `Bearer ${token}`} 
    });