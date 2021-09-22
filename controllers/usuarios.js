const {response, request} = require('express');

const usuariosGet = (req, res = response) => {
    res.json({
        msg : 'Get API - Controller'
    })
};

const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;
    res.json({
        msg : 'Post API - Controller',
        nombre,
        edad
    })
};

const usuariosPut = (req = request, res = response) => {
    const {id} = req.params;
    res.json({
        msg : 'Put API - Controller',
        id
    })
};

const usuariosDelete = (req = request, res = response) => {
    const {q, nombre ="No name", apikey, page = "1", limit} = req.query;
    res.json({
        msg : 'Delete API - Controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg : 'Patch API - Controller'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}