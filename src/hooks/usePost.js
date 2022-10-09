import { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
      // сортировка постов
    const sortedPosts = useMemo(() => { // callback вызывается только когда какая-либо из зависимостей [deeps] меняет свое значение // в нашем случае функция отрабатывает когда мы изменяем параметры сортировки или добавляем пост, но когда вводим что-то в инпут, она не работает, что нам и нужно
        if (sort) {
        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort])) // sort() не возвращает новый массив, а мутирует старый, по этому мы через спред [...posts] разворачиваем старый массив и sort() сортирует уже копию
        } 
        return posts;

    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    // поиск постов
    const searchedAndSortedPosts = useMemo(() => {
        return  sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);

    return searchedAndSortedPosts;
}