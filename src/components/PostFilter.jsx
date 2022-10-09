import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск..."
            />  
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})} // передаем в setSelectedSort то что приходит с самого селекта, те ту опцию, что выбрал сам пользователь
                defaultValue="Сортировка по:"
                options={[
                    {value: 'title', name: 'По заголовку'},
                    {value: 'body', name: 'По описанию '}
                ]}
            />
        </div>
    );
};

export default PostFilter;