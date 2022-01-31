import React from 'react';

import { Header } from '../'

export default function MainPart() {
    return (
        <div className="bg-yellow-500 w-full">
            <Header />
            <div className="grid justify-items-center gap-4">
                <div>Mainpart</div>
                <div className="border border-red-500 w-11/12 h-96">Chat</div>
                <div className="border border-blue-500 w-11/12 h-20">input</div>
            </div>
        </div>
    );
}
