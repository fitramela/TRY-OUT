import { useEffect, useState } from "react"

interface ChatWhatAppProps {
    children: React.ReactNode,
    phone: string,
    message: string

}

const ChatWhatApp = (
    {
    children,
    phone,
    message,
    ...resprop
    } : ChatWhatAppProps ) => {
        const isMobile = true
        const [isMobileDevice , setMobileDevice] = useState(false)

        useEffect( () => {
            setMobileDevice(isMobile)
        }, [isMobile])


        const BaseUrl = isMobileDevice ? 
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}` : 
        `https://web.whatapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
    return ( 
        <>
        <a href={BaseUrl} 
        target="_blank"
        rel="noreferer noopener"
        {...resprop}
        >
            {children}
        </a>
        </>
    )
}

export default ChatWhatApp