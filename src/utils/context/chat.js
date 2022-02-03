import { createContext } from 'react'

const chatContext = createContext({
    receiver: "",
    setReceiver: (receiver) => { }

})
export default chatContext