import { useState } from "react";
import RoundedContainer from "../UI/RoundedContainer"
import { useEffect } from "react";

const Form = () => {
    const [meme, setMeme] = useState("")

    const [image, setImage] = useState()
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => {
                setMeme(data.data.memes);

                setImage(data.data.memes[0].url)

            })
    }, [])


    const [input, setInput] = useState({
        memeTop: '',
        memeBottom: ''
    });
    const memetopChange = (e) => {
        setInput((prev) => { return { ...prev, memeTop: e.target.value } });
    }
    const memeBottomChange = (e) => {
        setInput((prev) => { return { ...prev, memeBottom: e.target.value } })
    }
    console.log(input);
    // console.log(image, '+++++++++++++');
    const genMeme = () => {
        // meme.filter(meme => {
        //     if (meme.box_count === 2){
        //         let randNum = Math.floor(Math.random() * 100)

        //         setImage(meme[randNum].url)
        //         console.log(meme[randNum].url);
        //     }
        // })
        let randNum = Math.floor(Math.random() * 100)

        setImage(meme[randNum].url)
        console.log(meme[randNum].url);
    }
    return (
        <div>
            <div className="mt-6 flex flex-col justify-center items-center gap-10" >
                <div className=" flex justify-center gap-10">
                    <input type="text" className=" w-2/3 rounded-lg p-3 border-gray-700 border-2" value={input.memeTop} onChange={memetopChange} />
                    <input type="text" className="w-2/3 rounded-lg p-3 border-gray-700 border-2" value={input.memeBottom} onChange={memeBottomChange} />
                </div>
                <button className="w-1/2" onClick={genMeme}>
                    <RoundedContainer className="bg-purple-900 p-4 text-center ">
                        <p>Get a new meme image 🖼️</p>
                    </RoundedContainer>
                </button>
                <RoundedContainer className="w-1/2 h-2/3 relative">
                    <img src={image} alt="memes" className="h-2/3" />
                    <RoundedContainer className="absolute   p-1 top-3 left-4  border-2 border-black">
                        <h2 className="text-center text-black font-extrabold  text-3xl">
                            {input.memeTop}
                        </h2>
                    </RoundedContainer >
                    <RoundedContainer className="absolute  p-1 bottom-3 right-4 border-2 border-black">
                        <h2 className="text-center text-black  font-extrabold  text-3xl">
                            {input.memeBottom}
                        </h2>
                    </RoundedContainer>
                </RoundedContainer>
            </div>
        </div>
    )
}

export default Form
