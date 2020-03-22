//props to pass
//totalCount
//rowsPerPage
//handlePagination Fn

import React from 'react';
import ReactPaginate from "react-paginate";
import './ReactPaginationComponent.scss';

const ReactPaginationComponent = ({totalCount, rowsPerPage = 10, handlePaginationClick, offset = 0}) =>
    totalCount > rowsPerPage && (
        <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={Math.ceil(totalCount / rowsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePaginationClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            forcePage={offset / rowsPerPage}
        />
    );

export default ReactPaginationComponent;