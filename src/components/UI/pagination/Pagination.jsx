import React from 'react';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div>
            <div className="page__wrapper">
                {pagesArray.map(p => 
                    <span 
                        key={p}
                        onClick={() => changePage(p)} 
                        className={page === p ? 'page page__current' : 'page'}>{p}</span>
                )}
            </div>
        </div>
    );
};

export default Pagination;