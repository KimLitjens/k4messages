import React from 'react';
import { Friends } from '../'

export default function SecondSidebar() {
    return (
        <div className="bg-yellow-500 h-screen w-52 border-x-2 border-rose-500">
            <div className="bg-yellow-600 h-12">Search</div>
            <Friends />
        </div>
    );
}
