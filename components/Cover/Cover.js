import Image from "next/image";

export const Cover = ({children, background}) => {
    return (
        <div className="h-screen relative">
            <Image alt="Cover" src={background} layout="fill" objectFit="cover" />
            {children}</div>
    )
}