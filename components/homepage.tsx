import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image'

export default function HomePage() {
    const [open, setOpen] = useState(false)
    const [postText, setPostText] = useState('')
    const router = useRouter()
    const dropdown = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!open) return;
            function handleClick(event: { target: any }) {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setOpen(false);
            }
        }

        window.addEventListener("click", handleClick);

        return () => window.removeEventListener("click", handleClick);
    }, [open]);

    useEffect(() => {
        if (typeof window === 'object') {
        if(open){
            router.push('/#makepost')
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'unset';
        }
        }
    },[open])

    return (
        <>
            <div className="container mx-auto md:py-6 py-4">
                <div className="flex justify-center">
                    <Image src={"/blog.png"} width={1000} height={250} objectFit="contain" loading="eager" alt="ken"/>
                </div>
                <div className="md:w-1/2 m-auto md:space-y-4 justify-center items-center py-4 space-y-2 md:py-8">

                <div className="flex flex-col space-y-4">
                    <div className="flex items-center bg-light-card dark:bg-card p-2 shadow md:shadow-md rounded-md">
                        <p className="p-3 bg-light-button dark:bg-button rounded-full text-sm m-2 font-semibold">KEN.</p>
                        <div className="bg-light-input-bg dark:bg-input-bg p-2 hover:bg-light-button-hover dark:hover:bg-button-hover rounded-full transition delay-50 cursor-text md:pr-40 w-full" onClick={() => setOpen(b => !b)}>
                        <p className="text-light-faded-text dark:text-faded-text">{!!postText && !open ? "You have draft post" : "What's your thoughts, Ken?"}</p>
                        </div>
                    </div>

                    <div className="p-4 bg-light-card dark:bg-card rounded-md shadow md:shadow-md">
                    {/* Post section  */}
                    <div className="pb-2 border-b border-light-border dark:border-border">
                        <p className="text-md text-light-text dark:text-text font-semibold">KEN.</p>
                        <pre className="text-light-text dark:text-text font-sans py-2 ml-2 whitespace-normal">
                        <small className="text-light-faded-text dark:text-faded-text float-right">2h</small>
                        Madami kang pinag sasasabi
                        Madami kang pinag sasasabiMadami kang pinag sasasabiMadami kang pinag sasasabi
                        Madami kang pinag sasasabiMadami kang pinag sasasabiMadami kang pinag sasasabiMadami kang pinag sasasabiMadami kang pinag sasasabiMadami kang pinag sasasabi.
                        </pre>
                    </div>
                    {/* Comment section  */}
                    <div className="py-4 flex space-x-2 break-words">
                        <p className="ml-3 text-md text-light-text dark:text-text font-semibold">Jai</p>
                        <pre className="text-light-text dark:text-text font-sans whitespace-normal">Madami kang pinag sasasabi</pre>
                    </div>
                    {/* Comment input  */}
                    <div className="py-2">
                        <form className="flex space-x-2">
                        <textarea cols={1} rows={1} name="comment" id="comment" placeholder="Post a comment." className="p-1 w-full rounded-md bg-light-input-bg dark:bg-input-bg" style={{resize: "none"}}></textarea>
                        <input type="submit" value="Post" className="bg-light-active-button dark:bg-active-button rounded-md px-3 cursor-pointer text-white"/>
                        </form>
                    </div>
                    </div>

                    <div className="p-4 bg-light-card dark:bg-card rounded-md shadow md:shadow-md">
                    {/* Post section  */}
                    <div className="pb-2 border-b border-light-border dark:border-border">
                        <p className="text-md text-light-text dark:text-text font-semibold">KEN.</p>
                        <pre className="text-light-text dark:text-text font-sans py-2 ml-2">
                        <small className="text-light-faded-text dark:text-faded-text float-right">2h</small>
                        Madami kang pinag sasasabi
                        </pre>
                    </div>
                    {/* Comment section  */}
                    <div className="py-4 flex space-x-2 break-words">
                        <p className="ml-3 text-md text-light-text dark:text-text font-semibold">Jai</p>
                        <pre className="text-light-text dark:text-text font-sans whitespace-normal">Madami kang pinag sasasabi</pre>
                    </div>
                    {/* Comment input  */}
                    <div className="py-2">
                        <form className="flex space-x-2">
                        <textarea cols={1} rows={1} name="comment" id="comment" placeholder="Post a comment." className="p-1 w-full rounded-md bg-light-input-bg dark:bg-input-bg" style={{resize: "none"}}></textarea>
                        <input type="submit" value="Post" className="bg-light-active-button dark:bg-active-button rounded-md px-3 cursor-pointer text-white"/>
                        </form>
                    </div>
                    </div>

                    <div className="p-4 bg-light-card dark:bg-card rounded-md shadow md:shadow-md">
                    {/* Post section  */}
                    <div className="pb-2 border-b border-light-border dark:border-border">
                        <p className="text-md text-light-text dark:text-text font-semibold">KEN.</p>
                        <pre className="text-light-text dark:text-text font-sans py-2 ml-2">
                        <small className="text-light-faded-text dark:text-faded-text float-right">2h</small>
                        Madami kang pinag sasasabi
                        </pre>
                    </div>
                    {/* Comment section  */}
                    <div className="py-4 flex space-x-2 break-words">
                        <p className="ml-3 text-md text-light-text dark:text-text font-semibold">Jai</p>
                        <pre className="text-light-text dark:text-text font-sans">Madami kang pinag sasasabi</pre>
                    </div>
                    {/* Comment input  */}
                    <div className="py-2">
                        <form className="flex space-x-2">
                        <textarea cols={1} rows={1} name="comment" id="comment" placeholder="Post a comment." className="p-1 w-full rounded-md bg-light-input-bg dark:bg-input-bg" style={{resize: "none"}}></textarea>
                        <input type="submit" value="Post" className="bg-light-active-button dark:bg-active-button rounded-md px-3 cursor-pointer text-white"/>
                        </form>
                    </div>
                    </div>

                    <div className="p-4 bg-light-card dark:bg-card rounded-md shadow md:shadow-md">
                    {/* Post section  */}
                    <div className="pb-2 border-b border-light-border dark:border-border">
                        <p className="text-md text-light-text dark:text-text font-semibold">KEN.</p>
                        <pre className="text-light-text dark:text-text font-sans py-2 ml-2">
                        <small className="text-light-faded-text dark:text-faded-text float-right">2h</small>
                        Madami kang pinag sasasabi
                        </pre>
                    </div>
                    {/* Comment section  */}
                    <div className="py-4 flex space-x-2 break-words">
                        <p className="ml-3 text-md text-light-text dark:text-text font-semibold">Jai</p>
                        <pre className="text-light-text dark:text-text font-sans">Madami kang pinag sasasabi</pre>
                    </div>
                    {/* Comment input  */}
                    <div className="py-2">
                        <form className="flex space-x-2">
                        <textarea cols={1} rows={1} name="comment" id="comment" placeholder="Post a comment." className="p-1 w-full rounded-md bg-light-input-bg dark:bg-input-bg" style={{resize: "none"}}></textarea>
                        <input type="submit" value="Post" className="bg-light-active-button dark:bg-active-button rounded-md px-3 cursor-pointer text-white"/>
                        </form>
                    </div>
                    </div>

                </div>

                </div>

            </div>
            {open && 
            <div className="fixed top-52 md:top-55 inset-x-0 mx-auto flex flex-col justify-center backdrop-filter backdrop-blur-2xl rounded-md md:w-2/6 w-11/12 py-4 shadow-xl" ref={dropdown} id="makepost">
                <div className="flex justify-center mb-2 items-center relative">
                <label className="md:text-2xl text-md font-semibold text-light-text dark:text-text text-center pb-4">Create Post</label>
                <span className="absolute -top-2 right-0 mr-2 bg-light-button dark:bg-button hover:bg-light-button-hover dark:hover:bg-button-hover font-semibold text-light-faded-text dark:text-faded-text px-4 py-2 rounded-full cursor-pointer transition delay-50" onClick={() => setOpen(false)}>X</span>
                </div>
                <form className="flex flex-col space-y-4 px-2">
                <textarea cols={4} rows={4} placeholder="What's your thoughts, Ken?" className="bg-light-card dark:bg-card outline-none md:text-2xl text-xl rounded-md p-2 w-full break-words" style={{ resize: "none"}} value={postText} onChange={(e) => setPostText(e.target.value)}></textarea>
                <input type="submit" value="Post" className="text-white font-semibold bg-light-active-button dark:bg-active-button cursor-pointer rounded-md p-2 w-full" />
                </form>
            </div>
            }
        </>
    )
}