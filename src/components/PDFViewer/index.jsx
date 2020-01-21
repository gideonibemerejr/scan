
import React, { useState } from 'react';
import Pdf from '@mikecousins/react-pdf'
import { Modal,  } from 'reactstrap';


const ModalExample = (props) => {
    const {

        className,
        pdf
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);



    return (
        <div>
            <button className='manual' onClick={toggle}><i  className="far fa-file-pdf fa-4x "/></button>
            <Modal isOpen={modal} toggle={toggle} className={className} backdrop={true}>
                  <MyPdfViewer pdf={pdf} />
            </Modal>
        </div>
    );
};

export default ModalExample;



const MyPdfViewer = ({ pdf }) => {
    const [page, setPage] = useState(1);

    const canvasTag =  document.querySelector('#pdf canvas')


    if (canvasTag) {
        canvasTag.style.height = '100%';
        canvasTag.style.width = '100%';
    }
    return (
        <div id='pdf' className="p-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <Pdf file={pdf.file} page={page} />

            <nav className='mt-4 '>
                <ul className="pager d-flex list-unstyled justify-content-between">
                    <li className="previous">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            Previous Page
                        </button>
                    </li>
                    <li className='ml-4 mr-4'>
                        page {page} / {pdf.pages}
                    </li>
                    <li className="next">
                        <button
                            disabled={page === pdf.pages}
                            onClick={() => setPage(page + 1)}
                        >
                            Next Page
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
