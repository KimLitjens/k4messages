import React, { useState } from 'react'

import {
    ChannelsBar,
    MainPart,
    SecondSidebar
} from '../../components'
import chatContext from '../../utils/context/chat'

export default function MainPage() {
    const [receiver, setReceiver] = useState();

    return (
        <chatContext.Provider value={{ receiver, setReceiver }} >
            <div className="flex text-center">
                <ChannelsBar />
                <SecondSidebar />
                <MainPart />
            </div>
        </chatContext.Provider>

    );
}
