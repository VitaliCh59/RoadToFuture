import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

// 1. Добавляем стартовые данные
let state = {
    postData: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 12},
        {id: 2, message: 'It \'s my first post', likeCounts: 2},
        {id: 3, message: 'It \'s my second post', likeCounts: 30}
    ]
};

//вызываем профайл редьюсер, передаем ей стэйт и экшон заранее спланированный(предсказуемый) и получим нью стэйт и проверим, такой ли этот новый стейт, который мы хотели
test('length of post should be incremented', () => {
    //2. Добавляем экшон
    let action = addPostActionCreator("It-kamasutra.com");
    let newState = profileReducer(state, action);

    //3. Проверяем свое ожидание
    expect(newState.postData.length).toBe(4);
});

test('message of new post should be correct', () => {
    //2. Добавляем экшон
    let action = addPostActionCreator("It-kamasutra.com");
    let newState = profileReducer(state, action);

    //3. Проверяем свое ожидание
    expect(newState.postData[3].message).toBe("It-kamasutra.com");
});

//TODO
test('after deleting length of messages should be decrement ', () => {
    //2. Добавляем экшон
    let action = deletePost(3);
    let newState = profileReducer(state, action);

    //3. Проверяем свое ожидание
    expect(newState.postData.length).toBe(3);
});

test('incorrect number of delete ID message ', () => {
    //2. Добавляем экшон
    let action = deletePost(11111);
    let newState = profileReducer(state, action);

    //3. Проверяем свое ожидание
    expect(newState.postData.length).toBe(3);
});