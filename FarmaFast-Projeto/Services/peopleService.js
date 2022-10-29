'use strict';

import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
});
class PeopleService {
    constructor() {
    }

    //TODO: should be named as ListAll
    get() {

        api.get('/people', (req, res) => {
            const content = readFile()
            res.send(content)
        }).then(res => console.log(res));
    };

    //TODO: should be named as Save()
    post() {



        api.post('/people', (req, res) => {
            const { name, cpf, dtbirth, password, repeatpassword, perfil } = req.body
            const currentContent = readFile()
            const id = Math.random().toString(32).substring(2, 9)
            currentContent.push({ id, name, cpf, dtbirth, password, repeatpassword, perfil })
            writeFile(currentContent)
            res.send({ id, name, cpf, dtbirth, password, repeatpassword, perfil })
        }).then(res => console.log(res));

    };

    Update() {

        api.put(('people/{id}', (req, res) => {
            const { id } = req.params

            const { name, cpf, dtbirth, password, repeatpassword, perfil } = req.body

            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)

            const { id: cId, name: cName, cpf: cCpf, dtbirth: cDtbirth, password: cPassword, repeatpassword: cRepeatpassword, perfil: cPerfil } = currentContent[selectedItem]

            const newObject = {
                id: cId,
                name: name ? name : cName,
                cpf: cpf ? cpf : cCpf,
                dtbirth: dtbirth ? dtbirth : cDtbirth,
                password: password ? password : cPassword,
                repeatpassword: repeatpassword ? repeatpassword : cRepeatpassword,
                perfil: perfil ? perfil : cPerfil
            }

            currentContent[selectedItem] = newObject
            writeFile(currentContent)

            res.send(newObject)
        })).then(res => console.log(res));
    };

    Remove() {
        api.delete(('people/:id', (req, res) => {
            const { id } = req.params
            const currentContent = readFile()
            const selectedItem = currentContent.findIndex((item) => item.id === id)
            currentContent.splice(selectedItem, 1)
            writeFile(currentContent)
            res.send(true)
        })).then(res => console.log(res));
    }
};

export default PeopleService;