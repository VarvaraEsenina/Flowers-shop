import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-row bg-dark text-light p-2 gap-3 align-items-start user-select-none justify-content-between ">
                <h1>Контактная информация</h1>
 <div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A420b0d4ff0f7022b99b8fd3b103cfbf7a417d20aa690d9302e07a796cef7dab4&amp;source=constructor" width="500px" height="400px" frameborder="0"></iframe>
                </div>

                <ul>
                    <li><i className="bi bi-telephone-inbound" >  8 916 719 87 75</i></li>
                    <li> <i className="bi bi-envelope-paper-heart"> varvaraesenina@gmail.com</i></li>
                </ul>
               
            </footer>
        </>
    )
}