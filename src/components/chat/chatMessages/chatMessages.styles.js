const styles = {
    ChatDiv: [
        `overflow-auto border border-red-500 w-11/12 h-96`
    ],
    MessageDiv: [
        `grid`
    ],
    MessageFlexDiv: [
        `flex`
    ],
    H2: [
        `mx4`
    ],
    MessageDateTime: [
        `font-light text-xs`
    ],
    TextDiv: [
        `grid w-full`
    ],
    TextP: ({ userUID, message }) => [
        `mx-4 ${userUID === message.senderUID ? `justify-self-end` : `justify-self-start`} `
    ]

}

export default styles