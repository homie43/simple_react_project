import React from 'react';
import cl from "./MyModal.module.css";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.MyModal]; // вынесли стили в отдельную переменную

    if (visible === true) { // конструкция повзоляет определить добавлять ли класс  active или нет 
        rootClasses.push(cl.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}> {/* делаем массив для того чтобы добавить два класса и джоин с пустой строкой(возвращает строку где будут два класса склееных по пробелу) */}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}> {/* stopPropagation прекращает передачу события и соовтетсвенно всплытия */}
            {children}
            </div>
        </div>
    );
};

export default MyModal;