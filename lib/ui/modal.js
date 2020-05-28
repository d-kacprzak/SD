export default function (window, title = 'Selected item') {
    const modalBg = window.document.createElement('div');
    const modal = window.document.createElement('div');
    const modalHeader = window.document.createElement('div');
    const modalTitle = window.document.createElement('h3');
    const modalBody = window.document.createElement('div');
    const modalFooter = window.document.createElement('div');
    const btnClose = window.document.createElement('span');
    const btnCloseFooter = window.document.createElement('button');

    modalBg.appendChild(modal);
    modalBg.classList.add('modal-bg');
    modal.classList.add('modal');

    // modal title
    modal.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalTitle.innerText = title;
    modalHeader.appendChild(btnClose);
    btnClose.classList.add('close');
    modalHeader.classList.add('modal-header');

    // modal body
    modal.appendChild(modalBody);
    modalBody.classList.add('modal-body');

    // modal footer
    modal.appendChild(modalFooter);
    modalFooter.classList.add('modal-footer');
    modalFooter.appendChild(btnCloseFooter);
    btnCloseFooter.innerText = 'Close';
    btnCloseFooter.classList.add('btn');
    return modalBg
}
