import React from "react";

const ComponentPaginator = props => {
  return (
    <nav className="page navigation">
      <ul className="pagination">
        {/*FIRST AND PREVIOUS*/}
        <li
          className={`page-item ${
            !props.paginatorData.has_previous_page ? "disabled" : ""
            }`}
        >
          <button className="page-link" onClick={() => props.setPagination(1)}>
            First
          </button>
        </li>
        <li
          className={`page-item ${
            !props.paginatorData.has_previous_page ? "disabled" : ""
            }`}
        >
          <button
            className="page-link"
            onClick={() =>
              props.setPagination(props.paginatorData.previous_page)
            }
          >
            Previous
          </button>
        </li>
        {/*FIRST AND PREVIOUS END*/}

        {/*PAGINATION*/}
        {props.pages.map((page, index) => {
          return (
            <li
              key={index}
              className={`page-item ${
                props.paginatorData.current_page === page ? "active" : ""
                }`}
            >
              <button
                className="page-link"
                onClick={() => props.setPagination(page)}
              >
                {page}
                <span className="sr-only">(current)</span>
              </button>
            </li>
          );
        })}
        {/*PAGINATION END*/}

        {/*NEXT AND LAST*/}
        <li
          className={`page-item ${
            !props.paginatorData.has_next_page ? "disabled" : ""
            }`}
        >
          <button
            className="page-link"
            onClick={() => props.setPagination(props.paginatorData.next_page)}
          >
            Next
          </button>
        </li>
        <li
          className={`page-item ${
            !props.paginatorData.has_next_page ? "disabled" : ""
            }`}
        >
          <button className="page-link"  
          onClick={() => props.setPagination(props.paginatorData.total_pages)}> 
          Last
          </button>
        </li>
        {/*NEXT AND LAST END*/}
      </ul>
    </nav>
  );
};

export default ComponentPaginator;