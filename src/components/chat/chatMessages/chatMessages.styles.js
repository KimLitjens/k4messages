const styles = {
    ChatDiv: [
        `overflow-auto border border-accent w-11/12 h-96`
    ],
    MessageDiv: [
        `grid`
    ],
    MessageFlexDiv: [
        `flex`
    ],
    H2: [
        `mx-2 text-secondAccent`
    ],
    MessageDateTime: [
        `font-light text-xs text-accent`
    ],
    TextDiv: [
        `grid w-full text-secondAccent`
    ],
    TextP: ({ userUID, message }) => [
        `mx-4 ${userUID === message.senderUID ? `justify-self-end ` : `justify-self-start `} `
    ]

}

export default styles