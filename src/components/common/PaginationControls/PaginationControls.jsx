import React from 'react';
import PaginationControlItem from "./PaginationControlItem";

const PaginationControls = (props) => {
    // props.currentPage - номер текущей страницы
    // props.pageCount - количество страниц для пагинации
    // props.onItemClick - обработчик клика по элементу пагинатора
    const SKIP_PAGES = 'SKIP_PAGES';

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    };

    let getPaginationControls = () => {

        let pageCount = props.pageCount;
        let currentPage = props.currentPage;

        if (pageCount > 7) {
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(pageCount - 1, currentPage + 1);

            let pageList = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (pageCount - endPage) > 1;
            const spillOffset = 5 - (pageList.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pageList = [SKIP_PAGES, ...extraPages, ...pageList];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pageList = [...pageList, ...extraPages, SKIP_PAGES];
                    break;
                }

                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pageList = [SKIP_PAGES, ...pageList, SKIP_PAGES];
                    break;
                }
            }
            return [1, ...pageList, pageCount];
        }
        return range(1, pageCount);

    };

    return (
        <div className="pagination-controls">
            {getPaginationControls().map(pageNumber => {
                if (pageNumber === SKIP_PAGES) return <span className="pagination-controls__item">...</span>;
                return <PaginationControlItem pageNumber={pageNumber}
                                              key = {pageNumber}
                                              active={pageNumber === props.currentPage + 1}
                                              onClick = {() => {
                                                  props.onItemClick(pageNumber - 1)
                                              }}/>
            })}
        </div>
    )
};

export default PaginationControls;

